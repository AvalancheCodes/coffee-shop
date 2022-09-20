import React from 'react';
import './main-hero.scss';

const MainHero = (props) => {
    return (
        <section className="pt-md-11 bg-theme-dark pt-5">
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">

                        <img src="/main-hero.png"
                             class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..."
                             data-aos="fade-up" data-aos-delay="100" />

                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
                        <h1 className="display-5 text-light text-center text-md-start">
                            Welcome to <span className="text-primary">Cofflix</span><br />
                           social, drink, watch.
                        </h1>

                        <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                            Have a moment to spare? Come visit us and experience how cup of coffee
                            and a good movie can transform your day!
                        </p>

                        <div className="text-center text-md-start">
                            <a href="overview.html" className="btn btn-primary shadow lift me-1">
                                View our menu.. <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
            <div className=" bg-theme-dark  bottom-decor" />
        </section>
    );
};

export default MainHero;