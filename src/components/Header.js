import React from 'react';
import Logo from './download.png'

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><a href=''><img src={Logo} className='logo'/></a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Products</a></li>
                        <li><a href=''>For Teams</a></li>
                        <li><a href=''><input type='search'placeholder='Search'/></a></li>
                        <li><button className='login'><a href=''>Log in</a></button></li>
                        <li><button className='signUp'><a href=''>Sign Up</a></button></li>
                    </ul>
                </nav>
            </header>
        );
    };
}

export default Header;