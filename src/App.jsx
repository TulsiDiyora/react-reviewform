import React, { useState } from 'react';
import './App.css';
import StarRating from './component/Post/StarRating.jsx'; 

const Form = () => {
    const [form, setForm] = useState({
        username: '',
        revieww: '',
        rating: '',
    });

    const [reviews, setReviews] = useState([]);

    const handlechange = (e) => {
        console.log(e.target.value);

        let name = e.target.name;
        let value = e.target.value;

        setForm({...form, [name]: value});
        
    }

    const handleRatingChange = (newRating) => {
        setForm({ ...form, rating: newRating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.username.trim() && form.revieww.trim() && form.rating) {
            setReviews([...reviews, form]);
            setForm({
                username: '',
                revieww: '',
                rating: ''
            });
        } 
    };

    return(
        <div className="form">
            <h1 className='title'>Send Your Review</h1>
            <form onSubmit={handleSubmit} className="review-form">
               <div>
               <label>UserName : </label><br />
               <input type="text" placeholder='Enter your Username' name='username' value={form.username} onChange={handlechange} required/><br />
               </div>
               <div>
               <label>Review : </label><br />
               <textarea name="revieww" cols="30" rows="5" placeholder="Your opinion..." value={form.revieww} onChange={handlechange} required></textarea><br />
               </div>
               <div>
                  <label>Rating:</label>
                  <StarRating rating={form.rating} setRating={handleRatingChange} />
                </div>
               <button type="submit" className='btn'>Submit</button>
            </form>


             <h2>Reviews</h2>
      <div className="reviews-list">
                 {
               reviews.map((review, index) => (
                   <div key={index} className="review">
                     <h3>
                      Username : {review.username}
                     </h3>
                   <h4>
                      Comment : {review.revieww}
                     </h4>
                   <h4>
                       Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}
                      </h4>
                 </div>
             ))
               }
             </div>

        </div>
    )
};

export default Form;