import Header from './components/Layout/Header';
import { useEffect, useState } from 'react';
import { ModeProvider } from './ModeContext';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { PageNumProvider } from 'PageNumContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from 'api';
import { useUserData } from './UserDataContext';
import TwoFactorAuth from 'pages/TwoFactorAuth';
import SetPWD from 'pages/SignUp/SetPWD';
import { useTranslation } from 'react-i18next';
import useTranslationWithStorage from 'hooks/useTranslationWithStorage';


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// ✅ globally default to 30 seconds
			staleTime: 100000 * 30,
			retry: false,
			cacheTime: 1000000,
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			refetchInterval: 30000, // Set to 30 seconds
		},
	},
});

function App() {
	const { changeLanguageAndStore } = useTranslationWithStorage();

	useEffect(() => {
		console.log(changeLanguageAndStore, "_+_+_+")
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			changeLanguageAndStore(storedLanguage);
		} else {
			changeLanguageAndStore('en');
		}
	}, []);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// const [userData, setUserData] = useState(null)
	const location = useLocation();
	const handleResize = () => {
		if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
	};
	const [selectedPage, setSelectedPage] = useState('login');
	const notShowingHeader = ['login', 'signup', '2fa', 'pwd'];
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};
	const { setUserData } = useUserData();

	const [email, setemail] = useState("")


	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};

	}, []);

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const page = urlParams.get('page');
		if (page === "login") setSelectedPage("login");
		if (page === "signup") setSelectedPage("signup")
	}, [])



	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const token = urlParams.get('token');
		console.log(token);
		if (token !== null) {
			localStorage.setItem('token', token);
			api.validateToken()
				.then((response) => {
					console.log(response.data?.user, "response.data?.user")
					console.log(response.data, "response.data")
					setUserData({ ...response.data?.user, wallet: response.data?.wallet });
				})
				.catch((error) => {
					console.error(error.response.data.message);
					navigate('/');
				});
		}

	}, [location.search, navigate, setUserData]);


	const Page = () => {
		switch (selectedPage) {
			case 'dashboard':
				return <Dashboard changeLanguage={changeLanguage} />;
			case 'login':
				return <Login setSelectedPage={setSelectedPage} />;
			case 'signup':
				return <SignUp setSelectedPage={setSelectedPage} email={email} setemail={setemail} />;
			case '2fa':
				return <TwoFactorAuth setSelectedPage={setSelectedPage} />;
			case 'pwd':
				return <SetPWD setSelectedPage={setSelectedPage} email={email} />;
			default:
				return <></>;
		}
	};


	return (
		<QueryClientProvider client={queryClient}>
			<ModeProvider>
				<ToastContainer />
				<PageNumProvider>
					<div className="App dark">
						{notShowingHeader.includes(selectedPage) ? null : (
							<Header
								setSelectedPage={setSelectedPage}
								selectedPage={selectedPage}
								isMobileMenuOpen={isMobileMenuOpen}
								setIsMobileMenuOpen={setIsMobileMenuOpen}
							/>
						)}

						{!isMobileMenuOpen ? (
							<>
								{Page()}
							</>
						) : null}
					</div>
				</PageNumProvider>
			</ModeProvider>
		</QueryClientProvider>
	);
}

export default App;
