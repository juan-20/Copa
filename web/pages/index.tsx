import React from 'react'

interface HomeProps {
  count: number
}

export default function home(props: HomeProps) {
  return (
    <div>Contagem: {props.count}</div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/pools/count')
  const data = await res.json()

  return {
    props: {
      count : data.count
    }
  }
}