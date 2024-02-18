import { useMode } from 'ModeContext';
import SideBar from 'pages/Dashboard/Sidebar';
import DashboardContent from './Content';
import { useState } from 'react';
import MenuBarMobile from './SidebarMobile';
import MyBalance from './MyBalance';
import AddBalance from './MyBalance/AddBalance';
import { usePageNum } from 'PageNumContext';
import WithdrawBalance from './MyBalance/WithdrawBalance';
import TransferFrom from './MyBalance/TransferFrom';
import MyPosition from './MyPosition';
import TradingHistory from './TradingHistory';
import MyAccount from './MyAccount';
import Setting from './Setting';
import Support from './Support';

export const dashboard_contents = ({ changeLanguage }) => {
  return [
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/dashboard.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'dashboard',
      component: <DashboardContent />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/wallet.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'myBalance/add',
      component: <MyBalance />
    },
    {
      show: false,
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/wallet.svg'}
            alt="wing"
          />
        </span>
      ),
      component: <AddBalance />
    },
    {
      show: false,
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/wallet.svg'}
            alt="wing"
          />
        </span>
      ),
      component: <WithdrawBalance />
    },
    {
      show: false,
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/wallet.svg'}
            alt="wing"
          />
        </span>
      ),
      component: <TransferFrom />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/position.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'myPositions',
      component: <MyPosition />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/Activity History.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'tradingHistory',
      component: <TradingHistory />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/Account.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'myAccount',
      component: <MyAccount />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/Settings.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'settings',
      component: <Setting changeLanguage={changeLanguage} />
    },
    {
      icon: (
        <span>
          <img
            src={process.env.PUBLIC_URL + '/assets/svg/Technical Support.svg'}
            alt="wing"
          />
        </span>
      ),
      label: 'support',
      component: <Support />
    }
  ];
};

const Dashboard = ({ changeLanguage }) => {
  const { mode } = useMode();
  const { pageNum } = usePageNum();
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div
      className={`${
        mode ? 'bg-[#000000]' : 'bg-[#ffffff]'
      } transition-all h-screen flex w-full pt-32 px-2 `}
    >
      <div className="relative flex w-full h-[99%] gap-5">
        {!dashboard_contents({ changeLanguage: changeLanguage })[pageNum]
          ?.noSidebar ? (
          <>
            {' '}
            <MenuBarMobile setter={setShowSidebar} />
            <SideBar
              show={showSidebar}
              setter={setShowSidebar}
              selectedSidebarPage={pageNum}
              changeLanguage={changeLanguage}
            />
            {showSidebar ? (
              <div
                className="fixed top-0 bottom-0 right-0 z-50 w-full h-full left-1/4 "
                onClick={() => {
                  setShowSidebar(false);
                }}
              ></div>
            ) : null}
          </>
        ) : null}
        {
          dashboard_contents({ changeLanguage: changeLanguage })[pageNum]
            .component
        }
      </div>
    </div>
  );
};

export default Dashboard;
