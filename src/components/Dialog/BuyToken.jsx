import Checkout from 'components/Checkout';
import { DialogCustom } from '.';
import Board from 'components/Board';
import { useEffect, useState } from 'react';
import InputNumber from 'components/Input/Input_Number';
import { useRef } from 'react';
import ButtonDark from 'components/Input/Button_dark';
import SelectBox from 'components/Input/SelectBox';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import axios from 'axios';
import { useUSEURate } from 'hooks/useUSEURate';
import { useEUUSRate } from 'hooks/useEUUSRate';
import { useETHRate } from 'hooks/useETHRate';
import { useUserData } from 'UserDataContext';

const BuyTokenDialog = ({ isOpen, setOpen, token, value }) => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [inputValueFiat, setinputValueFiat] = useState(Number(value));
  const [inputValueCrypto, setinputValueCrypto] = useState(Number(value));

  const stripeButton = useRef(null);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [estimatedOutInFiat, setEstimatedOutInFiat] = useState(0);
  const [estimatedOutInCrypto, setEstimatedOutInCrypto] = useState(0);
  const euusInitialData = useEUUSRate();
  const useuInitialData = useUSEURate();
  const ethPrice = useETHRate();

  const { userData } = useUserData();


  useEffect(() => {
    setinputValueFiat(value);
    setinputValueCrypto(value);
  }, [value]);

  useEffect(() => {
    if ((token === "EU/US" && euusInitialData.isFetched === true) || (token === "US/EU" && useuInitialData.isFetched === true)) {
      setEstimatedOutInFiat(Number(inputValueFiat / (token === "EU/US" ? euusInitialData.data.data.message : useuInitialData.data.data.message)).toFixed(2));
    }
  }, [inputValueFiat, euusInitialData, useuInitialData, token])

  useEffect(() => {
    if (ethPrice.isFetched === true) {
      if ((token === "EU/US" && euusInitialData.isFetched === true) || (token === "US/EU" && useuInitialData.isFetched === true)) {
        let priceOfToken = 0;
        if (token === "EU/US") {
          priceOfToken = euusInitialData.data.data.message;
        } else {
          priceOfToken = useuInitialData.data.data.message;
        }
        setEstimatedOutInCrypto(Number(inputValueCrypto * ethPrice.data.data.message / priceOfToken).toFixed(2));
      }
    }
  }, [ethPrice, euusInitialData, inputValueCrypto, selectedCoin, token, useuInitialData])

  const buyWithCrypto = async (coin, amount) => {
    console.log('-------------------------------------------', userData)
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
    const tx = await instance.post(`/transaction/tx_crypto/`, {
      coin: coin,
      amount: amount,
      userId: userData.id,
      wallet: userData.wallet
    });
    console.log("----------- tx ------------", tx)
  }

  return (
    <DialogCustom
      header={t(`Buy ${token} with Fiat Money or Crypto`)} // Translate the header
      isOpen={isOpen}
      setOpen={setOpen}
      size="xl"
      body={
        <div className="flex md:flex-row flex-col gap-3 pb-32 pt-5">
          <Board>
            <div className="flex flex-col items-center gap-16">
              <div className="w-16 h-16">
                <img
                  src={
                    process.env.PUBLIC_URL + '/assets/images/creditcard_2.png'
                  }
                  alt="wing"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-3/4 gap-6">
                <div className="flex w-full items-center justify-center ">
                  <InputNumber
                    value={inputValueFiat}
                    setValue={setinputValueFiat}
                    label={t(`Set Amount to buy for ${token}`)} // Translate the label
                    prefix="$"
                  />
                </div>
                <Checkout
                  description={t(`Buy ${token}!`)} // Translate the description
                  amount={inputValueFiat}
                  crypto_amount={estimatedOutInFiat}
                  wallet_address={'0xab3323641374019A6620867684D8C328af9a87d4'}
                  stripeRef={stripeButton}
                >
                  <div className='flex w-full items-center justify-center'>
                    You will get <span className='text-white font-bold mx-[5px]'>{estimatedOutInFiat}</span> {token}
                  </div>
                </Checkout>
                <div className="flex w-full items-center justify-center">
                  <ButtonDark
                    label={t('Buy with Fiat')} // Translate the button label
                    onClickHandle={() => {
                      stripeButton.current.click();
                    }}
                  />
                </div>
              </div>
            </div>
          </Board>
          <Board>
            <div className="flex flex-col items-center gap-16">
              <div className="w-16 h-16">
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/metamask_2.png'}
                  alt="wing"
                />
              </div>
              <div className="flex items-center w-full flex-wrap justify-around">
                <div className="flex md:w-[30%] w-full items-center justify-center ">
                  <SelectBox
                    url="/coin_network/coins/"
                    query="coin-list"
                    name="Coin"
                    label={t('Select Coin')} // Translate the label
                    onChangeHandle={async (v) => {
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
                      const coinData = await instance.get(`/coin_network/coins/${v}`);
                      if (coinData.status === 200) {
                        setSelectedCoin(coinData.data);
                      }
                    }}
                    imageVal="logo"
                    isIncludedImage
                  />
                </div>
                <div className="flex md:w-[60%] w-full items-center justify-center ">
                  <InputNumber
                    value={inputValueCrypto}
                    setValue={setinputValueCrypto}
                    label={t(`Set Amount to buy for ${token}`)} // Translate the label
                    prefix={selectedCoin.symbol}
                  />
                </div>
                <div className='flex w-full items-center justify-center mt-4'>
                  You will get <span className='text-white font-bold mx-[5px]'>{estimatedOutInCrypto}</span> {token}
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <ButtonDark
                  label={t('Buy with Crypto')} // Translate the button label
                  onClickHandle={async () => {
                    console.log("selected coin => ", selectedCoin)
                    await buyWithCrypto(selectedCoin, inputValueCrypto);
                  }}
                />
              </div>
            </div>
          </Board>
        </div>
      }
    />
  );
};

export default BuyTokenDialog;
