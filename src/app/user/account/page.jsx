import React from "react";
import Usertab from "../../components/user/user-tab";
import Details from "../../components/user/details";
import ResetPassword from "../../components/user/resetPassword";
import MainLayout from "../../components/layout/mainLayout";

export default function UserAccount() {
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
                <Details />
                <ResetPassword />
                {/* <DeleteAccount /> */}
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
