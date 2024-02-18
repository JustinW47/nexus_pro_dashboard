import { useMode } from 'ModeContext';
import Table from 'components/Table';
import { classNames } from 'components/Utils';
import { useMemo } from 'react';
import { useTradingHistoryData } from 'hooks/useTradingHistoryData';
import { SpinningCircles } from 'react-loading-icons';

function formatTimestamp(timestamp) {
  const dateObject = new Date(timestamp);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const TradingHistory = () => {
  const data_ = useTradingHistoryData();
  console.log(data_, 'data_');
  const { mode } = useMode();
  const columns = useMemo(
    () => [
      {
        Header: 'Position',
        accessor: 'tradingHistory'
      },
      {
        Header: 'Entry Price',
        accessor: 'entryPrice'
      },
      {
        Header: 'Exit Price',
        accessor: 'exitPrice'
      },
      {
        Header: 'Invested',
        accessor: 'invested',
        Cell: ({ value }) => <div className="flex gap-2">{value}$</div>
      },
      {
        Header: 'P&L (Fee & Charges)',
        accessor: 'feeCharges',
        Cell: ({ value }) => (
          <div className="flex gap-2">
            <span
              className={classNames(
                'flex text-lg',
                value > 0 ? ' text-green-600' : ' text-red-600'
              )}
            >
              {value}
            </span>
          </div>
        )
      },
      {
        Header: 'Trade Start Date',
        accessor: 'startDate',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col">
              <div className="text-sm ">
                {formatTimestamp(row.original.startDate)}
              </div>
            </div>
          );
        }
      }
    ],
    []
  );

  return (
    <div
      className={`w-full h-[85%] inline-block dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray p-8 text-[#128FC8] transition-all`}
    >
      <div className={`flex flex-col w-full rounded-2xl h-[100%] overflow-y-auto ${
        mode ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
      }`}>
        {data_?.isFetched ? (
          <Table columns={columns} data={data_?.data?.data?.data} title={`trading`} />
        ) : (
          <div className="flex items-center justify-center w-full h-screen -translate-y-1/4">
            <SpinningCircles stroke="#007bff" speed={1.5} fill="#007bff" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingHistory;
