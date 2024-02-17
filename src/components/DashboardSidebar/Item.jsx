import { useMode } from 'ModeContext';
import { useTranslation } from 'react-i18next';

const SidebarItem = ({ icon, label, onClickHandle, isSelected }) => {
  const { mode } = useMode();
  const { t } = useTranslation();
  return (
    <div
      className={`py-5 border-b  ${
        mode
          ? 'bg-[#000000] hover:bg-[#0084C9] '
          : 'bg-[#f1f1f1] hover:bg-[#6E7A8A] '
      } cursor-pointer transition-all ${
        isSelected
          ? mode
            ? 'bg-[#010813] border-[#000000] border-y'
            : 'bg-[#a7a7a7] border-[#000000] border-y'
          : mode
          ? 'border-[#5F5F5F] border-b'
          : 'border-[#ffffff] border-b'
      }`}
      onClick={onClickHandle}
    >
      <div
        className={`flex items-center px-10 gap-7 ${
          isSelected
            ? mode
            ? 'text-[#FFFFFF]'
            : 'text-[#263238]'
            : mode
            ? 'text-[#D9D9D9]'
            : 'text-[#6E7A8A]'
        } transition-all`}
      >
        {icon}
        <span>{t(label)}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
