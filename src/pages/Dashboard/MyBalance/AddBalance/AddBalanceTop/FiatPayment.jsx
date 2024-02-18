import BoardDashboard from 'components/Board/Board_dashboard';
import Checkout from 'components/Checkout';
import ButtonDark from 'components/Input/Button_dark';
import InputNumber from 'components/Input/Input_Number';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRef } from 'react';

const FiatPayment = () => {
  const { t } = useTranslation();
  const [inputValue, setinputValue] = useState(0);
  const stripeButton = useRef(null);

  return (
    <BoardDashboard>
      <div className="relative flex flex-col flex-1 w-full gap-5">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="flex w-full lg:w-1/2">
            <div className="flex items-center w-full gap-3">
              <InputNumber
                value={inputValue}
                setValue={setinputValue}
                label={t('setAmountToAddFunds')}
                prefix="$"
              />
            </div>
          </div>
          <Checkout
            description={t('depositToAddBalance')}
            amount={inputValue}
            stripeRef={stripeButton}
          />
          <div className="flex justify-start w-full lg:justify-end self-end lg:w-1/3">
            <ButtonDark
              label={t('addFunds')}
              onClickHandle={() => {
                stripeButton.current.click();
              }}
            />
          </div>
        </div>
      </div>
    </BoardDashboard>
  );
};

export default FiatPayment;
