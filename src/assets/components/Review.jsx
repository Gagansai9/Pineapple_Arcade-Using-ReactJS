import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import AfterHeader from './AfterHeader';
import Footer from './Footer';

function Review() {
    const [reviews, setReviews] = useState([]);
    const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className='rev'>
      <AfterHeader />
      <center>
      <br />
      <h1>Reviews and Ratings</h1>
      <br />
      <div className='display_rev'><ReviewForm onAddReview={handleAddReview} /></div>
      <ReviewList reviews={reviews} />
      </center>
      <Footer />
    </div>
  );
}


export default Review
