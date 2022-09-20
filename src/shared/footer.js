import React from 'react';

const socialLinks = [
    {  name: 'instagram',  icon: 'instagram.svg',  link: 'https://www.instagram.com' },
    {  name: 'facebook',  icon: 'facebook.svg',  link: 'https://www.facebook.com' },
    {  name: 'twitter',  icon: 'twitter.svg',  link: 'https://www.twitter.com' },
    {  name: 'pinterest',  icon: 'pinterest.svg',  link: 'https://www.pinterest.com' },
    ]

const Footer = () => {
    return (
        <footer className={"py-8 py-md-11 bg-theme-dark"}>
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="/coffee-logo.svg" alt="..."
                             className="footer-brand img-fluid mb-2" width={"40"} />
                            <p className="text-gray-700 mb-2">
                                A better way to drink coffee.
                            </p>
                            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                                {socialLinks.map((socialLink, index) => (
                                    <li className="list-inline-item list-social-item me-3" key={index}>
                                        <a href={socialLink.link} className="text-decoration-none">
                                            <img src={`/social/${socialLink.icon}`}
                                                 alt={socialLink.name} className="list-social-icon" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;