import React from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const CourseModal = (props) => {
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton onHide={props.cancelHandler}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="course_name"
                placeholder="Enter Course Name"
                autoFocus
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.course_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                placeholder="Enter Duration"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.duration}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course fee</Form.Label>
              <Form.Control
                type="text"
                name="course_fee"
                placeholder="Enter course fee"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.course_fee}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control
                type="text"
                name="instructor_name"
                placeholder="Enter instructorname"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.instructor_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Start date</Form.Label>
              <Form.Control
                type="text"
                name="start_date"
                placeholder="Enter Date"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.course.start_date}
              />
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
            onClick={props.edit ? props.handleEdit : props.addCourse}
          >
            {props.title}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseModal;
