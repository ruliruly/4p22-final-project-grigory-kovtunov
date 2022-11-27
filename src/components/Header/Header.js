import './Header.css';
import { Link, } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
          <div class="header__logo"></div>
            <Link className='header__link' to={'contacts'}>Contacts</Link>
        </header>
    )
}

export default Header;