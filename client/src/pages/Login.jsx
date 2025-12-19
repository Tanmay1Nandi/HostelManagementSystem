import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

import lightBg from "../assets/images/login-day.jpg";
import darkBg from "../assets/images/login-night.jpg";
import logo from "../assets/images/logo.png";

export default function Login() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
    const [userType, setUserType] = useState("Student")
  const bgImage = theme === "light" ? darkBg : lightBg;

  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setLoading(false);
  }, [bgImage]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="h-[98vh] w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="">
        <div className="fixed top-3 right-4">
        <ThemeToggle />
        </div>

        {/* Login Card */}
        {/* <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl w-[90%] max-w-md text-white shadow-xl">
            <h1 className="text-3xl font-bold text-center mb-6">
            Hostel Management System
            </h1>

            <form className="space-y-4">
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-white"
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-white"
            />

            <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:scale-[1.02] transition"
            >
                Login
            </button>
            </form>
        </div> */}

        <div className="absolute
            top-6
            left-1/2
            -translate-x-1/2

            w-[80%]
            scale-100
            sm:scale-100
            lg:scale-100

            
            lg:translate-x-0
            
            lg:left-1/3
            xl:left-3/7

            flex flex-col
            items-center
            gap-6
            text-xl
            transition-all
            duration-300 mt-20">
            <div className="flex flex-col justify-center items-center text-white">
                <div
                    className="w-30 h-30 bg-center bg-contain bg-no-repeat ml-3"
                    style={{ backgroundImage: `url(${logo})` }}
                    />
                <div className="sm:text-[25px] text-white text-center dark:text-blue-800 ml-2 font-semibold">National Institute of Technology,</div>
                <div className="sm:text-[23px] dark:text-blue-800 text-white relative bottom-2 ml-1.5 font-semibold">Agartala</div>
            </div>
            <div className="dark:text-black text-white flex flex-col justify-center items-center gap-3 dark:bg-transparent bg-black/60 p-2 rounded-lg">
                <div className="text-2xl mt-0 font-semibold">Welcome! Please Login</div>
                <div className="flex gap-0 mt-4 border border-gray-300/10 dark:border-transparent rounded-sm text-xl font-semibold dark:bg-white ">
                    <button className={`px-6 cursor-pointer
                    ${userType === "Student" ? "bg-blue-800 dark:text-white" : "bg-transparent dark:text-blue-800"}
                
                      text-gray-300 rounded-sm py-1.5`} onClick={() => setUserType("Student")}>Student Login</button>
                    <button onClick={() => setUserType("Admin")} className={`px-2.5 sm:px-6 rounded-sm text-gray-300 cursor-pointer  ${userType === "Admin" ? "bg-blue-800 dark:text-white" : "bg-transparent dark:text-blue-800"}`}>Admin Login</button>
                </div>
                {userType === "Student" ?(
                    <div className="text-sm dark:text-grey-900 space-y-3 w-full mt-3 ">
                    {/* Email */}
                    <div className="relative dark:bg-white">
                        <HiOutlineUser
                        className="absolute left-2.5 top-1/2 -translate-y-1/2
                                   dark:text-gray-800 text-lg"
                        />
                        <input
                        type="email"
                        placeholder="Email or Student ID"
                        className="
                            w-full
                            pl-9
                            p-1.5
                            border border-white/50 lg:border-white/20
                            bg-transparent
                            outline-none
                        "
                        />
                    </div>

                    {/* Password */}
                    <div className="relative dark:bg-white">
                        <HiOutlineLockClosed
                        className="absolute left-2.5 top-1/2 -translate-y-1/2
                                    dark:text-gray-800 text-lg"
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        className="
                            w-full
                            pl-9
                            p-1.5
                            border border-white/50 lg:border-white/20
                            bg-transparent
                            outline-none
                        "
                        />
                    </div>
                    </div>):
                    (<div className="text-sm space-y-3 w-full mt-3">
                    {/* Email */}
                    <div className="relative dark:bg-white">
                        <HiOutlineUser
                        className="absolute left-2.5 top-1/2 -translate-y-1/2
                                    dark:text-gray-800 text-lg"
                        />
                        <input
                        type="email"
                        placeholder="Admin ID"
                        className="
                            w-full
                            pl-9
                            p-1.5
                            border border-white/50 lg:border-white/20
                            bg-transparent
                            outline-none
                        "
                        />
                    </div>

                    {/* Password */}
                    <div className="relative dark:bg-white">
                        <HiOutlineLockClosed
                        className="absolute left-2.5 top-1/2 -translate-y-1/2
                                    dark:text-gray-800 text-lg"
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        className="
                            w-full
                            pl-9
                            p-1.5
                            border  border-white/50 lg:border-white/20
                            bg-transparent
                            outline-none
                        "
                        />
                    </div>
                    </div>)
                }

                <div className="text-end text-sm text-blue-800 cursor-pointer mt-4 w-full">
                    <div className="sm:ml-55 font-[650] dark:text-blue-200 lg:dark:text-blue-200  rounded-sm pr-0.5">Forgot Password?</div></div>
                <button className="bg-blue-800/85 w-full rounded-sm p-1.5 cursor-pointer text-base font-medium text-gray-300">Login</button>
            </div>
        </div>
      </div>
    </div>
  );
}
