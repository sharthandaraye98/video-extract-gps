import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const AddVideo = () => {
  const [video, setVideo] = useState("");

  const addVideoHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("video", video);
    console.log("formData", formData);
    await axios.post("/api/gpsData/addVideo", formData);
  };

  return (
    <>
      <Container className="mt-5 p-2">
        <h1>Add Video</h1>
        <Form
          onSubmit={addVideoHandler}
          method="POST"
          encType="multipart/form-data"
        >
          <Form.Group controlId="fileName" className="mb-3">
            <Form.Control
              type="file"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
              size="md"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Upload Video
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddVideo;
