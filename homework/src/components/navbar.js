import React from 'react'
import {Link} from 'react-router-dom'


const  Navbar = ()=> {
  return (
    <>
    
    <div className='flex flex-row items-center w-full gap-20 justify-around bg-[#EEEEEE]'>
        <ul className='flex h-[20vh] justify-between items-center gap-20'>
            <Link to="/home"   >
            <button className='py-[10px]  border-[5px] px-[20px] text-white bg-[black] font-bold  hover:bg-[gray]'>Home</button>
            </Link>
            <Link to="/about">
            <li className='py-[10px] px-[20px] bg-[black] text-white font-bold hover:bg-[gray]'>About</li>
            </Link>

            <Link to="/contactUs" >
                <li className =" py-[10px] px-[17px] bg-[black] text-white font-bold hover:bg-[gray]">ContactUs</li> 
            </Link>
 
        </ul>
      
    </div>
    
    </>
  )
}

export default Navbar
