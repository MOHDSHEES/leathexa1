import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileApp from "../components/mobile-app";
import Switcher from "../components/switcher";
import CounterTwo from "../components/counter-two";

import { jobData } from "../data/data";
import SecondaryLayout from "../components/layout/secondaryLayout";

export default function Career() {
  return (
    <>
      <SecondaryLayout>
        <section className="relative table w-full py-36 lg:py-44 bg-[url('/images/hero/pages.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center mt-12">
              <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
                Job Opening
              </h3>
            </div>
          </div>

          <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                <Link href="/">Cartzio</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                aria-current="page"
              >
                Job Opening
              </li>
            </ul>
          </div>
        </section>
        <section className="relative md:py-24 py-16">
          <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
              <div className="lg:col-span-5 md:col-span-6">
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 gap-6">
                      <Image
                        src="/images/ab3.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-md"
                        alt=""
                      />
                      <Image
                        src="/images/ab4.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-md"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="grid grid-cols-1 gap-6">
                      <Image
                        src="/images/ab1.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-md"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 md:col-span-6">
                <div className="lg:ms-5">
                  <h3 className="mb-6 font-semibold text-3xl leading-normal">
                    We are Largest Job <br /> Site in The World
                  </h3>

                  <p className="text-slate-400 max-w-xl mb-2">
                    Upgrade your style with our curated sets. Choose confidence,
                    embrace your unique look.
                  </p>
                  <p className="text-slate-400 max-w-xl">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text. This might
                    also explain why one can now find slightly different
                    versions.
                  </p>

                  <div className="mt-6">
                    <Link href="" className="text-orange-500">
                      Read More{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CounterTwo />

          <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                Job Openings
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                Upgrade your style with our curated sets. Choose confidence,
                embrace your unique look.
              </p>
            </div>

            <div className="lg:flex justify-center mt-2">
              <div className="lg:w-3/4">
                {jobData.map((item, index) => {
                  return (
                    <div
                      className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 duration-500 mt-6"
                      key={index}
                    >
                      <div>
                        <Link
                          href="/"
                          className="text-lg font-semibold hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                        <p className="text-slate-400 mt-1">{item.openings}</p>
                      </div>

                      <Link
                        href="/"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-500 border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4"
                      >
                        Apply now
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <MobileApp />
        </section>
      </SecondaryLayout>
    </>
  );
}
