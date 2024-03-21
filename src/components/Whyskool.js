import React from 'react'
import why from '../assets/why.svg'
import threelogo from '../assets/threelogo.svg'
import math from '../assets/math.svg'
import buybtn2 from '../assets/buybtn2.svg'

function Whyskool() {
    return (
        <div className='WHYSKOOL flex flex-col items-center justify-center'>
            <img src={why} alt="" className='lg:mb-[-100px]' />

            <div className="two flex flex-col lg:flex-row">
                <div className="lg:w-1/2 image lg:mt-32">
                    <img src={math} alt="" />
                </div>

                <div className="lg:w-1/2 right px-10 text-white">
                    <img src={threelogo} alt="" />
                    <p className='w-[20px]x text-[35px] lg:text-[35px] lg:rotate-[10deg]' >Remember me? You used to draw me all the time when you were a kid.

                        Now that’s you’re all grown up, you can do cool adult things like buying me on the Solana blockchain.</p>
                    <img src={buybtn2} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Whyskool