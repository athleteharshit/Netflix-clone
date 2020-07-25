import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 text-center bg-light mt-5">
                <p>@ {date} Athleteharshit. All right Reserved</p>
            </footer>
        </>
    );
}

export default Footer;
