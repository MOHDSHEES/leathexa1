import Link from "next/link";
import React, { useContext } from "react";
import { Avatar, Skeleton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { MyContext } from "@/src/context";
import { signOut } from "next-auth/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { usePathname } from "next/navigation";

const User = ({ userMenu, setUserMenu }) => {
  const pathname = usePathname();
  const { user, setBackDropOpen, loading } = useContext(MyContext);
  const logout = () => {
    setBackDropOpen(true);
    signOut();
  };
  const handleLinkClick = () => {
    setUserMenu(false);
  };
  return (
    <>
      {loading ? (
        <Skeleton
          className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white"
          variant="circular"
          width={34}
          height={34}
        />
      ) : (
        <button
          data-dropdown-toggle="dropdown"
          className="dropdown-toggle items-center"
          type="button"
          onClick={() => setUserMenu(!userMenu)}
        >
          <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white">
            {user ? (
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: "34px", height: "34px" }}
              >
                {user.name.slice(0, 1).toUpperCase()}
              </Avatar>
            ) : (
              <AccountCircleIcon />
            )}
          </span>
        </button>
      )}
      {userMenu && user ? (
        <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
          <ul className="py-2 text-start">
            <li className="ms-0">
              <p className="text-slate-400 pt-2 px-4">
                {user.name.slice(0, 15)}
              </p>
            </li>

            <li className="ms-0">
              <Link
                href="/user/account"
                onClick={handleLinkClick}
                className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
              >
                <PersonIcon className="h-4 w-4 me-2" />
                Account
              </Link>
            </li>

            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
            <li className="ms-0">
              <button
                // href="/login"
                onClick={logout}
                className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
              >
                <LogoutIcon className="h-4 w-4 me-2" /> Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        userMenu && (
          <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
            <ul className="py-2 text-start">
              {/* <li className="ms-0">
          <p className="text-slate-400 pt-2 px-4">
            {user.name.slice(0, 15)}
          </p>
        </li> */}

              <li className="ms-0">
                <Link
                  href={`/auth/login?callbackUrl=${pathname}`}
                  onClick={handleLinkClick}
                  className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                >
                  <LoginIcon className="h-4 w-4 me-2" /> SignIn
                </Link>
              </li>
              <li className="ms-0">
                <Link
                  href="/auth/signup"
                  onClick={handleLinkClick}
                  className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                >
                  <LoginIcon className="h-4 w-4 me-2" />
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        )
      )}
    </>
  );
};

export default User;
