import { useMode } from 'ModeContext';
import AddBalanceTop from './AddBalanceTop';
import AddBalanceBottom from './AddBalanceBottom';

const AddBalance = () => {
  const { mode } = useMode();
  return (
    <div
      className={`w-full h-[95%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray p-8 text-[#128FC8] transition-all overflow-auto`}
    >
      <div className="flex flex-col justify-between w-full">
        <AddBalanceTop />
      </div>
      <div className="flex flex-col justify-between w-full">
        <AddBalanceBottom />
      </div>
    </div>
    // <div
    //   className={`w-full overflow-y-auto h-[100%] dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 flex lg:flex-row flex-col  justify-start lg:justify-center lg:items-start items-stretch ${
    //     mode ? 'bg-[#000000]' : 'bg-[#ffffff]'
    //   } dark:text-gray text-[#5F5F5F] transition-all p-10 `}
    // >
    //   <AddBalanceLeft />
    //   <div className="flex items-center justify-center h-full ">
    //     <div className="h-full pl-5 border-l-2 opacity-50 border-[#5F5F5F]"></div>
    //   </div>
    //   <AddBalanceRight />
    // </div>
  );
};

export default AddBalance;
