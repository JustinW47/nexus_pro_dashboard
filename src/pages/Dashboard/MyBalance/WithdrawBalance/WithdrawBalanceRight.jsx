import { useMode } from 'ModeContext';
import BoardDashboard from 'components/Board/Board_dashboard';
import { useState, useEffect } from 'react';
import { useUserData } from 'UserDataContext';
import axios from 'axios';
import { formatUnits } from 'ethers';
import { SpinningCircles } from 'react-loading-icons';
import { useTranslation } from 'react-i18next';

const WithdrawBalanceRight = () => {
  const { t } = useTranslation();
  const { mode } = useMode();
  const [historyData, setHistoryData] = useState({});
  const { userData } = useUserData();
  const coinList = {
    '0xdac17f958d2ee523a2206206994597c13d831ec7': {
      icon: 'https://www.datocms-assets.com/51952/1638913308-usdt.png',
      name: 'USDT',
      decimals: 6
    },
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
      icon: 'https://www.datocms-assets.com/51952/1635446602-usdc.png',
      name: 'USDC',
      decimals: 6
    },
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
      icon: 'https://www.datocms-assets.com/51952/1638999972-wbtc.png',
      name: 'WBTC',
      decimals: 8
    },
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
      icon: 'https://www.datocms-assets.com/51952/1639061558-weth.png',
      name: 'WETH',
      decimals: 18
    }
  };

  useEffect(() => {
    const fetchHistoryData = async () => {
      const url = `${process.env.REACT_APP_BACKEND_URL}/api/history/withdraw/?address=${userData.wallet}`;
      await axios
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setHistoryData(res.data.message);
          } else {
            setHistoryData('No history');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchHistoryData();
  }, [userData.wallet]);

  return (
    <div className="relative flex flex-col flex-1 gap-5">
      <div className="text-base font-semibold text-[#128FC8]">
        {t('withdrawHistory')}
      </div>
      <div className="flex-col justify-start items-start gap-2.5 flex">
        {historyData !== 'No history' && historyData.length > 0 ? (
          historyData.map((history) => {
            return (
              <div className="w-full">
                <BoardDashboard>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-7">
                      <div className="text-base font-semibold text-[#5F5F5F]">
                        Txn Id
                      </div>
                      <div
                        className={`text-base  ${
                          !mode ? 'text-[#042433]' : 'text-[#ffffff]'
                        } font-semibold`}
                      >
                        {history.transaction_hash}
                      </div>
                    </div>
                    <div className="flex justify-between gap-7">
                      <div className="  text-base font-semibold text-[#5F5F5F]">
                        Time
                      </div>
                      <div
                        className={`left-[261px]  ${
                          !mode ? 'text-[#042433]' : 'text-[#ffffff]'
                        } font-semibold text-base `}
                      >
                        {
                          /* {new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(history.block_timestamp)} */ new Date(
                            history.block_timestamp
                          ).toString()
                        }
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="  text-base font-semibold text-[#5F5F5F]">
                        Address :
                      </div>
                      <div
                        className={`left-[86px]   text-right ${
                          !mode ? 'text-[#042433]' : 'text-[#ffffff]'
                        } font-semibold text-base `}
                      >
                        {history.to_address}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="  text-base font-semibold text-[#5F5F5F]">
                        Network :
                      </div>
                      <div
                        className={`left-[284px]   text-right ${
                          !mode ? 'text-[#042433]' : 'text-[#ffffff]'
                        } font-semibold text-base `}
                      >
                        ETH ETH(ERC 20)
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="  text-base font-semibold text-[#5F5F5F]">
                        Coin :
                      </div>
                      <div className="w-14 h-6 left-[352px]   justify-center items-center gap-1.5 inline-flex justify-between">
                        <img
                          className="w-6 h-6"
                          src={coinList[history.contract_address].icon}
                          alt={'token'}
                        />
                        <div className="text-base  text-right text-[#5F5F5F]">
                          {coinList[history.contract_address].name}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="  text-base font-semibold text-[#5F5F5F]">
                        Amount :
                      </div>
                      <div className="left-[378.26px]   text-right text-[#1A8F5C] text-base ">
                        {Number(
                          formatUnits(
                            history.value,
                            coinList[history.contract_address].decimals
                          )
                        ).toFixed(3)}
                        <span className="ml-[5px]">
                          {coinList[history.contract_address].name}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className=" top-[10px]  text-[#5F5F5F] text-base font-semibold">
                        Status :
                      </div>
                      <div className="flex px-2.5 py-1.5  bg-[#CBE6F3] rounded-lg justify-center items-center gap-2.5">
                        <div className="text-base text-right text-[#1A8F5C]">
                          Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </BoardDashboard>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full">
            {historyData === 'No history' ? (
              <SpinningCircles stroke="#007bff" speed={1.5} fill="#007bff" />
            ) : (
              <div>No history</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawBalanceRight;
