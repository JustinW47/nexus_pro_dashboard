import axios from 'axios';
import useToast from 'hooks/useToast';

const ThirdPartyAuth = () => {
  const { showToast } = useToast();
  return (
    <div className="flex flex-col w-full gap-4">
      <span className="text-lg font-bold">Or log in with</span>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-center items-center rounded-full md:w-[48%] w-full transition-all cursor-pointer p-3">
          <form
            className="w-full"
            action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/google`}
            method="get"
          >
            <button
              type="submit"
              className={`flex font-bold rounded-lg justify-center items-center py-4 text-lg leading-normal transition duration-150 ease-in-out border-1 bg-[#0084C9] text-[#FFFFFF]  w-full`}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/svg/twitterx.svg'}
                className="h-10"
                alt="wing"
              />
            </button>
          </form>
        </div>
        <div className=" flex justify-center items-center rounded-full md:w-[48%] w-full transition-all cursor-pointer p-3">
          <form
            className="w-full "
            action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/google`}
            method="get"
          >
            <button 
              type="submit"
              className={`flex font-bold rounded-lg justify-center items-center py-4 text-lg leading-normal transition duration-150 ease-in-out border-1 bg-[#0084C9] text-[#FFFFFF]  w-full`}  
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/svg/google.svg'}
                className="h-10"
                alt="wing"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyAuth;
