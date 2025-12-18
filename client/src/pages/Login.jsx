import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

import lightBg from "../assets/images/login-light.jpg";
import darkBg from "../assets/images/login-dark.jpg";

export default function Login() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

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
      className="h-screen w-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="relative">
        <div className="fixed top-3 right-4">
        <ThemeToggle />
        </div>

        {/* Login Card */}
        <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl w-[90%] max-w-md text-white shadow-xl">
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
        </div>
      </div>
    </div>
  );
}
