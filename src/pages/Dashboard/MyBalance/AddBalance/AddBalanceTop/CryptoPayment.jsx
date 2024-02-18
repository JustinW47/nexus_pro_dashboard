import { useMode } from 'ModeContext';
import { usePageNum } from 'PageNumContext';
import { useUserData } from 'UserDataContext';
import QRCode from 'react-qr-code';
import SelectBox from 'components/Input/SelectBox';
import AddressCopy from 'components/AddressCopy';
import { useTranslation } from 'react-i18next';

import FiatPayment from './FiatPayment';

const CryptoPayment = () => {
  const { mode } = useMode();
  const { userData } = useUserData();
  const { setPageNum } = usePageNum();
  const { t } = useTranslation();

  return (
    // <div className="relative flex flex-col flex-1 gap-5 mb-10">
    //   <div
    //     className="text-base font-semibold text-[#128FC8] cursor-pointer hover:opacity-70"
    //     onClick={() => {
    //       setPageNum(1);
    //     }}
    //   >
    //     ← {t('addBalance')}
    //   </div>
    //   <div className="relative flex flex-col gap-5">
    //     <div
    //       className={`${
    //         mode ? 'text-[#ffffff]' : 'text-[#000000]'
    //       } text-base font-semibold`}
    //     >
    //       {t('selectCoin')}
    //     </div>
    //     <div className="flex flex-col w-full lg:w-2/3">
    //       <SelectBox
    //         url="/coin_network/coins/"
    //         query="coin-list"
    //         name="Coin"
    //         onChangeHandle={async (v) => {}}
    //         imageVal="logo"
    //         isIncludedImage
    //       />
    //     </div>
    //     <div className=" justify-start items-center gap-2.5 flex">
    //       {/* Coin Options */}
    //     </div>
    //     <div className="flex flex-col gap-3">
    //       <div
    //         className={`text-base font-semibold ${
    //           mode ? 'text-[#ffffff]' : 'text-[#000000]'
    //         }`}
    //       >
    //         {t('depositTo')}
    //       </div>
    //       <div className="flex flex-col w-full lg:w-2/3">
    //         <SelectBox
    //           url="/coin_network/networks/"
    //           query="network-list"
    //           name="Select Network"
    //           onChangeHandle={async (v) => {}}
    //           imageVal="logo"
    //           isIncludedImage
    //         />
    //       </div>
    //     </div>
    //     <div className="top-[323px]">
    //       <div
    //         className={` text-base font-semibold ${
    //           mode ? 'text-[#ffffff]' : 'text-[#000000]'
    //         } `}
    //       >
    //         {t('address')}
    //       </div>
    //       <div className="flex items-center justify-start w-full gap-2">
    //         {userData?.wallet ? (
    //           <AddressCopy address={userData?.wallet} />
    //         ) : (
    //           <></>
    //         )}
    //       </div>
    //     </div>
    //     <div
    //       className={`flex flex-col gap-4 top-[534px] ${
    //         mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
    //       } text-base font-medium`}
    //     >
    //       {/* Instructions */}
    //       <div>{t('protocolSelection')}</div>
    //       <div>{t('sendBnbOnly')}</div>
    //       <div>{t('ensureBnbNetwork')}</div>
    //     </div>
    //     <div
    //       style={{
    //         height: 'auto',
    //         margin: '0 auto',
    //         maxWidth: 300,
    //         width: '100%'
    //       }}
    //     >
    //       <QRCode
    //         size={256}
    //         style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
    //         value={`https://localhost:3000`}
    //         viewBox={`0 0 256 256`}
    //         level={'Q'}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className='flex flex-col lg:flex-row gap-8'>
      <div className='flex flex-col w-1/3 py-3 gap-6'>
        <SelectBox
          url="/coin_network/coins/"
          query="coin-list"
          name="Coin"
          label={`Select Coin`}
          onChangeHandle={async (v) => {}}
          imageVal="logo"
          isIncludedImage
        />

        <SelectBox
          url="/coin_network/networks/"
          query="network-list"
          name="Select Network"
          label={`Deposit To`}
          onChangeHandle={async (v) => {}}
          imageVal="logo"
          isIncludedImage
        />
        <div className='flex flex-col'>
          <span className='text-sm text-[#D9D9D9] font-normal'>
            Address
          </span>
          {userData?.wallet ? (
            <AddressCopy address={userData?.wallet} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='flex w-1/3'>
        <div
          className={`flex flex-col gap-10 ${
            mode ? 'text-[#D9D9D9]' : 'text-[#5F5F5F]'
          } text-sm font-normal`}
        >
          {/* Instructions */}
          <div>
            NexusPro supports two ways to deposit BNB. In addition to the Binance Network, you are now able to deposit BNB using the Tron Network. Select a protocol to see the corresponding address.
          </div>
          <div>
            Only send BNB to this address. Sending any other asset to this address may result in the loss of your deposit!
          </div>
          <div>
            Ensure the network is BNB (BNB).
          </div>
        </div>
      </div>
      <div className='flex flex-col w-1/3 gap-4'>
        <div className='flex w-[124px] h-[124px] p-3 border border-[#6E7A8A] rounded-md'>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={`https://localhost:3000`}
            viewBox={`0 0 256 256`}
            level={'Q'}
          />
        </div>
        <FiatPayment />
      </div>
    </div>
  );
};

export default CryptoPayment;
