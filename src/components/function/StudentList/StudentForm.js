import { useState, useEffect } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import { doRequest } from '../../../api/api';
import { addStudentRequest, getStudentsRequest } from '../../../api/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../../state';
import { updateStudentRequest } from './../../../api/endpoints';

const studentInitial = {
    no: "",
    name: "",
    img: ""
};

const StudentForm = ({ id }) => {
    const [student, setStudent] = useState(studentInitial);
    const dispatch = useDispatch();
    const { bulkInsertStudentsAction,
        resetStudentsAction } = bindActionCreators(actionCreator, dispatch);
    const studentsState = useSelector(state => state.students);

    useEffect(() => {
        studentsState.students?.forEach(stu => {
            if (stu.no == id) {
                setStudent(stu);
            }
        });
    }, [id, studentsState]);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // Eğer student önceden kayıtlı ise update eder, değilse create eder
        const studentSaveRequest = student.no ? updateStudentRequest : addStudentRequest;
        // Eğer student create ediliyorsa createdAt alanı doldurulur
        if (student.no) student.createdAt = new Date();

        doRequest(studentSaveRequest({ ...student }))
            .then(res => {
                setStudent(studentInitial);
                doRequest(getStudentsRequest)
                    .then(res => {
                        resetStudentsAction();
                        bulkInsertStudentsAction(res);
                    });
            });
    }

    return <div className='col-12'>
        <Card style={{}}>
            <Card.Body>
                <div className="row">
                    <div className="col-5">
                        <img src={student.img} style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-7">
                        <Card.Title>{student.no ? student.name : "Add new student"}</Card.Title>
                        <Form onSubmit={formSubmitHandler}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Student No:</Form.Label>
                                <Form.Control type="number"
                                    placeholder="Student No"
                                    value={student.no}
                                    onChange={(e) => setStudent({ ...student, no: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Student Name:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Student Name"
                                    value={student.name}
                                    onChange={(e) => setStudent({ ...student, name: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Student Image URL:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Student Image URL"
                                    value={student.img}
                                    onChange={(e) => setStudent({ ...student, img: e.target.value })} />
                            </Form.Group>

                            <div className="mt-2">
                                <Button type="submit" disabled={!(student.name && student.no && student.img)} className="me-2">Save</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </Card.Body>
        </Card>
    </div>
}

export default StudentForm;