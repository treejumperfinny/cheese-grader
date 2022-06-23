import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Comment from "./Comment";

function Commenting({ cheese }) {
    const [comments, setComments] = useState(cheese.comments)
    const [newComment, setNewComment] = useState({})

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
        .then((resp) => resp.json())
        .then((newComment) => setComments([...comments, newComment]))
    }

    function handleDeleteClick(id) {
        fetch(`http://localhost:9292/comment/${id}`, {
            method: "DELETE",
        })
            .then(() => removeComment(id));
    }

    function removeComment(comment_id) {
        setComments([...comments.filter((comment) => comment.id !== comment_id)])
    }

    function handleEditComment(commentId, newCommentText) {
        const editedComment = {
            comment_text: newCommentText
        }

        fetch(`http://localhost:9292/comment/${commentId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(editedComment)
        })
            .then(() => {
                let allComments = [...comments]
                allComments.find((comment) => comment.id = commentId).comment_text = newCommentText
                setComments(allComments)
            })
    }


    function handleInputChange(e) {
        setNewComment({ ...newComment, [e.target.name]: e.target.value })
    }

    const showComments = () => {
        return comments.map((comment) => {
            return <Comment comment={comment} onDelete={handleDeleteClick} onCommentSave={handleEditComment} />
        })
    }

    return <>
        <div className="comments_cheese">
            <h2>Previous Comments</h2>
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