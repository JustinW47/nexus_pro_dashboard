import { useMode } from 'ModeContext';

const Board = ({ children }) => {
  const { mode } = useMode();

  return (
    <div
      className={`${
        mode ? ' bg-[#042433] border border-[#8c8c8c87]' : 'bg-[#ffffff]'
      } rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col p-2 w-full`}
    >
      {children}
    </div>
  );
};

export default Board;
