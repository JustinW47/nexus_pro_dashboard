import React, { forwardRef, useState } from 'react';
import useDarkSide from '../../../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMode } from 'ModeContext';

const Switcher = forwardRef((props, forwardRef) => {
  const { toggleMode } = useMode();
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? false : true
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    toggleMode(checked);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="w-16">
        <label className="cursor-pointer">
          <input type="checkbox" className="hidden" ref={forwardRef} />
          <div
            className={`w-[63px] p-1 rounded-full ${
              darkSide ? 'bg-blue-200' : 'bg-gray-200'
            } `}
          >
            <div
              className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${
                darkSide ? 'bg-blue-500 translate-x-6' : 'bg-white -rotate-180'
              }`}
            >
              <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
                sunColor="#ffbe58"
                moonColor="gray"
              />
            </div>
          </div>
        </label>
      </div>
    </>
  );
});

export default Switcher;
