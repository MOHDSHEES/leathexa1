import Link from "next/link";
import React from "react";

const DeleteAccount = () => {
  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
      <h5 className="text-lg font-semibold mb-5 text-red-600">
        Delete Account :
      </h5>

      <p className="text-slate-400 mb-4">
        Do you want to delete the account? Please press below "Delete" button
      </p>

      <Link
        href=""
        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 text-white rounded-md"
      >
        Delete
      </Link>
    </div>
  );
};

export default DeleteAccount;
