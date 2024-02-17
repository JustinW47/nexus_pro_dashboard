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
      className={`w-full h-[85%] inline-block dark font-bold rounded-2xl text-xs uppercase leading-normal transition duration-150 ease-in-out  ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-gray p-8 text-[#128FC8] transition-all`}
    >
      <div className={`flex flex-col w-full rounded-2xl h-[100%] overflow-y-auto ${
        mode ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
      }`}>
        <div className="flex flex-col w-full">
          <div className="rounded-2xl w-full p-8 flex flex-row items-center gap-2">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_532_7087)">
                <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                <g clip-path="url(#clip1_532_7087)">
                < path d="M20 5C19.55 5 19.11 5.03 18.68 5.09C18.45 5.13 18.26 5.29 18.19 5.52L17.7 7.2C17.39 7.3 17.1 7.43 16.81 7.57L15.27 6.72C15.06 6.61 14.81 6.63 14.63 6.77C14.28 7.03 13.95 7.32 13.63 7.63C13.31 7.95 13.03 8.28 12.77 8.63C12.63 8.82 12.61 9.07 12.72 9.27L13.57 10.81C13.43 11.1 13.3 11.39 13.2 11.7L11.52 12.19C11.29 12.25 11.12 12.44 11.09 12.68C11.03 13.11 11 13.55 11 14C11 14.45 11.03 14.89 11.09 15.32C11.13 15.55 11.29 15.74 11.52 15.81L13.2 16.3C13.3 16.61 13.43 16.9 13.57 17.19L12.72 18.73C12.61 18.94 12.63 19.19 12.77 19.37C13.03 19.72 13.32 20.05 13.63 20.37C13.95 20.69 14.28 20.97 14.63 21.23C14.82 21.37 15.07 21.39 15.27 21.28L16.81 20.43C17.1 20.57 17.39 20.7 17.7 20.8L18.19 22.48C18.25 22.71 18.44 22.88 18.68 22.91C19.11 22.97 19.55 23 20 23C20.45 23 20.89 22.97 21.32 22.91C21.55 22.87 21.74 22.71 21.81 22.48L22.3 20.8C22.61 20.7 22.9 20.57 23.19 20.43L24.73 21.28C24.94 21.39 25.19 21.37 25.37 21.23C25.72 20.97 26.05 20.68 26.37 20.37C26.69 20.05 26.97 19.72 27.23 19.37C27.37 19.18 27.39 18.93 27.28 18.73L26.43 17.19C26.57 16.9 26.7 16.61 26.8 16.3L28.48 15.81C28.71 15.75 28.88 15.56 28.91 15.32C28.97 14.89 29 14.45 29 14C29 13.55 28.97 13.11 28.91 12.68C28.87 12.45 28.71 12.26 28.48 12.19L26.8 11.7C26.7 11.39 26.57 11.1 26.43 10.81L27.28 9.27C27.39 9.06 27.37 8.81 27.23 8.63C26.97 8.28 26.68 7.95 26.37 7.63C26.05 7.31 25.72 7.03 25.37 6.77C25.18 6.63 24.93 6.61 24.73 6.72L23.19 7.57C22.9 7.43 22.61 7.3 22.3 7.2L21.81 5.52C21.75 5.29 21.56 5.12 21.32 5.09C20.89 5.03 20.45 5 20 5ZM20 6.2C20.26 6.2 20.52 6.23 20.77 6.26L21.22 7.82C21.28 8.02 21.43 8.18 21.63 8.23C22.08 8.36 22.51 8.54 22.92 8.77C23.1 8.87 23.32 8.87 23.5 8.77L24.92 7.99C25.12 8.15 25.32 8.3 25.51 8.49C25.7 8.68 25.85 8.88 26.01 9.08L25.23 10.51C25.13 10.69 25.13 10.91 25.23 11.09C25.46 11.49 25.64 11.93 25.77 12.38C25.83 12.58 25.98 12.74 26.18 12.79L27.74 13.24C27.77 13.5 27.8 13.75 27.8 14.01C27.8 14.27 27.77 14.53 27.74 14.78L26.18 15.23C25.98 15.29 25.82 15.44 25.77 15.64C25.64 16.09 25.46 16.52 25.23 16.93C25.13 17.11 25.13 17.33 25.23 17.51L26.01 18.93C25.85 19.13 25.7 19.33 25.51 19.52C25.32 19.71 25.12 19.86 24.92 20.02L23.5 19.24C23.32 19.14 23.1 19.14 22.92 19.24C22.52 19.47 22.08 19.65 21.63 19.78C21.43 19.84 21.27 19.99 21.22 20.19L20.77 21.75C20.51 21.78 20.26 21.81 20 21.81C19.74 21.81 19.48 21.78 19.23 21.75L18.78 20.19C18.72 19.99 18.57 19.83 18.37 19.78C17.92 19.65 17.49 19.47 17.08 19.24C16.9 19.14 16.68 19.14 16.5 19.24L15.08 20.02C14.88 19.86 14.68 19.71 14.49 19.52C14.3 19.33 14.15 19.13 13.99 18.93L14.77 17.51C14.87 17.33 14.87 17.11 14.77 16.93C14.54 16.53 14.36 16.09 14.23 15.64C14.17 15.44 14.02 15.28 13.82 15.23L12.26 14.78C12.23 14.52 12.2 14.27 12.2 14.01C12.2 13.75 12.23 13.49 12.26 13.24L13.82 12.79C14.02 12.73 14.18 12.58 14.23 12.38C14.36 11.93 14.54 11.5 14.77 11.09C14.87 10.91 14.87 10.69 14.77 10.51L13.99 9.08C14.15 8.88 14.3 8.68 14.49 8.49C14.68 8.3 14.88 8.15 15.08 7.99L16.5 8.77C16.68 8.87 16.9 8.87 17.08 8.77C17.48 8.54 17.92 8.36 18.37 8.23C18.57 8.17 18.73 8.02 18.78 7.82L19.23 6.26C19.49 6.23 19.74 6.2 20 6.2ZM20 9.8C17.69 9.8 15.8 11.69 15.8 14C15.8 16.31 17.69 18.2 20 18.2C22.31 18.2 24.2 16.31 24.2 14C24.2 11.69 22.31 9.8 20 9.8ZM20 11C21.66 11 23 12.34 23 14C23 15.66 21.66 17 20 17C18.34 17 17 15.66 17 14C17 12.34 18.34 11 20 11Z" fill="black"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_532_7087">
                  <rect width="40" height="28" fill="white"/>
                </clipPath>
                <clipPath id="clip1_532_7087">
                  <rect width="18" height="18" fill="white" transform="translate(11 5)"/>
                </clipPath>
              </defs>
            </svg>

            <span className="text-white text-[14px] font-semibold">
              {t('Settings')}
            </span>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            {/* <div className="flex flex-col gap-7 lg:w-[45%] w-full">
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
            </div> */}

            {/* <span
              className={`hidden 2xl:h-[400px] lg:h-[500px] border-l ${
                mode ? 'border-white' : 'border-gray-600'
              }  lg:flex w-1 px-0`}
            ></span> */}
            {/* <span
              className={`lg:hidden w-full border-t ${
                mode ? 'border-white' : 'border-gray-600'
              }  flex h-1 px-0`}
            ></span> */}
            {/* <div className="flex flex-col gap-7 lg:w-[45%] w-full">
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
            </div> */}

            <div className='flex flex-col w-full md:w-1/3 px-10 gap-4'>
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

              <SelectBox
                value={`UTC+00:00`}
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

            <div className='flex flex-col w-full md:w-1/3 px-10'>
              2
            </div>

            <div className='flex flex-col w-full md:w-1/3 px-10'>
              3
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
