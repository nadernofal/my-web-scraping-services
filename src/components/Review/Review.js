import React from 'react';
import './Review.css';

const Review = ({ review }) => {
  const rating = review.rating;
  const wholeStars = Math.floor(rating);
  const fractionalStar = rating - wholeStars;

  return (
    <div className="review">
      <h3 className="title">{review.title}</h3>
      <p className="description">
        <span className="reviewer">{review.reviewer}</span>
        {review.description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="rating">
        Rating: 
        {[...Array(wholeStars)].map((_, i) => (
          <span key={i} className="star" aria-label="Full star">
            &#x2605;
          </span>
        ))}
        {fractionalStar > 0 && (
          <span className="star partial" aria-label="Partial star">
            <svg width="18" height="18">
              <rect x="0" y="0" width="18" height="18" fill="#debe1a" rx="2" />
              <rect x="0" y="0" width={`${fractionalStar * 18}`} height="18" fill="#debe1a" rx="2" />
            </svg>
          </span>
        )}
        {[...Array(5 - wholeStars - (fractionalStar > 0 ? 1 : 0))].map((_, i) => (
          <span key={i} className="star" aria-label="Empty star">
            &#x2606;
          </span>
        ))}
        <span className="rating-label">{rating}/5</span>
      </p>
    </div>
  );
};

export default Review;