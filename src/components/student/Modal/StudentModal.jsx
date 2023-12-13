import React from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const StudentModal = (props) => {
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
              <Form.Control
                type="text"
                name="first_name"
                placeholder="Enter First Name"
                autoFocus
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.student.first_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Enter Last Name"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.student.last_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.student.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter Phone"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.student.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  props.onChangeHandler(e);
                }}
                value={props.student.password}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.cancelHandler} className="me-3">
            cancel
          </Button>
          <Button variant="success" onClick={props.edit?(props.handleEdit):(props.addStudent)}>
            {props.title}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentModal;