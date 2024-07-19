import React from "react";
import Link from "next/link";
import { brandFilter, colorFilter, sizeFilter } from "../data/data";
import {FiSearch} from '../assets/icons/vander';

export default function Filter(){
    return(
        <div className="lg:col-span-3 md:col-span-4">
            <div className="rounded shadow dark:shadow-gray-800 p-4 sticky top-20">
                <h5 className="text-xl font-medium">Filter</h5>

                <form className="mt-4">
                    <div>
                        <label htmlFor="searchname" className="font-medium">Search:</label>
                        <div className="relative mt-2">
                            <FiSearch className="absolute size-4 top-[9px] end-4"></FiSearch>
                            <input type="text" className="h-9 pe-10 rounded px-3 border border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                        </div>
                    </div>
                </form>

                <div className="mt-4">
                    <h5 className="font-medium">Colors:</h5>
                    <ul className="list-none mt-2 space-x-1">
                        {colorFilter.map((item,index)=>{
                            return(
                                <li key={index} className="inline"><Link href="" className={`size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 inline-flex align-middle ${item}`} title={item}></Link></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="mt-4">
                    <h5 className="font-medium">Brands:</h5>
                    <ul className="list-none mt-2">
                        {brandFilter.map((item,index)=>{
                            return(
                                <li key={index} className="ms-0"><Link href="" className="text-slate-400 dark:text-gray-100"><i className="mdi mdi-shopping-outline text-orange-500 me-2"></i>{item}</Link></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="mt-4">
                    <h5 className="font-medium">Sizes:</h5>
                    <ul className="list-none mt-2 space-x-1">
                        {sizeFilter.map((item,index)=>{
                            return(
                                <li className="inline" key={index}><Link href="" className="w-10 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100">{item}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}