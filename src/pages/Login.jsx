import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Check } from "lucide-react";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[#0d1a1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2b2b] via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-[70%] h-[65%] rounded-full bg-gradient-to-tl from-[#c0392b] via-[#e74c3c]/60 to-transparent blur-[80px] opacity-90" />
      <div className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-full bg-gradient-to-tl from-[#e67e22] to-transparent blur-[60px] opacity-60" />
      <div className="absolute top-0 left-0 w-[40%] h-[40%] rounded-full bg-[#0CC8A8]/20 blur-[80px]" />

      <div className=" hidden lg:flex items-center gap-2 absolute top-6 left-6">
        <div className="w-7 h-7 rounded-full bg-primary-teal flex items-center justify-center text-white font-bold text-4xl">
          •
        </div>
        <span className="font-bold text-xl tracking-tight text-white">aps</span>
      </div>
      <div className="w-full min-h-screen max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="relative z-10 hidden lg:flex flex-col justify-between flex-1 px-16 py-12 text-white">
          <div className="max-w-md md:max-w-full">
            <h1 className="text-4xl xl:text-[48px] font-medium leading-[60px] mb-10">
              Expert level Cybersecurity
              <br />
              in <span className="text-primary-teal">hours</span> not weeks.
            </h1>
            <div className="space-y-4 mb-16">
              <p className="font-semibold text-base text-white/90">
                What's included
              </p>
              <FeatureItem text="Effortlessly spider and map targets to uncover hidden security flaws" />
              <FeatureItem text="Deliver high-quality, validated findings in hours, not weeks." />
              <FeatureItem text="Generate professional, enterprise-grade security reports automatically." />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1 text-white font-medium text-sm">
              <span className="text-base text-green-400">★</span> Trustpilot
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-white">Rated 4.5/5.0</span>
              <span className="text-gray-400">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 lg:max-w-[520px] flex items-start sm:items-center justify-center px-6 sm:px-10 py-12 min-h-screen flex-col lg:min-h-0">
          <div className="lg:hidden static sm:absolute top-6 left-6 mb-5 flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-full bg-primary-teal flex items-center justify-center text-white text-4xl font-bold">
              •
            </div>
            <span className="font-bold">aps</span>
          </div>

          <div className="w-full max-w-[420px] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl px-8 py-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1.5">
                Sign up
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/dashboard"
                  className="text-primary-teal hover:underline font-medium"
                >
                  Log in
                </Link>
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3.5">
              <Input placeholder="First name*" required />
              <Input placeholder="Last name*" required />
              <Input type="email" placeholder="Email address*" required />

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8+ characters)*"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3 py-1">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-teal focus:ring-primary-teal dark:border-gray-600 dark:bg-gray-800 accent-primary-teal"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer"
                >
                  I agree to Aps's{" "}
                  <a
                    href="#0"
                    className="text-primary-teal hover:underline font-medium"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and acknowledge the{" "}
                  <a
                    href="#0"
                    className="text-primary-teal hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full !h-10 sm:!h-12 text-base rounded-full mt-1"
              >
                Create account
              </Button>
            </form>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 h-10 sm:h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-900 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.87M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>

              <button className="flex-1 h-10 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>

              <button className="flex-1 h-10 sm:h-12 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-blue-700 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3.5">
    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
      <Check className="w-6 h-6 text-primary-teal" />
    </div>
    <span className="text-gray-300 text-sm leading-relaxed">{text}</span>
  </div>
);
