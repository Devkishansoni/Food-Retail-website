import React from 'react'
import Image from './shopping.png'

export default function Navbar() {
  return (
      <>
          <div className='w-full h-[70px] bg-blue-950 py-2 px-8 flex flex-row justify-between items-center'>
              <div>
                  <img src={Image} className='w-36 h-28'/>
              </div>
              <div>
                  <ul className='text-sm font-bold text-white flex flex-row gap-6'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Product</li>
                      <li>Catagory</li>
                      <li>Collections</li>
                      <li>Contact Us</li>
                  </ul>
              </div>
              <div className='flex gap-6'>
                  <i className="fa-solid fa-cart-shopping text-lg font-bold text-white"></i> 
                  <i class="fa-solid fa-bars text-lg font-bold text-white"></i>
                  <button className='w-[80px] h-[30px] rounded-sm  text-xs font-bold text-white bg-yellow-400'>Login</button>
              </div>
          </div>
      </>
  )
}
