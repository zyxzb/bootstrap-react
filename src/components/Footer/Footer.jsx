import React from 'react';

const Footer = () => {
    return (
        <footer
            id='footer'
            className='text-center bg-dark text-light py-5 mb-0 zyxzb footer'>
            <div className="container">
                <span>Copyright &copy; Your Website {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}

export default Footer;
