import React from 'react'
import satellite from '../assets/satelite2.jpg'

const Satelite = () => {
  return (
    <div className='bg-black pb-20'>
        <div className='continer text-white'>
            <div className="h-[auto] flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%]">
                    <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
                        <p className="text-sky-800 uppercase">Our Mission</p>
                        <h1 className="uppercase text-5xl">Rapidscat</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosmolestiae reprehenderit expedita corporis, non doloremque.Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sitamet consectetur adipisicing elit. Eos molestiae reprehenderitexpedita corporis, non doloremque. Consequatur consecteturquisquam qui sunt.
                        </p>
                        <button  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                            View All
                        </button>
                    </div>
                    <div >
                        <img src={satellite} alt="" className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Satelite