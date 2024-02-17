import { useMode } from 'ModeContext';
import { useEffect, useState } from 'react';
import { useUserData } from 'UserDataContext';
import ButtonWhite from 'components/Input/Button_white';
import { useTotalBalance } from 'hooks/useTotalBalance';

const MyAccount = () => {
  const { mode } = useMode();
  const { userData } = useUserData();
  const totalBalance = useTotalBalance();
  const [totalBalanceInUsd, setTotalBalanceInUsd] = useState(0);
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
  console.log(totalBalance);
  const getRandomColor = (a) => {
    let hash = 0;
    a.split('').forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += value.toString(16).padStart(2, '0');
    }
    console.log(colour);
    return colour;
  };
  console.log(userData, 'userData');
  return (
    <div
      className={`w-full overflow-y-auto h-[85%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray py-5 text-[#128FC8] transition-all shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] flex justify-center`}
    >
      <div className="flex flex-col items-start w-full gap-5 px-16 py-20">
        <div className="flex flex-wrap gap-10 w-full max-w-[1200px]">
          <div
            className={`${
              mode ? 'text-white' : 'text-gray-700'
            } flex w-full flex-col items-center rounded-2xl gap-5 p-4 border border-[#128fc8] text-gray text-lg font-bold `}
          >
            {userData?.photos.length > 0 ? (
              <img
                className="border-2 border-white rounded-full shadow w-14 h-14"
                src={userData?.photos[0]?.value}
                alt="avatar"
              />
            ) : (
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center `}
                style={{
                  backgroundColor: getRandomColor(userData?.displayName)
                }}
              >
                {userData?.displayName.trim().slice(0, 2).toUpperCase()}
              </span>
            )}
            <div className={`flex flex-col items-center`}>
              <span className="text-lg font-bold">{userData?.displayName}</span>
              <span className="text-sm font-base ">
                {userData?.emails[0]?.value}
              </span>
            </div>
            <span
              className="w-full text-sm text-center font-base"
              style={{ wordWrap: 'break-word' }}
            >
              _id: ${userData?._id}
            </span>
            <div className="bg-[#128fc8] py-3 flex flex-col gap-3 items-center w-full rounded-2xl">
              <span className="text-sm text-white">Total Balance</span>
              <span
                className={`text-lg ${mode ? 'text-[#042433]' : 'text-white'}`}
              >
                $ {Number(totalBalanceInUsd).toFixed(2)}
              </span>
              {/* <span className={`text-sm text-[#00FF00] flex items-center`}>
                +14.24%
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/up-2.png'}
                  alt="wing"
                  className="w-4 h-4"
                />
              </span> */}
            </div>
          </div>
          
        </div>
        <div className="p-4 border border-[#128fc8] rounded-2xl flex flex-wrap gap-3 w-full max-w-[1200px]">
          <div className="lg:w-[60%] lg:h-full h-fit w-full flex gap-5 flex-wrap bg-[#128fc8] p-5 rounded-2xl md:justify-between lg:justify-center justify-start">
            <div
              className={`flex flex-col flex-wrap ${
                mode ? 'text-[#042433]' : 'text-white'
              }`}
            >
              <span className="text-white">Level 1</span>
              <div className="flex justify-between gap-2">
                <span>Deposit Assets</span>
                <span>Enabled</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Withdraw assets</span>
                <span>Enabled $10000</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Card purchases</span>
                <span>Enabled</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Futures</span>
                <span>Enabled</span>
              </div>
            </div>
            <span className="hidden h-full border-l border-white lg:flex"></span>
            <div
              className={`flex flex-col ${
                mode ? 'text-[#042433]' : 'text-white'
              }`}
            >
              <span className="text-white">Level 2</span>
              <div className="flex justify-between gap-2">
                <span>Increase Withdrawal Limit</span>
                <span className="text-[#00ff00]">Enable 50000/day</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>Enable Account Security</span>
                <span className="text-[#00ff00]">Enable</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex bg-[#128fc8] p-5 rounded-2xl flex-col gap-3">
            <span className="text-lg font-bold text-white">
              Want Higher Limits?
            </span>
            <span className="text-[#042433] text-lg font-semibold">
              Get increased limits and advanced features by providing a bit more
              profile information.
            </span>
            <div className="flex justify-between">
              <ButtonWhite label={'Get Started'} />
              <img
                src={process.env.PUBLIC_URL + '/assets/svg/Security_Pass.svg'}
                alt="wing"
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
