import { useMode } from 'ModeContext';
import { usePageNum } from 'PageNumContext';
import axios from 'axios';
import AddressCopy from 'components/AddressCopy';
import ButtonDark from 'components/Input/Button_dark';
import InputAddress from 'components/Input/Input_Address';
import InputToken from 'components/Input/Input_Token';
import SelectBox from 'components/Input/SelectBox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WithdrawBalanceLeft = () => {
  const { t } = useTranslation();
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + '/api'
  });

  // Set the Authorization header with the token
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { mode } = useMode();
  const { setPageNum } = usePageNum();
  const [formData, setFormData] = useState({
    coin: '',
    toAddress: '',
    amount: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await instance
      .post(`/spot/withdraw`, { withdrawData: { ...formData } })
      .catch((err) => {
        console.log(err, 'ERROR');
        if (err?.response?.status === 403 || err?.response?.status === 401) {
        }
      });
    return result;
  };

  return (
    <div className="relative flex flex-col flex-1 gap-5">
      <div
        className="text-base font-semibold text-[#128FC8] cursor-pointer hover:opacity-70"
        onClick={() => {
          setPageNum(1);
        }}
      >
        ← {t('withdrawBalance')}
      </div>
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
        <div className="flex flex-col w-full lg:w-2/3">
          <SelectBox
            url="/coin_network/coins/"
            query="coin-list"
            name="Coin"
            label={t('selectCoin')}
            onChangeHandle={async (v) => {
              setFormData({ ...formData, coin: v });
            }}
            imageVal="logo"
            isIncludedImage
          />
        </div>
        <div className=" justify-start items-center gap-2.5 flex">
          <div className="h-full px-2.5 py-1.5 rounded-lg border hover:opacity-70 hover:shadow-lg cursor-pointer border-neutral-400 justify-center items-center gap-1 flex">
            <img
              className="w-6 h-6"
              src={process.env.PUBLIC_URL + '/assets/images/bnb-icon.png'}
              alt={'token'}
            />
            <div
              className={`text-base font-semibold ${
                mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
              }`}
            >
              BNB
            </div>
          </div>
          <div className="h-full px-2.5 py-1.5 rounded-lg border hover:opacity-70 hover:shadow-lg cursor-pointer border-neutral-400 justify-center items-center gap-1 flex">
            <img
              className="w-6 h-6"
              src={process.env.PUBLIC_URL + '/assets/images/usdt-icon.png'}
              alt={'token'}
            />
            <div
              className={`text-base font-semibold ${
                mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
              }`}
            >
              USDT
            </div>
          </div>
          <div className="h-full px-2.5 py-1.5 rounded-lg border hover:opacity-70 hover:shadow-lg cursor-pointer border-neutral-400 justify-center items-center gap-1 flex">
            <img
              className="w-6 h-6"
              src={process.env.PUBLIC_URL + '/assets/images/eth-icon.png'}
              alt={'token'}
            />
            <div
              className={`text-base font-semibold ${
                mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
              }`}
            >
              ETH
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div
            className={`text-base font-semibold ${
              mode ? 'text-[#ffffff]' : 'text-[#000000]'
            } `}
          >
            {t('sendTo')}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full lg:w-2/3">
            <div className="flex items-center w-full gap-3">
              <InputAddress
                onInput={(v) => {
                  setFormData({ ...formData, toAddress: v });
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5">
          <div
            className={`${
              mode ? 'text-[#ffffff]' : 'text-[#000000]'
            }   text-base font-semibold`}
          >
            {t('withdrawalAmount')}
          </div>
          <div className="flex flex-col w-full lg:w-2/3">
            <div
              className={`  text-base font-medium ${
                mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
              }`}
            >
              {t('amount')}
            </div>
            <InputToken
              token="USDT"
              onInput={(v) => {
                setFormData({ ...formData, amount: v });
              }}
            />
          </div>
        </div>

        <div className="relative flex flex-wrap items-center gap-10">
          <div
            className={`${
              mode ? 'text-[#ffffff]' : 'text-[#000000]'
            }   text-base font-semibold`}
          >
            {t('receiveAmount')}
          </div>
          <ButtonDark label={t('withdraw')} submit={true} dark />
        </div>
        <div className="flex flex-col w-full text-lg font-semibold">
          <div className="flex text-gray-800">--USDT</div>
          <div className="flex gap-3">
            <span className="text-emerald-600">1.50000000 USDT </span>
            <span className="text-gray-800">{t('networkFeeIncluded')}</span>
          </div>
        </div>

        <div className="top-[323px]">
          <div
            className={` text-base font-semibold ${
              mode ? 'text-[#ffffff]' : 'text-[#000000]'
            } `}
          >
            {t('address')}
          </div>
        </div>
        <div
          className={`flex flex-col gap-4 top-[534px] ${
            mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
          } text-base font-medium`}
        >
          <div>1.{t('protocolSelection')}</div>

          <div>2.{t('ensureNetworkMatchWithdraw')}</div>
        </div>
      </form>
    </div>
  );
};
export default WithdrawBalanceLeft;
