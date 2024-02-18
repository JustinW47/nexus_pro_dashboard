import { useState } from 'react';

const InputAddress = ({ value, label, prefix, onInput }) => {
  const [input_value, setValue] = useState(value ? value : '');
  const handleInputChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };
  return (
    <div className="relative flex flex-col w-full gap-2">
      <span className="text-sm text-[#D9D9D9] font-normal">{label ? label : null}</span>
      <div className=" flex text-[#B0B5BC] font-normal text-xs justify-between relative  rounded-md py-3 px-5 border border-[#e4e4e4]">
        <input
          className="w-full outline-none "
          style={{
            background: 'inherit'
          }}
          value={input_value}
          onChange={(e) => {
            handleInputChange(e);
            onInput(e.target.value);
          }}
        />
        <span>{prefix ? prefix : null}</span>
      </div>
    </div>
  );
};

export default InputAddress;
