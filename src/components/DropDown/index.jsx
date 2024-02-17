import { useState } from 'react';

const DropDown = ({ content }) => {
  const [expended, setexpended] = useState(false);
  return (
    <div
      className="flex justify-start sm:gap-6 gap-2 pb-1 cursor-pointer md:text-base text-sm"
      onClick={() => {
        setexpended(!expended);
      }}
    >
      <div className="w-8 h-8">
        <span
          className={`cursor-pointer hover:opacity-70 transition-all duration-500 ${
            expended ? ' rotate-180 ' : 'rotate-0'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 cursor-pointer hover:opacity-70 transition-all duration-500${
              expended ? ' rotate-180' : 'rotate-0'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col">
        <span>{content}</span>
        <span
          className={` transition-[2s] ${
            expended ? ' max-h-4xl' : 'max-h-0'
          } h-16 bg-gray_md`}
        ></span>
      </div>
    </div>
  );
};

export default DropDown;
