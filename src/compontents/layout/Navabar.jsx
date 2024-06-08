import React, { useState, useEffect } from 'react';

export const Navabar = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2024-06-20T00:00:00"); 
        const now = new Date();
        const difference = targetDate - now;
        
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
            };
        }
        
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="sticky-header">
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-double-up"></i>
            </a>

            <div className="main-wrapper" id="main-wrapper">
                <section className="coming-soon sec-pad sec-mar text-center">
                    <div className="container">
                        <div className="coming-soon-block">
                            <div className="coming-soon-content">
                               
                                <h2>COMMING SOON</h2>
                                <ul className="timer countdown">
                                    <li>{timeLeft.d}<small>ngày</small></li>
                                    <li>{timeLeft.h}<small>giờ</small></li>
                                    <li>{timeLeft.m}<small>phút</small></li>
                                    <li>{timeLeft.s}<small>giây</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

