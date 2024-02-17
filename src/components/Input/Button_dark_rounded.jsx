import classNames from 'classnames';
const ButtonDarkRounded = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={classNames(
        `inline-block dark font-bold rounded-full px-5 py-2 text-base uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2  bg-[#042433] dark:text-gray text-[#ffffff] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] hover:shadow-[6px_5px_13px_0px_#0e6a94]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonDarkRounded;
