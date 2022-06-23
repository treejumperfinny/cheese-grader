import React, {useState} from 'react'
import { Button, ButtonGroup, Col, Form, InputGroup, Row } from "react-bootstrap"
import { PencilFill, TrashFill } from 'react-bootstrap-icons'


function Comment({ comment, onDelete, onCommentSave }) {
    const [editing, setEditing] = useState(false)
    const [thisComment, setThisComment] = useState(comment.comment_text || "")

    const flipEdit = () => setEditing(!editing)
    const handleEditChange = (e) => setThisComment(e.target.value)
    
    function handleCommentSave() {
        flipEdit()
        onCommentSave(comment.id, thisComment)
    }

    return (
        <div className="comment" key={thisComment.id}>
            <Row>
                { editing ? 
                    <Col>
                        <InputGroup>
                            <Form.Control value={thisComment} onChange={handleEditChange} />
                            <Button onClick={handleCommentSave}>Save</Button>
                        </InputGroup>
                    </Col>
                :
                    <Col>
                        {comment.comment_text}
                    </Col>
                }
                
                <Col sm={2}>
                    <ButtonGroup>
                        <Button variant="outline-primary" onClick={() => onDelete(comment.id)} className="delete_comment"><TrashFill /></Button>
                        <Button variant="outline-primary" onClick={flipEdit}><PencilFill /></Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Comment