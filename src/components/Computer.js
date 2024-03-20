import React from 'react'
import skoollaptop from '../assets/skoollaptop.svg'
import buybtn3 from '../assets/buybtn3.svg'
import skoolsucks from '../assets/skoolsucks.svg'
import groupskool from '../assets/groupskool.svg'

function Computer() {
    return (
        <div className='COMPUTER lg:flex flex-col items-center justify-center mt-10 relative hidden'>
            <img src={skoollaptop} alt="" className='absolute z-0 top-1 pt-5' />

            <div className="flex flex-col relative mt-[95px] items-center">
                <img src={skoolsucks} alt="" className='w-[400px] z-20' />
                <img src={groupskool} alt="" className='absolute w-[876px] max-w-none z-10 top-0 opacity-35' />

            </div>

            <div className="flex flex-row two text-[#BEB2A1] z-10 xborder-2 aborder-red-500 mt-[9px] mx-[171px] w-[1044px]">

                <div className="lg:w-1/2 left justify-between">
                    <p className='text-left text-[24px] w-[363px]'>
                        Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet  Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet
                    </p>

                    <img src={buybtn3} alt="" />
                </div>

                <div className="lg:w-1/2 right flex flex-col items-end">
                    <p className='text-right text-[24px] w-[363px]'>
                        Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet  Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet Lorem ipsom dolor amet
                    </p>

                    <img src={buybtn3} alt="" />
                </div>
            </div>

            <div className="height h-[500px] dborder-2 dborder-black z-10">

            </div>

        </div>
    )
}

export default Computer