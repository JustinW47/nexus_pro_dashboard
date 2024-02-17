import React from 'react';

export default function MenuBarMobile({ setter }) {
  return (
    <nav className="md:hidden z-20 fixed top-[10vh] left-0 right-0 h-[60px] flex [&>*]:my-auto px-2 w-fit text-white bg-gray-400 rounded-r-3xl">
      <button
        className="flex text-4xl text-[#ffffff]"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/svg/breadcrumbs.svg'}
          alt="wing"
          className="w-full lg:w-fit"
        />
      </button>
    </nav>
  );
}
