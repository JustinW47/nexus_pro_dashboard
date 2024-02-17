import classNames from 'classnames';

const ButtonDark = ({ label, submit, onClickHandle }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClickHandle}
      className={classNames(
        `inline-block dark font-bold rounded-xl px-11 py-4 text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border   bg-black dark:text-gray text-[#ffffff] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] hover:shadow-[6px_5px_13px_0px_#0e6a94]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonDark;
