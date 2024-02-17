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
        className={`  text-sm font-medium ${
          mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
        }`}
      >
        {label ? label : null}
      </span>
      <div className=" flex text-[#cccccc] w-full font-semibold text-xl justify-between relative  rounded py-2 px-5 shadow-[0px_0px_3px_4px_rgba(0,0,0,0.1)] hover:shadow-[0px_0_5px_6px_rgba(0,0,0,0.1)] border border-[#e4e4e4] ">
        <input
          className="w-full outline-none"
          style={{
            background: 'inherit'
          }}
          value={value === null || value === undefined ? 0 : value}
          onChange={handleInputChange}
        />
        <span>{prefix ? prefix : null}</span>
      </div>
    </div>
  );
};

export default InputNumber;
