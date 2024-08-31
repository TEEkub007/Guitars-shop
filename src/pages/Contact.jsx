import React from 'react'
import Layout from '../components/Layout';
import{ useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams()
  return (
    <Layout>
      <h1>{params.name}</h1>
      <h1 className="font-bold text-7xl text-center mb-2 text-blue-950">Contact US</h1>
      <hr />

      
      <h1 className='mb-3 text-center text-xl'>ติดต่อโทร 0345665445</h1>
      <h1 className='mb-3 text-center text-xl'>อีเมล dootguitar001@gmail.com</h1>
      <h1 className='mb-3 text-center text-xl font-bold'>สาขาที่ USA</h1>
      <div className="flex justify-center mt-3">
        <img className='w-1/2' src="https://www.bonnersmusic.co.uk/cdn/shop/files/Eastbourne_Guitars_1_960x.png?v=1628429730" alt="" />
        
      </div>
      
    </Layout>
  )
}

export default Contact