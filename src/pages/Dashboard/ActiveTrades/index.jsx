import { useMode } from 'ModeContext';
import Table from 'components/Table';
import { classNames } from 'components/Utils';
import { useMemo } from 'react';
import { getData } from './mock';

const ActiveTrades = () => {
  const { mode } = useMode();
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
        Cell: ({ value }) => {
          return (
            <div
              className="w-[98px]"
              style={{
                textWrap: 'balance'
              }}
            >
              {value}
            </div>
          );
        }
      },
      {
        Header: 'Trade Pair',
        accessor: 'trade_pair',
        Cell: ({ value }) => {
          let v = Math.floor(Math.random() * 100) % 2 === 1 ? -1 : 1;

          return (
            <div className="flex items-center gap-2">
              <div
                className={classNames(
                  'px-2 py-2 leading-wide font-bold text-xs rounded-full shadow-sm',
                  v > 0
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                )}
              >
                {v > 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>
                )}
              </div>
              <span
                className={classNames(
                  'flex text-lg',
                  v > 0 ? ' text-green-600' : ' text-red-600'
                )}
              >
                {value}
              </span>
            </div>
          );
        }
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col items-start justify-start font-normal">
              <div className="text-sm">
                <span className="font-bold ">Opening: </span>
                {row.original.price_opening}
              </div>

              <div className="text-sm ">
                <span className="font-bold ">Closing: </span>
                {row.original.price_closing}
              </div>
            </div>
          );
        }
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col items-start justify-start font-normal">
              <div className="text-sm">
                <span className="font-bold ">Opening: </span>
                {row.original.time_opening}
              </div>

              <div className="text-sm ">
                <span className="font-bold ">Closing: </span>
                {row.original.time_closing}
              </div>
            </div>
          );
        }
      },

      {
        Header: 'Duration',
        accessor: 'duration'
      },
      {
        Header: 'Difference',
        accessor: 'difference'
      }
    ],
    []
  );

  const data = useMemo(() => getData(), []);
  return (
    <div
      className={`w-full overflow-y-auto h-[85%] inline-block dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 ${
        mode ? 'bg-[#000000]' : 'bg-[#ffffff]'
      } dark:text-gray py-5 text-[#128FC8] transition-all shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] `}
    >
      <div className="flex flex-col w-full p-3">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ActiveTrades;
