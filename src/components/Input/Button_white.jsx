import classNames from 'classnames';
import { useMode } from 'ModeContext';
import React from 'react';

const ButtonWhite = ({ dark, size, label, color, onClickHandle }) => {
  const { mode } = useMode();
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={`inline-block font-bold rounded-lg px-8 py-3 text-[14px] leading-normal transition duration-150 ease-in-out 
      ${mode ? 'bg-[#0084C9] ' : '  bg-[#ffffff] '}
      text-[#EBF5FB]`}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
