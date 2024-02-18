import { useMode } from 'ModeContext';
import PriceChart from 'components/Chart';
import { useEUUSRate } from 'hooks/useEUUSRate';
import { useUSEURate } from 'hooks/useUSEURate';
import { useEffect } from 'react';
import { useState } from 'react';

const DashboardContent = () => {
  const { mode } = useMode();
  const euusInitialData = useEUUSRate();
  const useuInitialData = useUSEURate();

  const [euusRate, setEuusRate] = useState(
    euusInitialData?.isFetched ? euusInitialData?.data?.data?.message : null
  );

  const [useuRate, setUseuRate] = useState(
    useuInitialData?.isFetched ? useuInitialData?.data?.data?.message : null
  );

  useEffect(() => {
    if (!euusInitialData?.isLoading && euusInitialData !== null) {
      setEuusRate(euusInitialData?.data?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [euusInitialData?.isLoading, euusInitialData?.data, euusInitialData]);

  useEffect(() => {
    if (!useuInitialData?.isLoading && useuInitialData !== null) {
      setUseuRate(useuInitialData?.data?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useuInitialData?.isLoading, useuInitialData?.data, euusInitialData]);

  return (
    <div
      className={`w-full overflow-y-auto h-[95%] inline-block dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#ffffff]'
      } dark:text-gray py-5 text-[#128FC8] transition-all `}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-center justify-center w-full gap-5">
          <div className="lg:w-[45%] w-full">
            <PriceChart
              title="EU/US"
              from="USD"
              rate={euusRate}
              to="EUR"
              loadingRate={euusInitialData?.isLoading}
              image_dark={
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/assets/images/Nexus Pro_Icons_03.png'
                  }
                  alt="wing"
                  className="h-[70px] w-[70px]"
                />
              }
              image_light={
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/assets/images/Nexus Pro_Icons_07.png'
                  }
                  alt="wing"
                  className="h-[70px] w-[70px]"
                />
              }
            />
          </div>
          <div className="lg:w-[45%] w-full">
            <PriceChart
              title="US/EU"
              from="EUR"
              to="USD"
              rate={useuRate}
              loadingRate={useuInitialData?.isLoading}
              image_dark={
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/assets/images/Nexus Pro_Icons_04.png'
                  }
                  alt="wing"
                  className="h-[70px] w-[70px]"
                />
              }
              image_light={
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/assets/images/Nexus Pro_Icons_08.png'
                  }
                  alt="wing"
                  className="h-[70px] w-[70px]"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
