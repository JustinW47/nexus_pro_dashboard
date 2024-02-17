import { useMode } from 'ModeContext';
import { useState } from 'react';

const CheckBox = ({ value = false, label }) => {
  const [checked, setchecked] = useState(value);
  const { mode } = useMode();
  return (
    <div
      className="flex cursor-pointer gap-1 items-center"
      onClick={() => {
        setchecked(!checked);
      }}
    >
      <div className="border relative border-[#128fc8] w-8 h-8 text-center rounded-lg hover:opacity-70 ">
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
          {checked ? '✓' : ''}
        </span>
      </div>
      <span
        className={`  text-base font-medium ${
          mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default CheckBox;
