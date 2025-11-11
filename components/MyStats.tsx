import React from "react";

type Props = {};

export default function MyStats({}: Props) {
  return (
    <div className="mt-16 lg:mt-40">
      <section id="statistics">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 justify-between gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-sm flex-col gap-y-2">
              <dt className="text-base leading-7 text-slate-600 dark:text-slate-400">
                use Nx every day
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                <span className="text-blue-500 dark:text-sky-500">
                  2.5 million
                </span>{" "}
                developers
              </dd>
            </div>
            <div className="mx-auto flex max-w-sm flex-col gap-y-2">
              <dt className="text-base leading-7 text-slate-600 dark:text-slate-400">
                companies use Nx to ship their products
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                <span className="text-blue-500 dark:text-sky-500">
                  Over 70%
                </span>{" "}
                of Fortune 500
              </dd>
            </div>
            <div className="mx-auto flex max-w-sm flex-col gap-y-2">
              <dt className="text-base leading-7 text-slate-600 dark:text-slate-400">
                on NPM every month
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                <span className="text-blue-500 dark:text-sky-500">
                  24 million
                </span>{" "}
                downloads
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
