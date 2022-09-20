import React from 'react';

const Spirit = () => {
    return (
        <section className={"pt-10 pt-md-12"}>
            <div className={"container"}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        <h2>
                            Our customers are our biggest fans.
                        </h2>
                        <p className="fs-lg text-muted mb-7 mb-md-9">
                            We are proud to have the best customers in the world.
                            Here are some of the  kind words they have to say about
                            <us className="">Coffix</us>
                        </p>
                        <img src="/spirit/in-spirit-1.png"
                             className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..."
                             data-aos="fade-up" data-aos-delay="100"/>
                    </div>
                </div>
            </div>
            <div className={"container pt-5"}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        <h2>
                            We can bring the spirit to you as well.
                        </h2>
                        <p className="fs-lg text-muted mb-7 mb-md-9">
                            Let us know if you want to have a spirit at your place. We will be happy to bring it to you. Our spirit is always ready to go.
                        </p>
                        <img src="/spirit/in-spirit-2.png"
                             className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..."
                             data-aos="fade-up" data-aos-delay="100"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spirit;