import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Commenting({ cheese }) {
    const [newComment, setNewComment] = useState({});
    const [newEditedComment, setNewEditedComment] = useState({
        comment_text: ""
    })

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

    function handleDeleteClick() {
        fetch(`http://localhost:9292/comment/${id}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => onCommentDelete(comment));
    }

    function handleEditComment(e) {
        e.preventDefault()
        const editedComment = {
            comment_text: newEditedComment.comment
        }

        fetch(`http://localhost:9292/comment/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(newEditedComment)
        })
            .then((res) => res.json())
            .then((newEditedComment) => setNewEditedComment(newEditedComment))
    }


    function handleInputChange(e) {
        setNewComment({ ...newComment, [e.target.name]: e.target.value })
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
                <Button className="delete_comment" onClick={handleDeleteClick}>X</Button>
                <Button className="edit_comment" onClick={handleEditComment}>Plz change me</Button>
            </form>
        </div>
    </>
}

export default Commenting;