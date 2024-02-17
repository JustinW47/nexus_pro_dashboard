import { useMode } from 'ModeContext';
import CheckBox from 'components/Input/CheckBox';
import ColorSelectBox from 'components/Input/ColorPicker';
import SelectBox from 'components/Input/SelectBox_static';
import UploadPhoto from 'components/Input/UploadPhoto';
import Switcher from 'components/Layout/Header/DarkModeSwitch';
import useTranslationWithStorage from 'hooks/useTranslationWithStorage';
import { useTranslation } from 'react-i18next';

const langList = [
  { text: 'English', value: 'en' },
  { text: 'Spanish', value: 'sp' },
  { text: 'Russian', value: 'ru' },
  { text: 'Mandarin', value: 'zh' },
  { text: 'Arabic', value: 'ar' },
  { text: 'French', value: 'fr' }
];

const Setting = ({ changeLanguage }) => {
  const { mode } = useMode();
  const { t, changeLanguageAndStore } = useTranslationWithStorage();
  const { i18n } = useTranslation();
  const selectedLanguageId = langList.findIndex(
    (lang) => lang.value === i18n.language
  );

  return (
    <div
      className={`w-full overflow-y-auto h-[85%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray py-5 text-[#128FC8] transition-all shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] flex justify-center`}
    >
      <div className="flex flex-col items-start w-full gap-5 px-16 py-20">
        <div className="border border-[#128fc8] rounded-2xl w-full py-9 px-11 flex flex-col">
          <span className="text-[#128FC8] text-lg font-semibold">
            {t('settings')}
          </span>
          <div className="flex flex-col flex-wrap justify-start w-full gap-5 lg:justify-between md:flex-row">
            <div className="flex flex-col gap-7 lg:w-[45%] w-full">
              <div className="flex flex-col justify-between lg:flex-row ">
                <div className="w-full lg:w-1/3">
                  <SelectBox
                    value={selectedLanguageId}
                    label="Language"
                    onChangeHandle={(v) => {
                      // The value here is the language code, not the index
                      const languageCode = langList.find(
                        (lang) => lang.value === v
                      )?.value;
                      if (languageCode) {
                        changeLanguageAndStore(languageCode); // Update language using the hook
                      }
                    }}
                    list={langList}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <SelectBox
                    value={0}
                    label={t('Timezone')}
                    onChangeHandle={() => {}}
                    list={[
                      { text: 'UTC+00:00', value: 'UTC+00:00' },
                      { text: 'UTC+01:00', value: 'UTC+01:00' },
                      { text: 'UTC+02:00', value: 'UTC+02:00' },
                      { text: 'UTC+03:00', value: 'UTC+03:00' },
                      { text: 'UTC+04:00', value: 'UTC+04:00' },
                      { text: 'UTC+05:00', value: 'UTC+05:00' },
                      { text: 'UTC+06:00', value: 'UTC+06:00' },
                      { text: 'UTC+07:00', value: 'UTC+07:00' },
                      { text: 'UTC+08:00', value: 'UTC+08:00' },
                      { text: 'UTC+09:00', value: 'UTC+09:00' },
                      { text: 'UTC+10:00', value: 'UTC+10:00' },
                      { text: 'UTC+11:00', value: 'UTC+11:00' },
                      { text: 'UTC+12:00', value: 'UTC+12:00' },
                      { text: 'UTC-01:00', value: 'UTC-01:00' },
                      { text: 'UTC-02:00', value: 'UTC-02:00' },
                      { text: 'UTC-03:00', value: 'UTC-03:00' },
                      { text: 'UTC-04:00', value: 'UTC-04:00' },
                      { text: 'UTC-05:00', value: 'UTC-05:00' },
                      { text: 'UTC-06:00', value: 'UTC-06:00' },
                      { text: 'UTC-07:00', value: 'UTC-07:00' },
                      { text: 'UTC-08:00', value: 'UTC-08:00' },
                      { text: 'UTC-09:00', value: 'UTC-09:00' },
                      { text: 'UTC-10:00', value: 'UTC-10:00' },
                      { text: 'UTC-11:00', value: 'UTC-11:00' },
                      { text: 'UTC-12:00', value: 'UTC-12:00' }
                    ].map((timezone) => ({
                      ...timezone,
                      text: t(timezone.text)
                    }))}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`  text-base font-medium ${
                    mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                  }`}
                >
                  {t('Template')}
                </span>
                <div className="flex items-center gap-3">
                  <span>{t('Light Mode')}</span>
                  <Switcher />
                  <span>{t('Dark Mode')}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`  text-base font-medium ${
                    mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                  }`}
                >
                  {t('Platform')}
                </span>
                <div className="flex items-center gap-3 p-5 border rounded-lg border-[#128fc8] w-fit">
                  <span className="w-6 h-6 p-1 text-center text-white transition-all bg-gray-600 rounded-full cursor-pointer hover:opacity-70">
                    -
                  </span>
                  <span>00</span>
                  <span className="w-6 h-6 p-1 text-center text-white transition-all bg-gray-600 rounded-full cursor-pointer hover:opacity-70">
                    +
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`hidden 2xl:h-[400px] lg:h-[500px] border-l ${
                mode ? 'border-white' : 'border-gray-600'
              }  lg:flex w-1 px-0`}
            ></span>
            <span
              className={`lg:hidden w-full border-t ${
                mode ? 'border-white' : 'border-gray-600'
              }  flex h-1 px-0`}
            ></span>
            <div className="flex flex-col gap-7 lg:w-[45%] w-full">
              <div className="flex flex-col justify-between w-full gap-3 lg:flex-row">
                <div className="flex flex-col flex-1">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    {t('Automatic Graphic Scrolling')}
                  </span>
                  <div className="flex">
                    <CheckBox label={t('Auto-Scrolling')} />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    {t('Open Trade Without Confirmation')}
                  </span>
                  <div className="flex">
                    <CheckBox label={t('1-Click Trade')} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full gap-3 lg:flex-row">
                <div className="flex flex-col flex-1">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    {t('Use optimized rendering for chart and candles')}
                  </span>
                  <div className="flex">
                    <CheckBox label={t('Performance Mode')} />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    {t('Use Short Order Element Mode')}
                  </span>
                  <div className="flex">
                    <CheckBox label={t('Short Order Label')} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between w-full gap-3 lg:flex-row">
                <div className="flex flex-col flex-1">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    {t('Graphic Colors')}
                  </span>
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-3 ">
                        <span
                          className={`  text-base font-medium ${
                            mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                          }`}
                        >
                          {t('Up Trend')}:
                        </span>
                        <ColorSelectBox onChangeHandle={() => {}} />
                      </div>
                      <div className="flex items-center gap-3 ">
                        <span
                          className={`  text-base font-medium ${
                            mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                          }`}
                        >
                          {t('Down Trend')}:
                        </span>
                        <ColorSelectBox onChangeHandle={() => {}} />
                      </div>
                    </div>

                    <div className="relative flex w-1/2">
                      <UploadPhoto
                        is_Connected={true}
                        user={''} //user}
                        onChanged={() => {
                          // onAvatarChanged()
                        }}
                        title={
                          <div className=" absolute top-1/2 left-1/2 flex-col -translate-x-1/2 -translate-y-1/2 z-[200] flex items-center justify-center">
                            <span
                              className={`  text-sm font-medium text-[#ffffff]
                          `}
                            >
                              {t('Choose File')}
                            </span>
                            <span
                              className={`  text-xm font-medium text-[#ffffff]
                          `}
                            >
                              ({t('max size - 2 mb')})
                            </span>
                          </div>
                        }
                        availableChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
