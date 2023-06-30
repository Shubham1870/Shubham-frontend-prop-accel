import React, { useState } from 'react';
import './review.css';
import icon from "../../images/6.jpg"
import Footer from '../Footer/footer';



const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardCount = 3; // Adjust the card count as per your requirement

    const handleNextClick = () => {
        if (currentIndex < cardCount - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <div id='main'>
                <div className="section-container">
                    <div className="section-one">
                        <h1 className="section-title">Reviews From Customers</h1>
                        <h5 className="section-subtitle">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</h5>
                    </div>

                    <div className="section-two">

                        <div className="card-container">
                            {[...Array(cardCount)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`card-11 ${currentIndex === index ? 'active' : ''}`}
                                >
                                    <div>
                                        <div id='card-detail'>
                                            <div id='image-icon'> <img src={icon} /></div>
                                            <div id='name'><h4>Lola Smith</h4>
                                                <h4 id='company'>Microsoft</h4>
                                                <div id="star-rating">
                                                    <span class="star">&#9733;</span>
                                                    <span class="star">&#9733;</span>
                                                    <span class="star">&#9733;</span>
                                                    <span class="star">&#9733;</span>
                                                    <span class="star">&#9733;</span>
                                                </div>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div id='para'>
                                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                        <button className="next-button" onClick={handleNextClick}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="pagination">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

            </div>
         
        </>
    );
};

export default Review;
