import logo from './../assets/logo.svg';

const Header = () => {
	return (
		<header className="h-16 bg-white border-b flex items-center justify-center flex-shrink-0">
			<img src={logo} width={120} alt="" />
		</header>
	);
}

export default Header;