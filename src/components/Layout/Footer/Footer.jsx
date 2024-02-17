import { useMode } from 'ModeContext';

import ButtonDarkRounded from 'components/Input/Button_dark_rounded';

const Footer = () => {
  const { mode } = useMode();
  return (
    <div className={`flex flex-col w-full`}>
      <div className="flex flex-row flex-wrap items-start w-full px-4 py-12 space-y-2 bg-[#128FC8] text-start">
        <div className="flex flex-col px-5 md:border-r-2 border-b-2 md:border-b-0 border-b-[#B5DCEE33] md:min-h-[200px] md:border-r-[#B5DCEE33] border-opacity-50 w-full md:w-[30%] gap-5">
          <span
            className={`text-4xl font-bold  transition-all ${
              mode ? 'text-[#000000]' : 'text-[#ffffff]'
            } `}
          >
            Driving the Future of Money
          </span>
          <span className="text-lg font-semibold text-[rgba(200, 200, 200, 0.50)]">
            NexusPro supports and empowers growing ventures and innovation
            throughout the blockchain as a digital token built on multiple
            blockchains.
          </span>
        </div>
        <div className="flex flex-col px-5 border-r-2 border-b-2 md:border-b-0 border-b-[#B5DCEE33] border-r-[#B5DCEE33] border-opacity-50 w-1/2 md:w-[20%]  gap-5 min-h-[200px]">
          <span
            className={`text-3xl font-bold transition-all ${
              mode ? 'text-[#000000]' : 'text-[#ffffff]'
            }`}
          >
            Company
          </span>
          <div className="flex flex-col gap-2 text-[rgba(200, 200, 200, 0.50)]">
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              About Us
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              Careers
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              Contact Us
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              Legal Terms
            </span>
          </div>
        </div>
        <div className="flex flex-col px-5 md:border-r-2 border-b-2 md:border-b-0 border-b-[#B5DCEE33] md:border-r-[#B5DCEE33] border-opacity-50 w-1/2 md:w-[20%]  gap-5 min-h-[200px]">
          <span
            className={`text-3xl font-bold transition-all ${
              mode ? 'text-[#000000]' : 'text-[#ffffff]'
            }`}
          >
            Resources
          </span>
          <div className="flex flex-col gap-2 text-[rgba(200, 200, 200, 0.50)]">
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              News
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              FAQs
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              Integration Guidelines
            </span>
            <span className="text-lg font-semibold cursor-pointer hover:opacity-50 hover:underline">
              Media Assets
            </span>
          </div>
        </div>
        <div className="flex flex-col px-5 w-full md:w-[30%] gap-5 min-h-[200px]">
          <span
            className={`text-xl font-semibold transition-all ${
              mode ? 'text-[#000000]' : 'text-[#ffffff]'
            }`}
          >
            Driving the Future of Money
          </span>
          <div
            className={`flex justify-between transition-all p-5 ${
              mode ? 'bg-[#010813]' : 'bg-[#ffffff]'
            } rounded-xl md:flex-col sm:flex-row flex-col xl:flex-row    md:items-baseline sm:items-center items-baseline xl:items-center`}
          >
            <input
              placeholder="Enter Your Email Address"
              className={`w-3/4 h-full md:text-xl text-base text-[rgba(200, 200, 200, 0.50)] transition-all outline-none ${
                mode ? 'bg-[#010813]' : 'bg-[#ffffff]'
              }`}
            />
            <div className="inline-block w-1/4">
              <ButtonDarkRounded label={'Subscribe'} />
            </div>
          </div>
          <span className="text-sm font-semibold text-[rgba(200, 200, 200, 0.50)]">
            By submitting this form, you agree to receive marketing and other
            communications from NexusPro about the NexusPro Products and other
            company updates. You can unsubscribe from these communications at
            any time. For more information on our privacy practices, please
            review our Privacy Policy.
          </span>
        </div>
      </div>
      <div
        className={`${
          !mode ? 'bg-[#ffffff]' : 'bg-[#010813]'
        } p-5 flex md:flex-row flex-col text-center transition-all items-center justify-between`}
      >
        <span className="flex items-center h-20 mt-0 transition-all cursor-pointer hover:opacity-80">
          <img
            src={
              process.env.PUBLIC_URL + mode
                ? '/assets/images/Nexus Pro_Logo 1.png'
                : '/assets/images/Nexus Pro_Logo 2.png'
            }
            alt="wing"
            className="h-2/3"
          />
        </span>

        <span
          className={`text-lg ${
            mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
          } transition-all`}
        >
          Copyright © 2013 - 2023 NexusPro Operations Limited. All rights
          reserved.
        </span>
        <div className="flex gap-3">
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Reddit.png'}
              alt="wing"
            />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Instagram.png'}
              alt="wing"
            />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/LinkedIn.png'}
              alt="wing"
            />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Telegram App.png'}
              alt="wing"
            />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Twitter.png'}
              alt="wing"
            />
          </div>
          <div className="cursor-pointer hover:opacity-50">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Facebook.png'}
              alt="wing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
