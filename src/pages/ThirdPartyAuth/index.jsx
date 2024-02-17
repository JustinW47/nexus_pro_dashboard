import axios from 'axios';
import useToast from 'hooks/useToast';

const ThirdPartyAuth = () => {
  const { showToast } = useToast();
  return (
    <div className="flex flex-col w-full gap-4">
      <span className="text-lg font-bold">Or log in with</span>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <form
          className="md:w-[48%] w-full "
          action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/google`}
          method="get"
        >
          <button
            type="submit"
            className="flex items-center justify-center w-full p-3 transition-all border rounded-full cursor-pointer hover:bg-blue-600"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/svg/google.svg'}
              className="h-10 "
              alt="wing"
            />
          </button>
        </form>

        <div className=" flex justify-center items-center rounded-full md:w-[48%] w-full hover:bg-blue-600 transition-all cursor-pointer p-3 border">
          <form
            className="inline-block "
            action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/google`}
            method="get"
          >
            <button type="submit">
              <img
                src={process.env.PUBLIC_URL + '/assets/svg/twitterx.svg'}
                className="h-10 "
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
