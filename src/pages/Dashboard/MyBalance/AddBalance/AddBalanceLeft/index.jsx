import CryptoPayment from './CryptoPayment';
import FiatPayment from './FiatPayment';

const AddBalanceLeft = () => {
  return (
    <div className="flex flex-col">
      <CryptoPayment />
      <FiatPayment />
    </div>
  );
};
export default AddBalanceLeft;
