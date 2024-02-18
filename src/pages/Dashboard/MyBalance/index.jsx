import { useMode } from 'ModeContext';
import { usePageNum } from 'PageNumContext';
import Table from 'components/Table';
import AddressCopy from 'components/AddressCopy';
import { useUserData } from 'UserDataContext';
import { useTotalBalance } from 'hooks/useTotalBalance';
import { useTranslation } from 'react-i18next';
import { useMemo, useState, useEffect } from 'react';
import { SpinningCircles } from 'react-loading-icons';

const MyBalance = () => {
  const { t } = useTranslation();
  const { mode } = useMode();
  const { setPageNum } = usePageNum();
  const { userData } = useUserData();
  const [totalBalanceInUsd, setTotalBalanceInUsd] = useState(0);

  const columns = useMemo(
    () => [
      {
        Header: `${t('Coin')}`,
        accessor: 'coin',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-row items-center text-center align-middle">
              {row.original.icon && (
                <div>
                  <img
                    src={row.original.icon}
                    alt="icon"
                    className="w-[30px] h-[30px]"
                  ></img>
                </div>
              )}
              <div className="ml-[10px]">{row.original.coin}</div>
            </div>
          );
        }
      },
      {
        Header: `${t('Balance')}`,
        accessor: 'balance',
        Cell: ({ row }) => {
          return (
            <div className="flex flex-row items-start justify-between">
              <div className="text-sm font-bold">
                {Number(row?.original?.balance).toFixed(
                  row?.original?.coin === 'WBTC' ? 7 : 2
                )}
              </div>
              <div className="text-sm font-semibold">
                {' '}
                ≈ ${Number(row?.original?.balanceInUsd).toFixed(2)}
              </div>
            </div>
          );
        }
      }
    ],
    [t]
  );

  const totalBalance = useTotalBalance();
  console.log(totalBalance, 'totalBalance');
  useEffect(() => {
    // Calculate the sum of balanceInUSD values
    if (totalBalance.isFetched === true) {
      const sumOfBalanceInUSD = totalBalance?.data?.data?.message.reduce(
        (sum, item) => {
          const balanceInUSD = parseFloat(item?.balanceInUsd) || 0;
          return sum + balanceInUSD;
        },
        0
      );
      setTotalBalanceInUsd(sumOfBalanceInUSD);
    }
  }, [totalBalance]);

  return (
    <div
      className={`w-full overflow-y-auto h-[95%] dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out flex flex-col justify-start items-center ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray text-[#128FC8] transition-all p-10`}
    >
      <div className="flex flex-col justify-between w-full">
        <div className="flex p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] w-full rounded-[20px] mb-4">
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-4 gap-y-4'>
            {/* Header */}
            <div className="self-start mt-4 w-full">
              <div className="flex flex-row gap-x-2 items-center">
                {
                  mode ?
                    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_532_8422)">
                        <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                        <g clip-path="url(#clip1_532_8422)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.33 19.25V8.75C28.33 8.29 28.15 7.84 27.82 7.51C27.49 7.18 27.05 7 26.58 7H13.75C12.78 7 12 7.78 12 8.75V19.25C12 19.71 12.18 20.16 12.51 20.49C12.84 20.82 13.28 21 13.75 21H26.58C27.55 21 28.33 20.22 28.33 19.25ZM27.17 11.08V8.75C27.17 8.6 27.11 8.45 27 8.34C26.89 8.23 26.74 8.17 26.59 8.17H13.75C13.43 8.17 13.17 8.43 13.17 8.75V19.25C13.17 19.4 13.23 19.55 13.34 19.66C13.45 19.77 13.6 19.83 13.75 19.83H26.58C26.9 19.83 27.16 19.57 27.16 19.25V16.92H24.24C23.47 16.92 22.72 16.61 22.18 16.07C21.63 15.52 21.33 14.78 21.33 14.01C21.33 13.24 21.64 12.49 22.18 11.95C22.73 11.4 23.47 11.1 24.24 11.1H27.16L27.17 11.08ZM27.17 12.25V15.75H24.25C23.79 15.75 23.34 15.57 23.01 15.24C22.68 14.91 22.5 14.47 22.5 14C22.5 13.54 22.68 13.09 23.01 12.76C23.34 12.43 23.78 12.25 24.25 12.25H27.17ZM24.25 12.83C23.61 12.83 23.08 13.35 23.08 14C23.08 14.65 23.6 15.17 24.25 15.17C24.9 15.17 25.42 14.65 25.42 14C25.42 13.35 24.9 12.83 24.25 12.83Z" fill="black"/>
                        </g>
                      </g>
                      <defs>
                      <clipPath id="clip0_532_8422">
                        <rect width="40" height="28" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_532_8422">
                        <rect width="16.33" height="14" fill="white" transform="translate(12 7)"/>
                      </clipPath>
                      </defs>
                    </svg> :
                    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_532_8328)">
                      <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#D6ECF7"/>
                      <g clip-path="url(#clip1_532_8328)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.33 19.25V8.75C28.33 8.29 28.15 7.84 27.82 7.51C27.49 7.18 27.05 7 26.58 7H13.75C12.78 7 12 7.78 12 8.75V19.25C12 19.71 12.18 20.16 12.51 20.49C12.84 20.82 13.28 21 13.75 21H26.58C27.55 21 28.33 20.22 28.33 19.25ZM27.17 11.08V8.75C27.17 8.6 27.11 8.45 27 8.34C26.89 8.23 26.74 8.17 26.59 8.17H13.75C13.43 8.17 13.17 8.43 13.17 8.75V19.25C13.17 19.4 13.23 19.55 13.34 19.66C13.45 19.77 13.6 19.83 13.75 19.83H26.58C26.9 19.83 27.16 19.57 27.16 19.25V16.92H24.24C23.47 16.92 22.72 16.61 22.18 16.07C21.63 15.52 21.33 14.78 21.33 14.01C21.33 13.24 21.64 12.49 22.18 11.95C22.73 11.4 23.47 11.1 24.24 11.1H27.16L27.17 11.08ZM27.17 12.25V15.75H24.25C23.79 15.75 23.34 15.57 23.01 15.24C22.68 14.91 22.5 14.47 22.5 14C22.5 13.54 22.68 13.09 23.01 12.76C23.34 12.43 23.78 12.25 24.25 12.25H27.17ZM24.25 12.83C23.61 12.83 23.08 13.35 23.08 14C23.08 14.65 23.6 15.17 24.25 15.17C24.9 15.17 25.42 14.65 25.42 14C25.42 13.35 24.9 12.83 24.25 12.83Z" fill="#3BA3D8"/>
                      </g>
                      </g>
                      <defs>
                      <clipPath id="clip0_532_8328">
                      <rect width="40" height="28" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_532_8328">
                      <rect width="16.33" height="14" fill="white" transform="translate(12 7)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    
                }

                <h2 className='text-[14px] font-semibold dark:text-[#FFFFFF]'>My Balance / Add $</h2>
                {/* <h2 className="mb-1 text-sm font-semibold text-[#128FC8]-400">
                  {t('Total Balance')}
                </h2> */}
                {/* {userData?.wallet ? (
                  <AddressCopy address={userData?.wallet} />
                ) : (
                  <></>
                )} */}
              </div>
            </div>
            {/* Button Row */}
            <div className="flex w-full flex-col md:flex-row justify-between">
              <div className='flex flex-row justify-between gap-4'>
                <div className='flex flex-col'>
                  <h2 className="text-[14px] font-semibold text-[#D9D9D9]">
                    {t('Total Balance')}
                  </h2> 
                  {userData?.wallet ? (
                    <AddressCopy address={userData?.wallet} />
                  ) : (
                    <></>
                  )}
                </div>
                <p className="self-center text-[32px] font-semibold leading-[39px] text-[#FFFFFF]">
                  $ {totalBalanceInUsd.toFixed(2)}
                </p>
              </div>
              <div className='flex flex-row justify-between gap-x-4 items-center'>
                {/* Buttons */}
                <button
                  className="px-5 py-4 text-sm font-bold text-[#ffffff] transition-all bg-[#128FC8]-400 rounded-lg shadow-md hover:opacity-80 hover:shadow-2xl bg-[#128FC8]"
                  onClick={() => {
                    setPageNum(2);
                  }}
                >
                  {t('Add Balance +')}
                </button>
                <button
                  className="px-5 py-4 text-sm font-bold text-[#ffffff] transition-all bg-[#128FC8]-400 rounded-lg shadow-md hover:opacity-80 hover:shadow-2xl bg-[#128FC8]"
                  onClick={() => {
                    setPageNum(3);
                  }}
                >
                  {t('Withdraw Balance -')}
                </button>
              </div>
              {/* <button
                className="px-5 py-2 text-sm font-bold text-[#ffffff] transition-all bg-[#128FC8]-400 rounded-lg shadow-md hover:opacity-80 hover:shadow-2xl bg-[#128FC8]"
                onClick={() => {
                  setPageNum(4);
                }}
              >
                {t('Transfer ↓↑')}
              </button> */}
            </div>
          </div>
        </div>
        {/* Cards */}
        {totalBalance?.isFetched ? (
          <Table columns={columns} data={totalBalance?.data?.data?.message} />
        ) : (
          <div className="flex items-center justify-center w-full">
            <SpinningCircles stroke="#007bff" speed={1.5} fill="#007bff" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBalance;
