import '../header/Header.css';

const Header = ({ theme }) => {
    return (
        <header>
            <p>logo</p>
            <button>Current Theme:{theme}</button>
        </header>
    );
};

export default Header;