'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTop(){
    let [visible, setVisible] = useState(false) 

    useEffect(()=>{
      if (typeof window !== 'undefined') {
          const toggleVisible = () => { 
              const scrolled = document.documentElement.scrollTop; 
              if (scrolled > 300){ 
                setVisible(true) 
              }  
              else if (scrolled <= 300){ 
                setVisible(false) 
              } 
            }; 

          // Add event listener only when window is defined (client-side)
          window.addEventListener('scroll', toggleVisible);

          // Remove event listener when the component unmounts
          return () => {
              window.removeEventListener('scroll', toggleVisible);
          };
      }
  },[])
  
    // const scrollToTop = () => {
    //   visible &&
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "auto",
    //     })
    // }
    return(
        <>
         <Link href="#"  id="back-to-top" className="back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-orange-500 text-white justify-center items-center" style={{display: visible ? 'inline-flex' : 'none'}}><i className="mdi mdi-arrow-up"></i></Link>
        </>
    )
}