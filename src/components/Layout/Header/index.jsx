import cn from 'classnames';
import Button from 'components/Input/Button_dark';
import { useMode } from 'ModeContext';
import ProfileButton from './ProfileButton';
import { useUserData } from 'UserDataContext';
import { useLogout } from 'hooks/useLogout';

export const navLinks = [
  { label: 'Dashboard', link: 'dashboard', hidden: true }
];

const Header = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setSelectedPage,
  selectedPage
}) => {
  const { userData } = useUserData();
  const { logout } = useLogout();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { mode } = useMode();

  return (
    <div
      className={`${
        mode ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] text-[#010813]'
      } flex flex-row flex-wrap justify-between items-center sm:py-[34px] py-[20px] font-inter absolute top-0 w-full`}
    >
      {/* Mobile Breadcrumb */}

      <div
        className={`absolute left-0 z-10 flex flex-row justify-start w-full h-screen p-12 overflow-hidden transition-all ${
          mode ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] text-[#010813]'
        } lg:hidden ${
          isMobileMenuOpen
            ? ' max-h-screen sm:top-32 top-20'
            : 'max-h-0 -top-44'
        }`}
      >
        <div className="flex flex-col w-1/3 space-y-12">
          {navLinks.map((nav, index) => {
            return nav?.hidden === true ? null : (
              <div
                className={`flex flex-col space-y-3 text-[16px] cursor-pointer`}
                key={index}
              >
                {
                  <div
                    onClick={() => {
                      scrollToTop();
                      setIsMobileMenuOpen(false);
                      setSelectedPage(nav?.link);
                    }}
                    key={index}
                  >
                    <span>{nav?.label}</span>
                  </div>
                }
              </div>
            );
          })}

          <div className="flex items-center gap-5 px-4 ">
            {userData ? (
              <ProfileButton
                userData={userData}
                logout={() => {
                  logout();
                }}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              <>
                <div
                  onClick={() => {
                    scrollToTop();
                    setSelectedPage('login');
                  }}
                  className={
                    selectedPage === 'login'
                      ? `flex transition-all text-[#128FC8] cursor-pointer`
                      : `flex transition-all text-[#5F5F5F] cursor-pointer`
                  }
                >
                  <div className="flex items-center text-base font-semibold uppercase transition-all gap-x-2 hover:text-gray-400">
                    Login
                  </div>
                </div>
                <Button
                  label="SignUp"
                  dark
                  onClickHandle={() => {
                    scrollToTop();
                    setSelectedPage('signup');
                  }}
                />
              </>
            )}

            {/* <ThemeSwitcher /> */}
          </div>
        </div>
      </div>

      <nav className="z-30 flex flex-wrap items-center justify-start w-full px-3 lg:justify-between">
        <div
          onClick={() => {
            scrollToTop();
            setSelectedPage('dashboard');
          }}
          className={({ isActive }) =>
            isActive ? ` text-gray-800` : ` text-[#1E2761]`
          }
        >
          <span className="flex items-center h-20 mt-0 transition-all cursor-pointer hover:opacity-80">
            <img
              src={
                process.env.PUBLIC_URL + mode
                  ? '/assets/images/Nexus Pro_Logo 1.png'
                  : '/assets/images/Nexus Pro_Logo 2.png'
              }
              alt="wing"
              className="h-3/4"
            />
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="absolute z-30 flex items-center justify-end text-[#ffffff] cursor-pointer lg:hidden right-12 lg:right-16"
          onClick={toggleMobileMenu}
        >
          {!isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Desktop Navigation */}
        <div
          className={cn('hidden xl:space-x-8 space-x-4 lg:flex', {
            'lg:flex': !isMobileMenuOpen
          })}
        >
          {navLinks.map((link, index) => {
            return link?.hidden ? null : (
              <div
                onClick={() => {
                  scrollToTop();
                  setSelectedPage(link?.link);
                }}
                key={index}
                className={
                  link?.link === selectedPage
                    ? `flex transition-all text-[#128FC8]  cursor-pointer`
                    : `flex transition-all  cursor-pointer ${
                        mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
                      }`
                }
              >
                <div className="flex items-center text-sm font-semibold transition-all xl:text-base gap-x-2 hover:text-gray-400">
                  {link.label}
                </div>
              </div>
            );
          })}
          <div className="flex items-center gap-5 px-4 ">
            {userData ? (
              <ProfileButton
                userData={userData}
                logout={() => {
                  logout();
                }}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              <>
                <div
                  onClick={() => {
                    scrollToTop();
                    setSelectedPage('login');
                  }}
                  className={
                    selectedPage === 'login'
                      ? `flex transition-all text-[#128FC8] cursor-pointer`
                      : `flex transition-all text-[#5F5F5F] cursor-pointer`
                  }
                >
                  <div className="flex items-center text-base font-semibold uppercase transition-all gap-x-2 hover:text-gray-400">
                    Login
                  </div>
                </div>
                <Button
                  label="SignUp"
                  dark
                  onClickHandle={() => {
                    scrollToTop();
                    setSelectedPage('signup');
                  }}
                />
              </>
            )}

            {/* <ThemeSwitcher /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
