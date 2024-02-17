import { useMode } from 'ModeContext';
import { useTranslation } from 'react-i18next';

const SidebarItem = ({ icon, label, onClickHandle, isSelected }) => {
  const { mode } = useMode();
  const { t } = useTranslation();
  return (
    <div
      className={`py-5 border-b  ${
        mode
          ? 'bg-[#072431] hover:bg-[#051a24] '
          : 'bg-[#f1f1f1] hover:bg-[#d7d7d7] '
      } cursor-pointer transition-all ${
        isSelected
          ? mode
            ? 'bg-[#010813] border-[#128FC8] border-y'
            : 'bg-[#a7a7a7] border-[#128FC8] border-y'
          : mode
          ? 'border-[#5F5F5F] border-b'
          : 'border-[#ffffff] border-b'
      }`}
      onClick={onClickHandle}
    >
      <div
        className={`flex items-center px-10 gap-7 ${
          isSelected
            ? ' text-[#128FC8] '
            : mode
            ? 'text-[#ffffff]'
            : 'text-[#5F5F5F]'
        } transition-all`}
      >
        {icon}
        <span>{t(label)}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
