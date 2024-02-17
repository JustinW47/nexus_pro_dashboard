import { useMode } from 'ModeContext';

import { dashboard_contents } from '.';
import SidebarItem from 'components/DashboardSidebar/Item';
import { usePageNum } from 'PageNumContext';
import { useTranslation } from 'react-i18next';

const SideBar = ({ show, setter, changeLanguage }) => {
  const { t } = useTranslation();
  const { mode } = useMode();
  const { setPageNum, pageNum } = usePageNum();
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  return (
    <div
      className={`inline-block dark font-bold rounded-2xl h-[85%] md:relative absolute text-xs uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 min-w-[230px] z-20 w-1/4 overflow-y-auto ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray text-[#128FC8] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)]  ${appendClass}
       transition-[margin-left] ease-in-out duration-500 left-0 z-40
      `}
    >
      <div className="flex flex-col items-start justify-start bg-inherit">
        <div className="w-full h-full overflow-hidden shadow-lg bg-inherit rounded-t-xl">
          {dashboard_contents({ changeLanguage: changeLanguage })?.map(
            (c, index) =>
              !c?.noSidebar ? (
                <SidebarItem
                  label={t(c?.label)}
                  icon={c?.icon}
                  key={index}
                  onClickHandle={() => {
                    setPageNum(index);
                    setter(false);
                  }}
                  isSelected={pageNum === index}
                />
              ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
