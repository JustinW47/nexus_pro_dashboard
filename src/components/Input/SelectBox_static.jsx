import { useMode } from 'ModeContext';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

const SelectBox = ({ list, onChangeHandle, label, value }) => {
  const optionRef = useRef([]);
  const selectRef = useRef(null);
  const handleClickOutside = () => {
    if (expanded) setExpanded(!expanded);
  };

  const ref = useDetectClickOutside({ onTriggered: handleClickOutside });
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, selectItem] = useState(value > 0 ? value : 0);
  const [word, setWord] = useState('');
  const [currentIndex, setindex] = useState(undefined);
  const { mode } = useMode();

  useEffect(() => {
    if (list) {
      if (
        !list[value > 0 ? value : 0] ||
        !list[value > 0 ? value : 0]['value']
      ) {
        if (list[0] && list[0]['value']) onChangeHandle(list[0]['value']);
      } else onChangeHandle(list[value > 0 ? value : 0]['value']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (expanded && list?.length > 0 && list) {
      function handleKeyDown(e) {
        if (e.key.length === 1) {
          let f = undefined;
          let flag = true;
          if (word === e.key) {
            if (
              list[currentIndex + 1]?.text
                ?.toUpperCase()
                ?.indexOf(e.key.toUpperCase()) === 0
            ) {
              f = currentIndex + 1;
              flag = false;
            }
          }
          if (flag) {
            for (let index = 0; index < list?.length; index++) {
              const element = list[index];
              if (
                element?.text.toUpperCase().indexOf(e.key.toUpperCase()) === 0
              ) {
                f = index;
                break;
              }
            }
          }
          if (f) {
            optionRef.current[f].scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
            optionRef.current[f].style.backgroundColor = 'gray';
            for (let index = 0; index < list.length; index++) {
              if (f !== index)
                optionRef.current[index].style.backgroundColor = 'inherit';
            }
          }
          setindex(f);
          setWord(e.key);
        }
      }
      document.addEventListener('keydown', handleKeyDown);
      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      setWord('');
      for (let index = 0; index < list.length; index++) {
        optionRef.current[index].style.backgroundColor = 'inherit';
      }
    }
  }, [expanded, word, list, currentIndex]);
  if (!list?.length || list?.length === 0)
    return (
      <div
        ref={selectRef}
        className={`relative flex flex-col justify-start items-start space-y-2 w-full cursor-pointer ${
          !expanded && 'overflow-hidden'
        } transition-all`}
      ></div>
    );
  return (
    <div
      ref={selectRef}
      className={`relative flex flex-col justify-start items-start space-y-2 w-full cursor-pointer ${
        !expanded && 'overflow-hidden'
      } transition-all`}
    >
      <span
        className={`  text-base font-medium ${
          mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
        }`}
      >
        {label}
      </span>
      <div
        className={` cursor-pointer   ${
          expanded ? ' bg-[#ebebeb] overflow-hidden ' : '  bg-inherit '
        }
        px-3.5 py-2.5 w-full relative bg-inherit rounded border border-[#128FC8] hover:border-[#0a518e] justify-between items-center gap-40 flex cursor-pointer  shadow-md
        `}
        ref={ref}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="flex text-xs font-bold text-neutral-400 bg-inherit">
          {list[selectedItem]?.text && list[selectedItem]?.text}
          <span
            className={`absolute w-5 h-5 top-1/2 -translate-y-1/2 transition-all text-sky-600 text-center text-xs font-bold right-2 ${
              expanded && ' rotate-180'
            }`}
          >
            ▽
          </span>
        </div>
      </div>
      {
        <div
          className={` ${
            !expanded
              ? ' -top-[500px] translate-y-0 transition-all h-full '
              : ' top-16'
          } ${
            mode ? 'bg-[#042433]' : 'bg-gray-300'
          } z-50 transition-all overflow-y-auto h-40  p-4 text-white absolute -bottom-2 flex flex-col items-start w-full -left-0 border border-white rounded-xl`}
          style={{
            boxShadow:
              '0px 4px 15px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(34, 41, 56, 0.9)'
          }}
        >
          {list.map((item, i) => (
            <div
              key={i}
              ref={(el) => (optionRef.current[i] = el)}
              onClick={() => {
                selectItem(i);
                setExpanded(false);
                onChangeHandle(item['value']);
              }}
              className={`${
                selectedItem === i
                  ? 'text-white border-l border-l-gray-400 border-r border-r-gray-400 '
                  : ' text-gray-500'
              } p-1 px-3 w-full`}
            >
              {item?.text}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default SelectBox;
