import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const items = [
    {
        src: '/menu/menu-1.png',
        altText: 'morning mist',
        caption: 'morning mist',
        description: 'A great way to start the morning before work.',
        price: '$5.99'
    },
    {
        src: '/menu/menu-2.png',
        altText: 'Slide 2',
        caption: 'energizer',
        description:'Strong coffee to energize any meeting, even the most boring',
        price: '$8.99'
    },
    {
        src: '/menu/menu-3.png',
        altText: 'Slide 3',
        caption: 'dark side',
        description:'Darker than the darkest night, sweeter than the sweetest kiss.',
        price: '$9.99'
        }
    ]

const Menu = () => {
    return (
        <div className={"py-8 py-md-11 bg-light"}>
            <div className={"container"}>
                <div className="row">
                    <Carousel>
                        {items.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.altText}
                                />
                                <Carousel.Caption>
                                   <h1 className={"text-dark "}>{item.caption}</h1>
                                   <p className={"text-dark"}>{item.description}</p>
                                    <h3 className={"text-dark bold"}>{item.price}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                </div>
            </div>
            
        </div>
    );
};

export default Menu;