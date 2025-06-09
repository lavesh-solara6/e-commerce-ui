import React from "react";

function Navbar() {
  return (
    <nav className="flex h-16 bg-black pt-3">
      {/* Section 1 - COACH */}
      <div className="relative z-20 flex-1 overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-br-lg bg-black text-white">
          <span className="font-serif text-[1rem] font-bold">COACH</span>
        </div>
        <div className="absolute inset-0 z-0 bg-white"></div>
      </div>

      <div className="relative z-20 flex-1 overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-x-2 rounded-t-lg bg-white text-black">
          <span className="font-serif text-[1rem] font-bold">COACH</span>{" "}
          <span className="text-[1rem] font-normal">OUTLET</span>
        </div>
        <div className="absolute inset-0 z-0 bg-black"></div>
      </div>

      {/* Section 3 - Icons */}
      <div className="relative z-20 flex w-[120px] items-center">
        <div className="absolute inset-0 z-10 flex items-center justify-evenly rounded-bl-lg bg-black p-2 text-white">
          <a className="flex items-center justify-center p-2" href="#">
            <span className="text-[1.5rem]">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
          </a>
          <button className="flex items-center justify-center p-2 text-[1.25rem]">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="absolute inset-0 z-0 bg-white"></div>
      </div>
    </nav>
  );
}

export default Navbar;
