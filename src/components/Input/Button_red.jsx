import classNames from 'classnames';

const ButtonRed = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={classNames(
        `inline-block dark font-bold rounded-lg px-11 py-4 text-xs uppercase leading-normal transition duration-150 ease-in-out bg-[#eb3223] dark:text-gray text-[#ffffff] shadow-[4px_3px_13px_0px_#EB3223] hover:shadow-[6px_5px_13px_0px_#EB3223]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonRed;
