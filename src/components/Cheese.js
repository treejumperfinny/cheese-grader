import React from "react";
import { Button } from "react-bootstrap";
import Commenting from "./Commenting";
import Rating from "./Rating";
import { useEffect, useState } from "react"

function Cheese({ cheese }) {
    const [newCommentList, setCommentList] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/comments")
            .then((res) => res.json())
            .then((data) => setCommentList(data))
    })

    function deleteComment(id) {
        const updatedComments = newCommentList.filter((comment) => comment.id !== id);
        setCommentList(updatedComments);
    }

    function editCommentList(id) {
        const editedComments = newCommentList.filter((comment) => comment.id !== id);
        setCommentList(editedComments);
    }

    return (
        <div>
            <h3 className="cheese_name">Name: </h3>
            <div className="name_chz">{cheese.name}</div>
            <img src={cheese.image_url} alt="placeholder" className="past" />
            <h5>Type: </h5>{cheese.category}
            <h5>Age:</h5> {cheese.age}
            <h5>Location:</h5> {cheese.location}
            <h5>Bio:</h5>
            <p> {cheese.bio} </p>
            <div className="chz_comments">
                <Commenting cheese={cheese} onCommentDelete={deleteComment} onEditComment={editCommentList} />
            </div>
            <div className="chz_rate">
                <Rating ratings={cheese.ratings} />
            </div>
            <p>If you want to forget this fromage click the button below and it will be but a faint memory.</p>

            <Button>Expell Cheese From Memory</Button>

        </div>
    );
}

export default Cheese;
