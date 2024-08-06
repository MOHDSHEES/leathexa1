"use client";
import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiUser, FiMail, FiMessageCircle } from "../../../assets/icons/vander";
import { commentsData } from "../../../data/data";
import Review from "./review";
import AddReviewModal from "./addReviewModal";

export default function ProductReviewTab({ product }) {
  let [activeTab, setActiveTab] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
        <div className="lg:col-span-3 md:col-span-5">
          <div className="sticky top-20">
            <ul
              className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="ms-0">
                <button
                  className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange-500 duration-500 ${
                    activeTab === 1
                      ? "text-white bg-orange-500 hover:text-white"
                      : ""
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  Description
                </button>
              </li>
              <li className="ms-0">
                <button
                  className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange-500 duration-500 ${
                    activeTab === 2
                      ? "text-white bg-orange-500 hover:text-white"
                      : ""
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Additional Information
                </button>
              </li>
              <li className="ms-0">
                <button
                  className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange-500 duration-500 ${
                    activeTab === 3
                      ? "text-white bg-orange-500 hover:text-white"
                      : ""
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  Review
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-9 md:col-span-7">
          <div
            id="myTabContent"
            className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
          >
            {activeTab === 1 && (
              <div>
                <p className="text-slate-400">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making a neutral judgement
                  on the visual impact and readability of the typefaces
                  (typography), or the distribution of text on the page (layout
                  or type area). For this reason, dummy text usually consists of
                  a more or less random series of words or syllables.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <table className="w-full text-start">
                  <tbody>
                    <tr className="bg-white dark:bg-slate-900">
                      <td
                        className="font-semibold pb-4"
                        style={{ width: "100px" }}
                      >
                        Color
                      </td>
                      <td className="text-slate-400 pb-4">
                        Red, White, Black, Orange
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                      <td className="font-semibold py-4">Material</td>
                      <td className="text-slate-400 py-4">Cotton</td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                      <td className="font-semibold pt-4">Size</td>
                      <td className="text-slate-400 pt-4">S, M, L, XL, XXL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <Review
                  commentsData={commentsData}
                  setOpen={setOpen}
                  productId={product._id}
                  numReviews={product.numReviews}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <AddReviewModal open={open} setOpen={setOpen} productId={product._id} />
    </>
  );
}
