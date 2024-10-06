import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import reviewsData from './reviews.json';

const Reviews = () => {
  return (
    <section id="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviewsData.map((review) => (
          <li key={review.title}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
