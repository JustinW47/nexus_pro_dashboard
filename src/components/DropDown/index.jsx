import { useState } from 'react';

const DropDown = ({ content, description }) => {
  const [expended, setexpended] = useState(false);
  return (
    <div
      className="flex justify-between cursor-pointer border border-[#6E7A8A] mt-2 p-2"
      onClick={() => {
        setexpended(!expended);
      }}
    >
      
      <div className="flex flex-col">
        <span className='text-sm text-[#B0B5BC] text'>{content}</span>
        <span
          className={` transition-[2s] ${
            expended ? ' max-h-4xl mt-4' : 'max-h-0'
          } h-fit text-xs text-[#6E7A8A] leading-5`}
        >
          {
            expended ?
              description !== undefined ? description : ''
              : ''
          }
        </span>
      </div>

      <div className="w-6 h-6 flex items-start">
        <span
          className={`cursor-pointer hover:opacity-70 transition-all duration-500 text-[#6E7A8A] ${
            expended ? ' rotate-180 ' : 'rotate-0'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 cursor-pointer hover:opacity-70 transition-all duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default DropDown;
