import { useMode } from 'ModeContext';
import AddBalanceLeft from './AddBalanceLeft';
import AddBalanceRight from './AddBalanceRight';

const AddBalance = () => {
  const { mode } = useMode();
  return (
    <div
      className={`w-full overflow-y-auto h-[100%] dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 flex lg:flex-row flex-col  justify-start lg:justify-center lg:items-start items-stretch ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray text-[#5F5F5F] transition-all p-10 shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] `}
    >
      <AddBalanceLeft />
      <div className="flex items-center justify-center h-full ">
        <div className="h-full pl-5 border-l-2 opacity-50 border-[#5F5F5F]"></div>
      </div>
      <AddBalanceRight />
    </div>
  );
};

export default AddBalance;
