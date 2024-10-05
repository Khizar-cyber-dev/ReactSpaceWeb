import React from 'react'
import surface from '../assets/moon-surface-hd.png'

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-10">
        <div className='h-full flex justify-center items-center p-4'>
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                    <h1 className='text-5xl font-bold'>Orbite The <br/>Earth</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis debitis sequi eius recusandae libero odit necessitatibus pariatur vero tempore beatae voluptas repellendus amet tempora exercitationem deleniti error repudiandae, hic dignissimos? Magnam molestiae error voluptatum inventore aperiam id ducimus dolore ipsa.</p>
                    <button className='bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded-md duration-200'>Learn More</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <img src={surface} alt=""className='absolute bottom-0 left-0' />
    </div>
  )
}

export default Hero