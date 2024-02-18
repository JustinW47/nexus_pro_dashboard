import { useMode } from 'ModeContext';
import { useUserData } from 'UserDataContext';
import DropDown from 'components/DropDown';
import ButtonDark from 'components/Input/Button_dark';
import SelectBox from 'components/Input/SelectBox_static';
import UploadPhoto from 'components/Input/UploadPhoto';

const Support = () => {
  const { mode } = useMode();
  const { userData } = useUserData();
  
  console.log(userData, 'userData');
  return (
    <div
      className={`w-full h-[95%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out ${
        mode ? 'bg-[#263238]' : 'bg-[#EBF5FB]'
      } dark:text-[#128FC8] text-[#128FC8] transition-all p-8 overflow-y-auto`}
    >
      {/* <div className="flex flex-col items-start w-full gap-5 px-12 py-12">
        <div className="flex flex-wrap w-full gap-5 lg:justify-between justify-start md:flex-row flex-col">
          <div
            className={`flex flex-col gap-7 lg:w-[45%] w-full ${
              !mode ? 'text-[#000000]' : 'text-[#ffffff]'
            }
        `}
          >
            <div className="flex flex-col gap-3">
              <span className="text-[#128FC8] text-lg font-semibold">
                My Requests
              </span>
              <div className="flex items-center flex-col justify-center p-5 gap-3">
                <img
                  src={
                    process.env.PUBLIC_URL + '/assets/images/Question Mark.png'
                  }
                  alt="wing"
                  className="h-[70px] w-[70px]"
                />
                <span className=" font-bold text-lg">
                  You don’t have any open requests
                </span>
                <span
                  className={`font-semibold text-lg ${
                    !mode ? 'text-[#555555]' : 'text-[#ffffff]'
                  }`}
                >
                  If you have any questions, you might find answers in the our
                  FAQ Section
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#128FC8] text-lg font-semibold">FAQ</span>
              <div
                className={`flex flex-col gap-1 sm:px-16 px-5 text-xl font-bold  ${
                  mode ? 'text-white' : 'text-gray_md'
                } transition-all text-start lg:px-3`}
              >
                <DropDown content={' What are digital options?'} />
                <DropDown
                  content={' What are the varieties digital options?'}
                />
                <DropDown content={' What is expiration period of a trade?'} />
                <DropDown
                  content={'What are the possible results of the placed trade?'}
                />
                <DropDown content={'What determines profit size?'} />
                <DropDown
                  content={'What is trading platform and why it is needed?'}
                />
              </div>
            </div>
          </div>
          <span
            className={`hidden 2xl:h-[600px] lg:h-[800px] border-l ${
              mode ? 'border-white' : 'border-gray-600'
            }  lg:flex w-1 px-0`}
          ></span>
          <span
            className={`lg:hidden w-full border-t ${
              mode ? 'border-white' : 'border-gray-600'
            }  flex h-1 px-0`}
          ></span>
          <div className="flex flex-col gap-7 lg:w-[45%] w-full">
            <div className="flex flex-col gap-3">
              <span className="text-[#128FC8] text-lg font-semibold">
                Contact Us
              </span>
              <div className="p-6 max-w-md flex flex-col items-center mx-auto w-full gap-5">
                <SelectBox
                  value={0}
                  label="Select Subject"
                  onChangeHandle={() => {}}
                  list={[
                    {
                      text: 'Deposit/Withdrawal',
                      value: '0'
                    },
                    { text: 'Deposit/Withdrawal', value: '1' },
                    { text: 'Deposit/Withdrawal', value: '2' }
                  ]}
                />
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
                        Attachment
                      </span>
                      <span
                        className={`  text-xm font-medium text-[#ffffff]
                          `}
                      >
                        (max size - 2 mb)
                      </span>
                    </div>
                  }
                  availableChange={() => {}}
                />
                <div className="flex flex-col w-full">
                  <span
                    className={`  text-base font-medium ${
                      mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    Your Message
                  </span>
                  <textarea className="border border-[#128fc8] rounded-xl p-5"></textarea>
                </div>
                <ButtonDark
                  label="Confirm & Send Request"
                  dark
                  onClickHandle={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='w-full flex flex-col lg:flex-row gap-6'>
        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-4 divide-y divide-[#263238]'>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-row items-center gap-x-3'>
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_532_7596)">
                    <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                    <g clip-path="url(#clip1_532_7596)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0037 16.6935V18.1608C15.0037 19.3735 15.9693 20.3467 17.1397 20.3467H25.406L28.771 23.7904C28.9759 24 29.2831 24.0599 29.5465 23.9551C29.8098 23.8353 29.9854 23.5808 29.9854 23.2813V10.8392C29.9854 9.62648 29.0198 8.65327 27.8493 8.65327H24.9963V7.18597C24.9963 5.97321 24.0307 5 22.8603 5H12.1361C10.9656 5 10 5.98818 10 7.18597V19.6131C10 19.9125 10.1756 20.182 10.4389 20.2868C10.7023 20.4066 11.0095 20.3318 11.2143 20.1221L14.5794 16.6785H15.0037V16.6935ZM24.9963 10.1206V14.5075C24.9963 15.7203 24.0307 16.6935 22.8603 16.6935H16.4375V18.1608C16.4375 18.565 16.7593 18.8944 17.1544 18.8944H25.7279C25.9181 18.8944 26.0936 18.9693 26.2399 19.104L28.5955 21.5146V10.8392C28.5955 10.435 28.2736 10.1056 27.8786 10.1056H25.0256L24.9963 10.1206ZM23.5625 7.18597V14.4925C23.5625 14.8968 23.2407 15.2262 22.8456 15.2262H14.2868C14.0966 15.2262 13.921 15.301 13.7747 15.4358L11.4192 17.8463V7.18597C11.4192 6.78172 11.741 6.45232 12.1361 6.45232H22.8456C23.2407 6.45232 23.5625 6.78172 23.5625 7.18597ZM14.2868 13.0402H18.5735C18.9685 13.0402 19.2904 12.7108 19.2904 12.3065C19.2904 11.9023 18.9685 11.5729 18.5735 11.5729H14.2868C13.8917 11.5729 13.5699 11.9023 13.5699 12.3065C13.5699 12.7108 13.8917 13.0402 14.2868 13.0402ZM14.2868 10.1206H21.4265C21.8215 10.1206 22.1434 9.79117 22.1434 9.38692C22.1434 8.98266 21.8215 8.65327 21.4265 8.65327H14.2868C13.8917 8.65327 13.5699 8.98266 13.5699 9.38692C13.5699 9.79117 13.8917 10.1206 14.2868 10.1206Z" fill="black"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_532_7596">
                      <rect width="40" height="28" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1_532_7596">
                      <rect width="20" height="19" fill="white" transform="translate(10 5)"/>
                    </clipPath>
                  </defs>
                </svg>

                <p className='text-[14px] font-semibold dark:text-white'>Support</p>
              </div>
              
              <div className='flex flex-row items-center justify-between mt-4'>
                <label className="text-lg text-[#D9D9D9]">My Request</label>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_532_7565)">
                    <path d="M1.66996 28.6302C9.62996 29.9502 15.35 29.1902 18.31 28.5202C19.08 28.3702 19.82 28.1402 20.54 27.8702C20.6 27.8502 20.64 27.7902 20.64 27.7902C26.12 25.7002 30.01 20.5202 30.01 14.3602C30.01 6.40023 23.51 0.000234375 15.5 -0.00976562C7.46996 0.000234375 0.969961 6.45023 0.969961 14.4102C0.969961 16.0002 1.23996 17.5402 1.71996 18.9702C1.71996 18.9702 2.44996 21.6302 1.82996 23.9502C1.52996 24.8102 1.14996 25.2902 0.629961 25.8902C-0.340039 27.0202 -0.30004 28.2902 1.66996 28.6302Z" fill="#0080C4"/>
                    <path d="M14.97 25.1397C13.88 25.1397 13 24.2697 13 23.1797C13 22.0897 13.88 21.2197 14.97 21.2197C16.06 21.2197 16.94 22.0997 16.94 23.1797C16.94 24.2597 16.06 25.1397 14.97 25.1397Z" fill="white"/>
                    <path d="M18.1499 16.3396C17.6299 16.6896 16.8999 16.9496 16.4099 17.1096V18.3896C16.4099 19.2296 15.8099 19.9196 14.9599 19.9196C14.1099 19.9196 13.5099 19.2396 13.5099 18.3896V15.7896C13.5099 14.9496 14.1499 14.2596 14.9999 14.2596C15.5399 14.2596 16.0399 14.0996 16.4799 13.7996C17.2199 13.2996 17.6599 12.4696 17.6599 11.5796C17.6599 10.0996 16.4499 8.90961 14.9599 8.90961C13.4699 8.90961 12.2599 10.1096 12.2599 11.5796C12.2599 12.4196 11.5699 13.1096 10.7199 13.1096C9.86993 13.1096 9.17993 12.4296 9.17993 11.5796C9.17993 8.41961 11.7699 5.84961 14.9499 5.84961C18.1299 5.84961 20.6999 8.41961 20.6999 11.5796C20.6999 13.4896 19.7299 15.2596 18.1299 16.3296L18.1499 16.3396Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_532_7565">
                      <rect width="30" height="29.36" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <label className='text-[14px] text-[#B0B5BC] font-normal mt-4'>You don’t have any open requests.</label>
            </div>

            <div className='flex flex-col gap-y-4'>
              <label className='text-xs text-[#6E7A8A] pt-3'>
                If you have any questions, you might find answers in our FAQ Section.
              </label>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-4'>
            <span className="text-[#D9D9D9] text-lg font-normal">FAQ</span>
            <div
              className={`flex flex-col gap-1 sm:px-16 px-5 text-xl font-bold  ${
                mode ? 'text-white' : 'text-gray_md'
              } transition-all text-start lg:px-3`}
            >
              <DropDown content={' What are digital options?'} />
              <DropDown
                content={' What are the varieties digital options?'}
              />
              <DropDown content={' What is expiration period of a trade?'} />
              <DropDown
                content={'What are the possible results of the placed trade?'}
              />
              <DropDown content={'What determines profit size?'} />
              <DropDown
                content={'What is trading platform and why it is needed?'}
                description={'A trading platform is a software application system used to conduct trading and managing market positions through brokerage firms. Trading platforms offer functions and features that enable real-time interaction with trading partners.'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full h-fit lg:w-1/3 p-[10px] bg-[#FFFFFF] dark:bg-[#181F23] rounded-[20px]'>
          <div className='flex flex-col bg-[#FFFFFF] dark:bg-[#000000] w-full rounded-[20px] p-8 gap-y-4'>
            <span className="text-[#D9D9D9] text-lg font-normal">Contact Us</span>
            <div className='flex mt-3'>
              <div className="max-w-md flex flex-col items-center w-full gap-5">
                <SelectBox
                  value={0}
                  label="Select Subject"
                  onChangeHandle={() => {}}
                  list={[
                    {
                      text: 'Deposit/Withdrawal',
                      value: '0'
                    },
                    { text: 'Deposit/Withdrawal', value: '1' },
                    { text: 'Deposit/Withdrawal', value: '2' }
                  ]}
                />
                <UploadPhoto
                  is_Connected={true}
                  user={''} //user}
                  onChanged={() => {
                    // onAvatarChanged()
                  }}
                  title={
                    <div className='flex w-full px-3.5 py-3'>
                      <span
                        className={`text-[12px] font-medium text-[#B0B5BC]`}
                      >
                        {'Attachment (max. size - 2mb)'}
                      </span>
                    </div>
                  }
                  availableChange={() => {}}
                />
                <div className="flex flex-col w-full">
                  <span
                    className={`  text-sm font-normal ${
                      mode ? 'text-[#D9D9D9]' : 'text-[#5F5F5F]'
                    }`}
                  >
                    Your Message
                  </span>
                  <textarea className="border border-[#6E7A8A] bg-black rounded-xl p-4 mt-2 text-xs text-[#B0B5BC]"></textarea>
                </div>
                <div className='flex self-start'>
                  <ButtonDark
                    label="Confirm & Send Request"
                    dark
                    onClickHandle={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
