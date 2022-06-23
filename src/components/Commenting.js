import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Commenting({ cheese }) {
    const [newComment, setNewComment] = useState({});

    function handleNewComment(e) {
        e.preventDefault()
        const addedComment = {
            comment_text: newComment.comment
        }

        fetch(`http://localhost:9292/cheese/${cheese.id}/comment`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(addedComment)
        })
    }

    function handleInputChange (e) {
        setNewComment({...newComment, [e.target.name]: e.target.value})
    }

    const showComments = () => {
        return cheese.comments.map((comment) => {
            return <div className="comment" key={comment.id}>{comment.comment_text}</div>
        })
    }

    return <>
        <div className="comments_cheese">
            Previous Comments:
            {showComments()}
        </div>
        <div className='comment_form'>
            <form className='add_comment'>
                <label className='comments_label form-label'>
                    Comment:
                </label>
                <textarea className="comment_text form-control" name="comment" onChange={handleInputChange} />
                <Button className="comment_button" onClick={handleNewComment}>Add Comment</Button>
            </form>
        </div>
    </>
}

export default Commenting;