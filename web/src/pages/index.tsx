import Image from 'next/image'
import appPreviewImg from '../assets/aplicacao-trilha-ignite.png'
import logoImg from '../assets/logo.svg'
import avataresImg from '../assets/avatares.png'
import iconImg from '../assets/icon.svg'
import { api } from '../lib/axios'
import { useState } from 'react'

interface HomeProps {
  poolCount: number,
  guessCount: number,
  userCount: number
}

export default function home(props: HomeProps) {
  const [poolTitle,setPoolTitle] = useState('');

 async function createPool(event){
    event.preventDefault()
    try {
      const res = await api.post('/pools', {
        title: poolTitle,
      });

      const { code } = res.data

      await navigator.clipboard.writeText(code)
      alert('Bolão criado com sucesso codigo copiado para área de transferência')
      setPoolTitle('')
    } catch (err) {
      console.log(err)
      alert('Falha ao criar o bolão, tente novamente')
    }
    
  }
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
      <Image alt='' src={logoImg} />

      <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
        Crie seu próprio bolão da copa e compartilhe entre amigos
      </h1>

      <div className="mt-10 flex items-center gap-2">
        <Image src={avataresImg} alt=''/>
        <strong className='text-gray-50 text-xl'>
          <span className='text-ignite-500 p-1'>+{props.userCount}</span>
          pessoas já estão usando
        </strong>
      </div>

      <form 
      onSubmit={createPool} 
      className='mt-10 flex gap-2'>
        <input
         className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
         type="text"
         name="" 
         required 
         placeholder='Qual seu bolão?'
         value={poolTitle}
         onChange={event => setPoolTitle(event.target.value)} />
        <button 
        className='bg-ignite-600 px-6 py-4 rounded font-bold uppercase text-gray-900 text-start
        hover:bg-ignite-700'
        type='submit'>
          Criar meu bolão
        </button>
      </form>

      <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
        Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
      </p>

      <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
        <div className="flex items-center gap-6">
          <Image src={iconImg} alt='' />
          <div className="flex flex-col">
            <span className='font-bold text-2xl'>+{props.poolCount}</span>
            <span>Bolões criados</span>
          </div>
        </div>

        <div className="w-px h-14 bg-gray-600"></div>

        <div className="flex items-center gap-6">
          <Image src={iconImg} alt='' />
          <div className="flex flex-col">
            <span className='font-bold text-2xl'>+{props.guessCount}</span>
            <span>Palpites enviados</span>
          </div>
        </div>
      </div>

      </main>

      <Image 
        src={appPreviewImg} 
        quality={100}
        alt="Dois celulares exibindo uma prévia do site" 
      />
    </div>
  )
}

export const getServerSideProps = async () => {

  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ])


  return {
    props: {
      poolCount : poolCountResponse.data.count,
      guessCount : guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}