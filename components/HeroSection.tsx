import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div className="z-20 mx-auto mb-8 grid max-w-6xl grid-cols-1 place-items-center pt-48 text-center">
        <div className="container">
          <h1
            className="text-5xl font-semibold tracking-tight text-balance text-slate-950 dark:text-white sm:text-7xl"
            data-cy="primary-heading"
          >
            <span className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Smart
            </span>{" "}
            Repos<div className="lg:hidden"></div>
            <svg
              viewBox="0 0 2 2"
              fill="currentColor"
              className="mx-6 hidden size-2 lg:inline-flex"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <span className="rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Fast
            </span>{" "}
            Builds
          </h1>
          <p className="text-lg font-medium text-pretty sm:text-xl/8 text-slate-700 dark:text-slate-300 mx-auto mt-6 max-w-3xl">
            <strong className="font-bold text-slate-950 dark:text-slate-100">
              Get to green PRs in half the time.
            </strong>{" "}
            Nx optimizes your builds, scales your CI, and fixes failed PRs.
            Built for developers and AI agents.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"></div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm italic">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                display: "inline-block",
                transform:
                  "translateX(205.29px) translateY(0px) translateX(-50%) translateY(-50%)",
              }}
            >
              <div className="h-20 w-20 bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)] opacity-[0.8] dark:bg-[radial-gradient(var(--pink-500)_40%,transparent_60%)]"></div>
            </div>
          </div>
          <div
            className="relative w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50 antialiased backdrop-blur-xl dark:border-slate-900 dark:bg-slate-900/[0.8]"
            style={{ aspectRatio: "16/9" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
