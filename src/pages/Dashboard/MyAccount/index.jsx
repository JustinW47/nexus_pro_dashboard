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
      className={`w-full h-[85%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-[#128FC8] text-[#128FC8] transition-all p-8 overflow-y-auto`}
    >
      <div className='w-full flex flex-col lg:flex-row gap-6'>
        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-4 divide-y divide-[#263238]'>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-row items-center gap-x-2'>
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_532_7380)">
                    <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                    <g clip-path="url(#clip1_532_7380)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 5C14.2555 5 10 9.25548 10 14.5C10 19.7445 14.2555 24 19.5 24C24.7445 24 29 19.7445 29 14.5C29 9.25548 24.7445 5 19.5 5ZM19.5 6.35342C23.9897 6.35342 27.6466 9.99726 27.6466 14.5C27.6466 19.0027 24.0027 22.6466 19.5 22.6466C14.9973 22.6466 11.3534 18.9897 11.3534 14.5C11.3534 10.0103 15.0103 6.35342 19.5 6.35342ZM25.5514 18.4171C25.5904 18.339 25.6034 18.2479 25.6034 18.1438C25.6034 17.2459 25.1089 16.3219 24.25 15.5541C23.1048 14.539 21.2959 13.8103 19.5 13.8103C17.7041 13.8103 15.9082 14.539 14.75 15.5541C13.8911 16.3089 13.3966 17.2329 13.3966 18.1438L13.4486 18.4041L13.6178 18.8205C13.8911 19.4842 14.5288 19.9137 15.2445 19.9137H23.7555C24.4712 19.9137 25.1089 19.4842 25.3822 18.8205L25.5514 18.4041V18.4171ZM24.25 18.0267L24.1329 18.313C24.0678 18.4692 23.9247 18.5603 23.7555 18.5603H15.2445C15.0753 18.5603 14.9322 18.4562 14.8671 18.313L14.75 18.0267C14.8021 17.5062 15.1534 17.0116 15.6479 16.5822C16.5849 15.7623 18.0425 15.1767 19.5 15.1767C20.9575 15.1767 22.4151 15.7623 23.3521 16.5822C23.8466 17.0116 24.1979 17.5192 24.25 18.0267ZM19.5 7.71986C18.0034 7.71986 16.7801 8.93014 16.7801 10.4397C16.7801 11.9493 17.9904 13.1596 19.5 13.1596C21.0096 13.1596 22.2199 11.9493 22.2199 10.4397C22.2199 8.93014 21.0096 7.71986 19.5 7.71986ZM19.5 9.07329C20.2548 9.07329 20.8534 9.68493 20.8534 10.4267C20.8534 11.1685 20.2418 11.7801 19.5 11.7801C18.7582 11.7801 18.1466 11.1685 18.1466 10.4267C18.1466 9.68493 18.7582 9.07329 19.5 9.07329Z" fill="black"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_532_7380">
                      <rect width="40" height="28" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1_532_7380">
                      <rect width="19" height="19" fill="white" transform="translate(10 5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <p className='text-[14px] font-semibold dark:text-white'>My Account</p>
              </div>

              <div className='flex flex-col gap-y-2'>
                <label className='text-[12px] text-[#D9D9D9] font-normal'>Profile Picture:</label>
                {userData?.photos.length > 0 ? (
                  <img
                    className="border-2 border-white rounded-full shadow w-[64px] h-[64px]"
                    src={userData?.photos[0]?.value}
                    alt="avatar"
                  />
                ) : (
                  <span
                    className={`w-[64px] h-[64px] rounded-full flex items-center justify-center `}
                    style={{
                      backgroundColor: getRandomColor(userData?.displayName)
                    }}
                  >
                    {userData?.displayName.trim().slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              
              <div className='flex flex-col gap-y-2'>
                <label className='text-[12]x] text-[#6E7A85] font-normal'>Username:</label>
                <span className="text-[18px] text-[#B0B5BC] font-cormal">{userData?.displayName}</span>
              </div>
            </div>
            
            <div className='flex flex-col pt-4 gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-[12]x] text-[#6E7A85] font-normal'>Email:</label>
                <span className="text-[18px] text-[#B0B5BC] font-cormal">{userData?.emails[0]?.value}</span>
              </div>

              <div className='flex flex-col gap-y-2'>
                <label className='text-[12]x] text-[#6E7A85] font-normal'>ID:</label>
                <span className="text-[18px] text-[#B0B5BC] font-cormal">{userData?._id}</span>
              </div>
            </div>

            <div className='flex flex-col pt-4 gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-[14px] text-[#6E7A85] font-normal'>Total Balance:</label>
                <span className="text-[32px] text-[#B0B5BC] font-cormal">$ {Number(totalBalanceInUsd).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-4 divide-y divide-[#263238]'>
            <div className='flex flex-col gap-y-4'>
              <label className='text-[18px] text-[#D9D9D9] font-normal'>
                Level 1
              </label>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <label className='text-nowrap text-[14px] text-[#B0B5BC] font-normal'>
                    Deposit Assets
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#B0B5BC] font-normal'>
                    Enabled
                  </label>
                </div>

                <div className='flex flex-row justify-between'>
                  <label className='text-nowrap text-[14px] text-[#B0B5BC] font-normal'>
                    Withdraw assets
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#B0B5BC] font-normal'>
                    Enabled $10000
                  </label>
                </div>

                <div className='flex flex-row justify-between'>
                  <label className='text-nowrap text-[14px] text-[#B0B5BC] font-normal'>
                    Card purchases
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#B0B5BC] font-normal'>
                    Enabled
                  </label>
                </div>

                <div className='flex flex-row justify-between'>
                  <label className='text-nowrap text-[14px] text-[#B0B5BC] font-normal'>
                    Futures
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#B0B5BC] font-normal'>
                    Enabled
                  </label>
                </div>
              </div>
            </div>

            <div className='flex flex-col pt-4 gap-y-4'>
              <label className='text-[18px] text-[#D9D9D9] font-normal'>
                Level 1
              </label>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <label className='text-wrap text-[14px] text-[#B0B5BC] font-normal'>
                    <p>Increase Withdrawal</p>
                    <p>Limit</p>
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#00B880] font-normal'>
                    <p className='text-right'>Enable</p>
                    <p className='text-right'>50000/day</p>
                  </label>
                </div>

                <div className='flex flex-row justify-between'>
                  <label className='text-nowrap text-[14px] text-[#B0B5BC] font-normal'>
                    <p>Enable Account</p>
                    <p>Security</p>
                  </label>
                  {/* <div className='border border-t-0 border-x-0 border-b-[#263238]'></div> */}
                  <label className='text-[14px] text-[#00B880] font-normal self-end'>
                    <p className='text-right'>Enable</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-6'>
            <span className="text-lg font-bold text-[#D9D9D9]">
              Want Higher Limits?
            </span>
            <span className="text-[#B0B5BC] text-[14px] font-semibold">
              Get increased limits and advanced features by providing a bit more
              profile information.
            </span>
            <div className='flex w-fit'>
              <ButtonWhite label={'Get Started'} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-start w-full gap-5 px-16 py-20">
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
                className={`text-lg ${mode ? 'text-[#000000]' : 'text-white'}`}
              >
                $ {Number(totalBalanceInUsd).toFixed(2)}
              </span>
              <span className={`text-sm text-[#00FF00] flex items-center`}>
                +14.24%
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/up-2.png'}
                  alt="wing"
                  className="w-4 h-4"
                />
              </span>
            </div>
          </div>
          
        </div>
        <div className="p-4 border border-[#128fc8] rounded-2xl flex flex-wrap gap-3 w-full max-w-[1200px]">
          <div className="lg:w-[60%] lg:h-full h-fit w-full flex gap-5 flex-wrap bg-[#128fc8] p-5 rounded-2xl md:justify-between lg:justify-center justify-start">
            <div
              className={`flex flex-col flex-wrap ${
                mode ? 'text-[#000000]' : 'text-white'
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
                mode ? 'text-[#000000]' : 'text-white'
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
            <span className="text-[#000000] text-lg font-semibold">
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
      </div> */}
    </div>
  );
};

export default MyAccount;
