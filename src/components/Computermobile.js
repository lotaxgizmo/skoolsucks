import React from 'react'
import skoollaptop from '../assets/skoollaptop.svg'
import buybtn3 from '../assets/buybtn.svg'
import skoolsucks from '../assets/skoolsucks.svg'
import groupskool from '../assets/groupskool.svg'

function Computermobile() {
    return (
        <div className='COMUTERMOBILE flex lg:hidden flex-col items-center justify-center mt-10 relative '>
            <img src={skoollaptop} alt="" className='za s' />

            <div className="flex flex-col relative mt-[57px] items-center">

                <img src={skoolsucks} alt="" className='w-[400px] z-20' />
                <img src={groupskool} alt="" className='absolute w-96 max-w-none z-10 top-0 opacity-35' />

            </div>

            <div className="flex flex-row two text-white z-10 dborder-2 aborder-red-500 mt-[9px] mx-[171px] dw-[1044px]">

                <div className="lg:w-1/2 left justify-between">
                    <p className='text-left text-[24px] w-[363px]'>
                        Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet  Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet
                    </p>

                    <img src={buybtn3} alt="" />
                </div>


            </div>

        </div>
    )
}

export default Computermobile