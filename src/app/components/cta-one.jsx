'use client'
import React,{useState, useEffect} from "react";
import Link from "next/link";

export default function CtaOne(){
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
  
    let deadline = "December, 31, 2024";
  
    let getTime = () => {
        let time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };
      useEffect(() => {
        let interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
      })

    return(
        <>
        <div className="container-fluid relative md:mt-24 mt-16">
            <div className="grid grid-cols-1">
                <div className="relative overflow-hidden py-24 px-4 md:px-10 bg-orange-600 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg3.png')"}}>
                    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url('/images/hero/bg-shape.png')`}}></div>
                    <div className="grid grid-cols-1 justify-center text-center relative z-1">
                        <h3 className="text-4xl leading-normal tracking-wide font-bold text-white">End of Season Clearance <br/> Sale upto 30%</h3>
                        <div id="countdown" className="mt-6">
                            <ul className="count-down list-none inline-block">
                                <li id="days" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{days}<p className='count-head'>Days</p></li>
                                <li id="hours" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{hours}<p className='count-head'>Hours</p></li>
                                <li id="mins" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{minutes}<p className='count-head'>Mins</p></li>
                                <li id="secs" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{seconds}<p className='count-head'>Secs</p></li>
                                <li id="end" className="h1"></li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <Link href="/sale" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md"><i className="mdi mdi-cart-outline"></i> Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}