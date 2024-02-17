import classNames from 'classnames';

const ButtonGreen = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={classNames(
        `mb-4 inline-block dark w-full font-bold rounded-lg px-11 py-4 text-xs uppercase leading-normal transition duration-150 ease-in-out bg-[#1a8f5c] dark:text-gray text-[#ffffff] shadow-[4px_3px_13px_0px_#1A8F5C] hover:shadow-[6px_5px_13px_0px_#1A8F5C]`
      )}
      onClick={onClickHandle}
    >
      {label}
    </button>
  );
};

export default ButtonGreen;
