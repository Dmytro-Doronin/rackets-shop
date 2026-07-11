import Link from "next/link";

export default function RacketsNotFound() {
  return (
    <main className="flex flex-1 items-center bg-[#f7f8f5]">
      <section className="mx-auto w-full max-w-[1480px] px-5 py-16 sm:px-8 lg:px-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#101516] sm:text-5xl">
            Racket page not found
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#444c45]">
            The racket page you are looking for is not available.
          </p>
          <Link
            href="/rackets"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-[#4d6500] bg-[#a7d129] px-5 text-sm font-semibold text-[#17200f] transition-colors hover:bg-[#b8df36] sm:text-base"
          >
            Back to rackets
          </Link>
        </div>
      </section>
    </main>
  );
}
