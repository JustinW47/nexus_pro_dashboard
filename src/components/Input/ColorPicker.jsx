import { useState } from 'react';

export default function ColorSelectBox({ onChangeHandle }) {
  // const [selectedColor, setSelectedColor] = useState();
  const colors = [
    { name: 'red', bgColor: 'bg-red-500', selectedColor: 'ring-red-500' },
    { name: 'green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
    {
      name: 'green_2',
      bgColor: 'bg-[#1A8F5C]',
      selectedColor: 'ring-[#1A8F5C]'
    },
    {
      name: 'yellow',
      bgColor: 'bg-[#EA8A21]',
      selectedColor: 'ring-[#EA8A21]'
    },
    { name: 'blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' }
  ];
  let status = [];
  for (let index = 0; index < colors.length; index++) status.push(false);
  const [colorSelectedStatus, setColorSelectedStatus] = useState(status);
  const [updating, setupdating] = useState(new Date());

  return (
    <div className="flex items-center">
      <div className="mt-4 flex items-center space-x-3 bg-gray-200 p-3 rounded-full">
        {colors.map((color, i) => (
          <div
            key={i}
            value={color}
            onClick={() => {
              let arr = colorSelectedStatus;

              arr[i] = !arr[i];

              // let values = [];
              // arr.forEach((v, index) => {
              //   if (v) values.push(colors[index].name);
              // });
              // onChangeHandle(values);
              setColorSelectedStatus(arr);
              setupdating(new Date());
            }}
            className={`
              ${color.selectedColor} 
              ${
                colorSelectedStatus[i] ? 'ring-2' : ''
              } -m-0.5 relative cursor-pointer p-0.5 rounded-full flex items-center justify-center focus:outline-none `}
          >
            <span as="span" className="sr-only">
              {color.name}
            </span>
            <span
              aria-hidden="true"
              className={`
                ${color.bgColor} 
                h-8 w-8 rounded-full text-green-800 relative border border-gray-500
              `}
            >
              {colorSelectedStatus[i] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
