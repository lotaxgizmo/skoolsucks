import React from 'react'
import skoollaptop from '../assets/skoollaptop.svg'
import heroboard from '../assets/heroboard.svg'
import buybtn from '../assets/buybtn3.svg'

function Tokenomicsmobile() {
    return (
        <div>
            <div className='TOKENOMICSMOBILE h-[168px] mb-20 flex lg:hidden flex-col items-center justify-center relative  text-[#D6C6B6]'>

                <img src={heroboard} alt="" className='lg:w-[1217px] absolute z-[-1] top-1' />
                <div className="innerboard mt-14 flex flex-col justify-center items-center lg:w-[1217px]">
                    <h3 className="text-6xl ">
                        TOKENOMICS
                    </h3>


                </div>
            </div>



            <div className='flex lg:hidden mb-20 flex-col items-center justify-center relative  text-[#D6C6B6]'>

                <img src={heroboard} alt="" className='lg:w-[1217px] absolute z-[-1] top-1' />
                <div className="innerboard mt-14 flex flex-col justify-center items-center lg:w-[1217px]">


                    <div className="things somethingolde mt-14s flex flex-row justify-around sborder-2 w-full">
                        <div className="supply ">
                            <p className='text-4xl -rotate-6  mb-4'>TOKEN SUPPLY</p>
                            <p className='text-6xl rotate-6'>1,000,000,000</p>
                            {/* <p className='text-2xl -rotate-12'>BURNT</p> */}
                        </div>

                    </div>

                </div>
            </div>


            <div className='flex lg:hidden mb-20 flex-col items-center justify-center relative  text-[#D6C6B6]'>

                <img src={heroboard} alt="" className='lg:w-[1217px] absolute z-[-1] top-1' />
                <div className="innerboard mt-8 flex flex-col justify-center items-center lg:w-[1217px]">


                    <div className="things somethingolde mt-14s flex flex-row justify-around sborder-2 w-full">

                        <div className="liquidity ">
                            <p className='text-4xl -rotate-3  mb-4'>LIQUIDITY</p>
                            <p className='text-4xl rotate-3'>LOCKED AND BURNED</p>
                            {/* <p className='text-6xl rotate-6'>MINT DISABLED</p> */}
                        </div>

                    </div>
                    {/* <img src={buybtn} alt="" className=' w-[177px] lg:w-auto mt-[-105px]' /> */}
                </div>
            </div>

            <div className="w-full flex lg:hidden  items-center justify-center">
                <img src={buybtn} alt="" />
            </div>
        </div>
    )
}

export default Tokenomicsmobile