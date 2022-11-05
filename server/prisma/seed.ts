import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data: {
            name: 'Sabrina',
            email: 'sabrina@gmail.com',
            avatarUrl: 'https://twitter.com/Sabslovly/photo',
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Exemplo bolão',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                },
            },
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-09T12:00:00.201Z',
            firstTeamcountryCode: 'DE',
            secondteamcountryCode: 'BR',
        }
    })
    
    await prisma.game.create({
        data: {
            date: '2022-11-08T12:00:00.201Z',
            firstTeamcountryCode: 'BR',
            secondteamcountryCode: 'AR',

            guesses: {
                create:{
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,
                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
}

main()