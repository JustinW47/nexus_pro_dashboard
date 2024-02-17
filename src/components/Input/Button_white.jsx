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
      className={`inline-block font-bold rounded-lg px-11 py-4 text-xs uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2
      ${mode ? 'bg-[#000000] ' : '  bg-[#ffffff] '}
      text-[#128FC8] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
