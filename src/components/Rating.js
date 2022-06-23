import React from "react";
import { Button } from "react-bootstrap";


function Rating({ ratings }) {

    const showRatings = () => {
        return ratings.map((rating) => {
            return <div className="rate" key={rating.id}>{rating.rating}</div>
        })
    }

    return <>
        <div className="comments_cheese">
            Previous Ratings:
            {showRatings()}
        </div>
        <div className='rating_form'>
            <form className='add_comment'>
                <label className='rate_label form-label'>
                Rate Your Date:
                </label>
                <input className="comment_text form-control" type="number" max="5" min="-5" />
                <Button className="comment_button">Add Rating</Button>
            </form>
        </div>
    </>

}

export default Rating;