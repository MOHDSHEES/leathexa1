'use client'

import React from "react"
import Link from "next/link"

import CountUp from 'react-countup';

export default function CounterTwo(){
    return(
        <div className="container relative mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="counter-box relative text-center">
                <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={0} end={200} />+K</h3>
                <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Total User</span>
            </div>

            <div className="counter-box relative text-center">
                <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={0} end={15} />+</h3>
                <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Years of Experience</span>
            </div>

            <div className="counter-box relative text-center">
                <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={0} end={54} /></h3>
                <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Offices in the World</span>
            </div>

            <div className="counter-box relative text-center">
                <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={0} end={12} />K</h3>
                <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">No. of Job Positions</span>
            </div>
        </div>
    </div>

    )
}