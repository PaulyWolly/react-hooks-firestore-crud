import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";
import { useHistory } from "react-router-dom";

const AddTutorial = () => {
  const initialTutorialState = {
    title: "",
    description: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const history = useHistory();

  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          history.push("/tutorials")
        }, 2000)

      })
      .catch(e => {
        console.log(e);
      });
  };

  // const newTutorial = () => {
  //   setTutorial(initialTutorialState);
  //   setSubmitted(false);
  // };




  return (

    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          {/* <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button> */}
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              className="md-textarea form-control"
              rows="3"
              name="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
            >
            </textarea>

          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
