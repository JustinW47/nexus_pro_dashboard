import { useState } from 'react';
import BuyTokenDialog from 'components/Dialog/BuyToken';
import ButtonGreen from 'components/Input/Button_green';
import useToast from 'hooks/useToast';

const BuyToken = ({ buttonTitle, token, value }) => {
  const [openDialog, setopenDialog] = useState(false);
  const { showToast } = useToast();

  return (
    <div className="flex w-full">
      <BuyTokenDialog
        setOpen={() => {
          setopenDialog(false);
        }}
        isOpen={openDialog}
        token={token}
        value={value}
      />
      <ButtonGreen
        label={buttonTitle}
        onClickHandle={() => {
          if (value !== null && Number(value) > 0.0) {
            setopenDialog(true);
          } else showToast(`Money should be bigger than zero!`, 'error');
        }}
      />
    </div>
  );
};

export default BuyToken;
