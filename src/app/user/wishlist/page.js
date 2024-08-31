import React from "react";
import Usertab from "../../components/user/user-tab";
import MainLayout from "../../components/layout/mainLayout";
import Wishlist from "../../components/wishlist/wishlist";

export default function WishList() {
  return (
    <>
      <MainLayout>
        <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
          <div className="md:container container-fluid relative">
            <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('/images/graphics/account.webp')] bg-center bg-no-repeat bg-cover"></div>
          </div>

          <div className="container relative md:mt-24 mt-16">
            <div className="md:flex">
              <Usertab />

              <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                <div className="rounded-md shadow dark:shadow-gray-800 p-6 py-0">
                  <ul>
                    <Wishlist />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
