import { useMode } from 'ModeContext';
import Table, { SelectColumnFilter } from 'components/Table';
import { classNames } from 'components/Utils';
import { useMemo } from 'react';
import { usePositionData } from 'hooks/usePositionData';
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

const MyPosition = () => {
  const { mode } = useMode();
  const data_ = usePositionData();

  const columns = useMemo(
    () => [
      {
        Header: 'Assets',
        accessor: 'assets'
      },
      {
        Header: 'Info',
        accessor: 'info',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col items-start justify-start">
              <div className="text-sm">{row.original.info}</div>
            </div>
          );
        }
      },
      {
        Header: 'Opening Quote',
        accessor: 'openingQuote',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col items-start justify-start">
              <div className="text-sm ">
                {formatTimestamp(row.original.openingQuote)}
              </div>
            </div>
          );
        }
      },
      {
        Header: 'Closing Quote',
        accessor: 'closingQuote',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-col items-start justify-start">
              <div className="text-sm ">
                {formatTimestamp(row.original.closingQuote)}
              </div>
            </div>
          );
        }
      },

      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value }) => (
          <div className="flex items-start gap-2">
            <div
              className={classNames(
                'px-2 py-2 uppercase leading-wide font-bold text-xs rounded-full shadow-sm',
                value > 0
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              )}
            >
              {value > 0 ? (
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
                value > 0 ? ' text-green-600' : ' text-red-600'
              )}
            >
              {value}
            </span>
          </div>
        )
      },
      {
        Header: 'Income',
        accessor: 'income',
        Cell: ({ value }) => (
          <div className="flex items-center gap-2">
            <span
              className={classNames(
                'flex text-lg',
                value > 0 ? ' text-green-600' : ' text-red-600'
              )}
            >
              {value}
            </span>
          </div>
        ),
        filter: 'includes'
      }
    ],
    []
  );

  // console.log(data_?.data?.data?.data, '____', data);
  return (
    <div
      className={`w-full h-[95%] inline-block dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray p-8 text-[#128FC8] transition-all`}
    >
      <div className={`flex flex-col w-full rounded-2xl h-[100%] overflow-y-auto ${
        mode ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
      }`}>
        {data_?.isFetched ? (
          <Table columns={columns} data={data_?.data?.data?.data} title={`position`} />
        ) : (
          <div className="flex items-center justify-center w-full h-screen -translate-y-1/4">
            <SpinningCircles stroke="#007bff" speed={1.5} fill="#007bff" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosition;
