import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      author,
      comment,
      rating
    };
    onAddReview(newReview);
    setAuthor('');
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
                        <div class="textarea">
                            <input type="text" placeholder="Your Name" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div class="text_1">
                            <textarea cols="30" rows="5" placeholder="Write your review..." value={comment} onChange={(e) => setComment(e.target.value)} /><br/>
                        </div>
                        <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} /><br />
                        <div class="bt_1">
                            <button type="submit">Post</button>
                        </div>
                </form>
  );
};

export default ReviewForm;