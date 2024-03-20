import React from 'react'
import skooltg from '../assets/skooltg.svg'
import skoolx from '../assets/skoolx.svg'

function Socials() {
    return (
        <div className='SOCIALS text-[#D6C6B6] flex flex-col items-center justify-center mt-20 lg:mt-40 '>

            <h3 className='text-6xl lg:text-9xl -rotate-12'>
                SOCIALS
            </h3>

            <div className="icons flex flex-row items-center  -rotate-12 my-5">
                <img src={skooltg} alt="" className='w-32 lg:w-52' />
                <img src={skoolx} alt="" className='w-32 lg:w-52' />
                <img src={skooltg} alt="" className='w-32 lg:w-52' />
            </div>

        </div>
    )
}

export default Socials