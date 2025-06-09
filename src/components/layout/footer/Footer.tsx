import React from "react";

function Footer() {
  return (
    <footer className="bg-black px-8 py-12">
      <h2 className="text-center text-3xl font-bold text-white">
        Be the first to know.
      </h2>
      <p className="mx-auto mt-4 w-4/5 text-center text-[1.25rem] text-white">
        Discover our newest lanches and latest happenings.
      </p>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border-b border-b-white py-4 text-white outline-none placeholder:text-white"
      />
      <button className="mt-6 w-full rounded-xl bg-white p-4 text-xl font-normal text-black transition-all duration-300 hover:bg-gray-200">
        Submit
      </button>
    </footer>
  );
}

export default Footer;
