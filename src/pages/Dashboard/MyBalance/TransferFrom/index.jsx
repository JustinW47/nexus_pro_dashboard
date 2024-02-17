import { useMode } from 'ModeContext';
import { usePageNum } from 'PageNumContext';
import Board from 'components/Board';
import BoardDashboard from 'components/Board/Board_dashboard';
import ButtonDark from 'components/Input/Button_dark';
import InputToken from 'components/Input/Input_Token';
import SelectBox from 'components/Input/SelectBox_static';

const TransferFrom = () => {
  const { mode } = useMode();
  const { setPageNum } = usePageNum();
  return (
    <div
      className={`w-full overflow-y-auto mx-2 h-[100%] dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 flex lg:flex-row flex-col justify-center items-center ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray text-[#5F5F5F] transition-all md:p-10 p-3 shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] h-full`}
    >
      <div className=" max-w-xl w-full mx-auto ">
        <BoardDashboard>
          <div className="flex flex-col">
            <div
              className="text-base font-semibold text-[#128FC8] cursor-pointer hover:opacity-70"
              onClick={() => {
                setPageNum(1);
              }}
            >
              ← Transfer From
            </div>
            <div className="md:p-10 p-5 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span>Account</span>
                <div className="flex flex-wrap items-center gap-5  justify-between w-full">
                  <div className="flex items-center gap-1">
                    <div className=" w-2 h-2 bg-[#1A8F5C] rounded-full" />
                    <span>From :</span>
                  </div>
                  <div className="flex w-4/5">
                    <SelectBox
                      value={0}
                      label="Spot Account"
                      onChangeHandle={() => {}}
                      list={[
                        {
                          text: 'ethereum',
                          value: '0'
                        },
                        {
                          text: 'binance',
                          value: '1'
                        },
                        {
                          text: 'polygon',
                          value: '2'
                        }
                      ]}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5  justify-between w-full">
                  <div className="flex items-center gap-1">
                    <div className=" w-2 h-2 bg-[#EB3223] rounded-full" />
                    <span>To :</span>
                  </div>
                  <div className="flex w-4/5">
                    <SelectBox
                      value={0}
                      label="Spot Account"
                      onChangeHandle={() => {}}
                      list={[
                        {
                          text: 'ethereum',
                          value: '0'
                        },
                        {
                          text: 'binance',
                          value: '1'
                        },
                        {
                          text: 'polygon',
                          value: '2'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col w-full">
                  <SelectBox
                    value={0}
                    label="Coin"
                    onChangeHandle={() => {}}
                    list={[
                      {
                        text: 'ethereum',
                        value: '0'
                      },
                      {
                        text: 'binance',
                        value: '1'
                      },
                      {
                        text: 'polygon',
                        value: '2'
                      }
                    ]}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div
                    className={`  text-base font-medium flex justify-between ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    <span>Amount</span>
                    <span className=" font-semibold">Avaliable 0.00 USDT</span>
                  </div>
                  <InputToken token="USDT" />
                </div>
              </div>
              <div className="flex justify-center">
                <ButtonDark label="Confirm" dark onClickHandle={() => {}} />
              </div>
            </div>
          </div>
        </BoardDashboard>
      </div>
    </div>
  );
};

export default TransferFrom;
