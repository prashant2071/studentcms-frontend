import React from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const StudenCourseModal = (props) => {
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton onHide={props.cancelHandler}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Student Name</option>
                <option value="1">One</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Course name</option>
                <option value="1">One</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={props.cancelHandler}
            className="me-3"
          >
            cancel
          </Button>
          <Button
            variant="success"
            onClick={props.edit ? props.handleEdit : props.addStudent}
          >
            {props.title}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudenCourseModal;
