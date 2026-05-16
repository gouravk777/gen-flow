"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function InsightFlowSignIn() {
  const { data: session, status } = useSession();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f7ff] dark:bg-[#07111f] transition-colors duration-500 flex items-center justify-center px-6">
      {/* Brand Background Glow */}
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-[##22c55e]/20 dark:bg-[##22c55e]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-120px] w-[480px] h-[480px] bg-emerald-400/20 dark:bg-emerald-400/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Main Card */}
      <section className="relative z-10 w-full max-w-md">
        <div className="rounded-[34px] border border-[#bbf7d0] dark:border-white/10 bg-white/75 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(37,99,235,0.10)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.55)] p-8 md:p-10 transition-colors duration-500">
          
          {/* Brand */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[##22c55e]/20 blur-2xl rounded-2xl" />

              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[##22c55e] to-emerald-400 flex items-center justify-center shadow-lg">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 18L10 13L13 16L19 9"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="19" cy="9" r="2" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">
            <h1 className="text-[36px] font-semibold tracking-tight text-[#0f172a] dark:text-white">
              InsightFlow
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[#64748b] dark:text-slate-400 max-w-sm mx-auto">
              Centralize customer feedback, detect sentiment trends, and
              transform insights into smarter business decisions.
            </p>
          </div>

          {/* Loading */}
          {status === "loading" && (
            <div className="mt-10 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[##22c55e]/30 border-t-[##22c55e] rounded-full animate-spin" />
            </div>
          )}

          {/* Signed In State */}
          {session && status !== "loading" && (
            <div className="mt-10">
              <div className="rounded-3xl border border-[#bbf7d0] dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-6 text-center">
                
                {/* Avatar */}
                <div className="mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[##22c55e] to-emerald-400 text-white text-2xl font-semibold shadow-lg">
                  {session.user?.name?.charAt(0) || "U"}
                </div>

                <h2 className="text-xl font-semibold text-[#0f172a] dark:text-white">
                  Welcome Back
                </h2>

                <p className="mt-2 text-sm text-[#64748b] dark:text-slate-400">
                  Signed in as
                </p>

                <p className="mt-1 font-medium text-[##22c55e] dark:text-emerald-300 break-all">
                  {session.user?.email}
                </p>

                <button
                  onClick={() => signOut()}
                  className="mt-8 w-full h-14 rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-300 font-medium transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {/* Signed Out State */}
          {!session && status !== "loading" && (
            <>
              {/* Form */}
              <form
                className="mt-10 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#334155] dark:text-slate-300">
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full h-14 rounded-2xl border border-[#bbf7d0] dark:border-white/10 bg-white/90 dark:bg-white/[0.03] px-4 text-[#0f172a] dark:text-white placeholder-[#94a3b8] dark:placeholder-slate-500 outline-none transition-all focus:border-[##22c55e] dark:focus:border-emerald-400 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-[#334155] dark:text-slate-300">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm text-[#64748b] dark:text-slate-400 hover:text-[##22c55e] dark:hover:text-emerald-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-14 rounded-2xl border border-[#bbf7d0] dark:border-white/10 bg-white/90 dark:bg-white/[0.03] px-4 text-[#0f172a] dark:text-white placeholder-[#94a3b8] dark:placeholder-slate-500 outline-none transition-all focus:border-[##22c55e] dark:focus:border-emerald-400 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                {/* Remember */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[##22c55e]"
                  />

                  <span className="text-sm text-[#64748b] dark:text-slate-400">
                    Keep me signed in
                  </span>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group relative w-full h-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[##22c55e] to-emerald-400 text-white font-medium tracking-wide shadow-lg shadow-green-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-[-100%] h-full w-[40%] bg-white/20 skew-x-12 group-hover:left-[140%] transition-all duration-700" />
                  </div>

                  <span className="relative z-10">
                    Access Dashboard
                  </span>
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-[#bbf7d0] dark:bg-white/10" />

                <span className="text-[11px] uppercase tracking-[0.24em] text-[#94a3b8] dark:text-slate-500">
                  AI Powered
                </span>

                <div className="flex-1 h-px bg-[#bbf7d0] dark:bg-white/10" />
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[#bbf7d0] dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-4 text-center">
                  <p className="text-lg font-semibold text-[#22c55e] dark:text-emerald-300">
                    AI
                  </p>

                  <p className="mt-1 text-xs text-[#64748b] dark:text-slate-400">
                    Sentiment
                  </p>
                </div>

                <div className="rounded-2xl border border-[#bbf7d0] dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-4 text-center">
                  <p className="text-lg font-semibold text-[##22c55e] dark:text-emerald-300">
                    Live
                  </p>

                  <p className="mt-1 text-xs text-[#64748b] dark:text-slate-400">
                    Analytics
                  </p>
                </div>

                <div className="rounded-2xl border border-[#bbf7d0] dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-4 text-center">
                  <p className="text-lg font-semibold text-[##22c55e] dark:text-emerald-300">
                    Smart
                  </p>

                  <p className="mt-1 text-xs text-[#64748b] dark:text-slate-400">
                    Insights
                  </p>
                </div>
              </div>

              {/* Footer */}
              <p className="mt-8 text-center text-sm text-[#64748b] dark:text-slate-400">
                New to InsightFlow?{" "}
                <span className="font-medium text-[##22c55e] dark:text-emerald-300 hover:underline cursor-pointer">
                  Create account
                </span>
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}