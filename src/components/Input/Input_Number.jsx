import { useMode } from 'ModeContext';

const InputNumber = ({ value, setValue, label, prefix }) => {
  const { mode } = useMode();
  const handleInputChange = (e) => {
    const input = e.target.value;

    // Use a regular expression to check if the input is a valid float
    const isValidFloat = /^-?\d*(\.\d*)?$/.test(input);

    if (isValidFloat || input === '') {
      setValue(input);
    }
  };
  return (
    <div className="relative flex flex-col w-full">
      <span
        className={`  text-sm font-normal ${
          mode ? 'text-[#D9D9D9]' : 'text-[#5F5F5F]'
        }`}
      >
        {label ? label : null}
      </span>
      <div className=" flex text-[#B0B5BC] mt-2 w-full font-normal text-xs justify-between relative  rounded py-3 px-5 border border-[#6E7A8A] gap-2">
        <span>{prefix ? prefix : null}</span>
        <input
          className="w-full outline-none"
          style={{
            background: 'inherit'
          }}
          value={value === null || value === undefined ? 0 : value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputNumber;
