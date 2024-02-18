import classNames from 'classnames';

const ButtonDark = ({ label, submit, onClickHandle }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClickHandle}
      className={classNames(
        `inline-block dark font-bold rounded-xl px-8 py-3 text-sm leading-normal transition duration-150 ease-in-out bg-[#0084C9] dark:text-gray text-[#EBF5FB]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonDark;
