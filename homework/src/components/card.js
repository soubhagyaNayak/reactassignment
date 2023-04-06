import React from 'react'

const  Card =({imgSrc}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 h-[480px] w-[400px] shadow-2xl rounded-[30px] bg-[white] '>
    <div>
        <figure className='pt-10 mt-10 bg-gray'>
            <img src={imgSrc} alt='' className='w-[250px] h-[250px] rounded-xl' ></img>
        </figure>
      
    </div>
    <div className='flex flex-col itmes-center justify-center gap-4'>
        <h2 className='text-3xl font-bold text-center'>Tops</h2>
        <button className='py-[10px] px-[20px] bg-[blue] text-white rounded-xl'>Buy Now</button>
    </div>
    </div>
  )
}

export default Card
