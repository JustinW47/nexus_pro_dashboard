import { useState } from 'react';

const InputAddress = ({ value, label, prefix, onInput }) => {
  const [input_value, setValue] = useState(value ? value : '');
  const handleInputChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };
  return (
    <div className="relative flex flex-col">
      <span className="absolute -top-5">{label ? label : null}</span>
      <div className=" flex text-[#cccccc] font-semibold text-xl justify-between relative  rounded-2xl py-2 px-5 shadow-[0px_0px_3px_4px_rgba(0,0,0,0.1)] md:w-[350px] w-[200px] hover:shadow-[0px_0_5px_6px_rgba(0,0,0,0.1)] border border-[#e4e4e4]">
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
