import { useState } from 'react';

const InputToken = ({ token, value, onInput }) => {
  const [input_value, setValue] = useState(value ? value : '');
  return (
    <div className="h-fit flex bg-inherit rounded border border-[#6E7A8A] justify-between px-4 py-1 items-center w-full cursor-pointer">
      <span className='text-xs text-[#B0B5BC] font-normal'>$</span>
      <input
        className="text-[#B0B5BC] text-xs font-normal font-['Inter'] w-full h-full px-3.5 py-2.5 outline-none bg-inherit rounded"
        style={{ backgroundColor: 'inherit' }}
        onChange={(e) => {
          setValue(e?.target?.value);
          onInput(e.target.value);
        }}
        value={input_value}
      />
      {/* <div className="text-gray-600 text-xs font-bold font-['Inter'] sm:w-1/4 w-1/2 h-full flex items-center justify-end">
        {token + ' '} |{' '}
        <span className="p-2 text-green-600  hover:text-green-800">MAX</span>
      </div> */}
    </div>
  );
};

export default InputToken;
