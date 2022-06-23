import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function NewCheese() {
    return (
        <>
        <div className="new_intro new" id="new">
        <h1>Add A New Cheese</h1>
        <img src={require("./images/add_new.jpg")} alt="placeholder" className="newb_cheese" />
        <p>Add your own!</p>
        <p> Use the form below to add a new enounter you've had with a delightful or devious new cheesy friend or fiend! This way you can catalog all your memories.</p>
        </div>
        <div className="new_form">
        <form className="add_cheese">
            <label className="add_label form-label">
                Name:
            </label>
            <input className="add_input form-control" name="name" />
            <label className="add_label form-label">
                Type:
            </label>
            <input className="add_input form-control" name="type" />
            <label className="add_label form-label">
                Age:
            </label>
            <input className="add_input form-control" name="age"  type="number" />
            <label className="add_label form-label">
                Location:
            </label>
            <input className="add_input form-control" name="locale" />
            <label className="add_label form-label">
                Bio:
            </label>
            <textarea className="add_input form-control" name="bio" />
            <label className="add_label form-label">
                Image:
            </label>
            <input className="add_input form-control" name="imgurl" />
            <Button className="add_button">Submit New Cheese</Button>
        </form>
        </div>
        
        </>
    )
}

export default NewCheese;