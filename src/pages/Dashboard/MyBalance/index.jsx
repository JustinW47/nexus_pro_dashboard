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
      className={`w-full overflow-y-auto h-[85%] dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 flex flex-col justify-start items-center ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray text-[#128FC8] transition-all shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] `}
    >
      <div className="flex flex-col justify-between w-full p-10">
        <div className="flex justify-between">
          {/* Header */}
          <div className="self-start mt-4">
            <div className="flex items-center gap-5">
              <h2 className="mb-1 text-sm font-semibold text-[#128FC8]-400">
                {t('Total Balance')}
              </h2>
              {userData?.wallet ? (
                <AddressCopy address={userData?.wallet} />
              ) : (
                <></>
              )}
            </div>
            <p className="text-3xl font-bold text-[#5F5F5F]">
              $ {totalBalanceInUsd.toFixed(2)}
            </p>
          </div>
          {/* Button Row */}
          <div className="flex items-center w-full gap-6 mt-16 justify-evenly">
            {/* Buttons */}
            <button
              className="px-5 py-2 text-sm font-bold text-[#ffffff] transition-all bg-[#128FC8]-400 rounded-lg shadow-md hover:opacity-80 hover:shadow-2xl bg-[#128FC8]"
              onClick={() => {
                setPageNum(2);
              }}
            >
              {t('Add +')}
            </button>
            <button
              className="px-5 py-2 text-sm font-bold text-[#ffffff] transition-all bg-[#128FC8]-400 rounded-lg shadow-md hover:opacity-80 hover:shadow-2xl bg-[#128FC8]"
              onClick={() => {
                setPageNum(3);
              }}
            >
              {t('Withdraw -')}
            </button>
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
