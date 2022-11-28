import './Header.css';
import { Link, } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <Link className="header__link" to={'product'}>product</Link>
            <Link className="header__link" to={'contacts'}>Feed back</Link>
            <Link className="header__link" to={'/'}>Home</Link>
        </header>
    )
}

export default Header;