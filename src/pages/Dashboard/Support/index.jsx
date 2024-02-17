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
      className={`w-full overflow-y-auto h-[85%] inline-block dark font-bold rounded-2xl text-xs leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 ${
        mode ? 'bg-[#042433]' : 'bg-[#ffffff]'
      } dark:text-gray py-5 text-[#128FC8] transition-all shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] flex justify-center`}
    >
      <div className="flex flex-col items-start w-full gap-5 px-12 py-12">
        <div className="flex flex-wrap w-full gap-5 lg:justify-between justify-start md:flex-row flex-col">
          <div
            className={`flex flex-col gap-7 lg:w-[45%] w-full ${
              !mode ? 'text-[#042433]' : 'text-[#ffffff]'
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
      </div>
    </div>
  );
};

export default Support;
