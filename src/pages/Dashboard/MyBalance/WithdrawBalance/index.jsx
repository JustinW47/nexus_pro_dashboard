import { useMode } from 'ModeContext';
import WithdrawBalanceTop from './WithdrawBalanceTop';
import WithdrawBalanceBottom from './WithdrawBalanceBottom';

const WithdrawBalance = () => {
  const { mode } = useMode();
  return (
    <div
      className={`w-full h-[95%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray p-8 text-[#128FC8] transition-all overflow-auto`}
    >
      <div className="flex flex-col justify-between w-full">
        <WithdrawBalanceTop />
      </div>
      <div className="flex flex-col justify-between w-full">
        <WithdrawBalanceBottom />
      </div>
    </div>
  );
};

export default WithdrawBalance;
