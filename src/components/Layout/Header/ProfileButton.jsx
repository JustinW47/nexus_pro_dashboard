import { useMode } from 'ModeContext';
import ButtonDark from 'components/Input/Button_dark';
import { useTotalBalance } from 'hooks/useTotalBalance';
import { useEffect, useState } from 'react';

const ProfileButton = ({ userData, logout, setSelectedPage }) => {
  const { mode } = useMode();
  const [totalBalanceInUsd, setTotalBalanceInUsd] = useState(0);
  const totalBalance = useTotalBalance();
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

  return (
    <div className="flex items-center justify-center h-full gap-3">
      <div className=" h-8 p-3 cursor-pointer rounded border border-sky-600 justify-center items-center gap-2.5 inline-flex">
        <div
          className={`${
            mode ? 'text-white' : 'text-black'
          } text-base font-medium font-['Poppins']`}
        >
          {totalBalanceInUsd?.toFixed(2)}$
        </div>
        <div className="text-sky-600 text-xs font-bold font-['Inter']">▽</div>
      </div>
      {userData?.photos.length > 0 ? (
        <img
          className="w-12 h-12 border-2 border-white rounded-full shadow"
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
      <span>{userData?.displayName}</span>

      <ButtonDark label="Deposit" dark onClickHandle={() => {}} />
      <div
        onClick={() => {
          logout();
          setSelectedPage('login');
        }}
        className={`flex transition-all text-[#128FC8] cursor-pointer`}
      >
        <div className="flex items-center text-base font-semibold uppercase transition-all gap-x-2 hover:text-gray-400">
          Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
