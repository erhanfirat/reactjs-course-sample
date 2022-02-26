import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doRequest } from '../../../api/api';
import { actionCreator } from '../../../state';
import { getStudentsRequest, deleteStudentRequest } from './../../../api/endpoints';
import { useNavigate } from 'react-router-dom';

const students = [
    { no: 1, name: "Emrah" },
    { no: 2, name: "Ali" },
    { no: 3, name: "Mustafa" },
    { no: 4, name: "Zehra" },
    { no: 5, name: "Hasan" },
    { no: 6, name: "Pelin" },
    { no: 7, name: "Tülin" },
    { no: 8, name: "Murat" },
    { no: 9, name: "Tarkan" }
];

const StudentList = () => {
    const studentsState = useSelector(state => state.students);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { addNewStudentAction,
        bulkInsertStudentsAction,
        deleteStudentAction,
        resetStudentsAction } = bindActionCreators(actionCreator, dispatch);


    const addStudent = () => {
        addNewStudentAction(students[Math.floor(Math.random() * 9)]);
    }

    const loadStudents = () => {
        doRequest(getStudentsRequest)
            .then(res => {
                resetStudentsAction();
                bulkInsertStudentsAction(res);
            });
    }

    const deleteStudent = (studentNo) => {
        doRequest(deleteStudentRequest(studentNo))
            .then(res => {
                deleteStudentAction(studentNo);
            })
            .catch(err => {
                loadStudents();
            });
    }

    const editStudent = (studentNo) => {
        navigate(`/student-form/${studentNo}`);
    }

    const goToStudentDeatils = (studentNo) => {
        //navigate(`/student/${studentNo}`);
    }

    return <div className='row'>
        <div className='col-12'>
            <Button onClick={() => addStudent()} className="me-2">Add Student</Button>
            <Button onClick={() => loadStudents()}>Load Students</Button>
        </div>
        <div className={'col-12'}>
            <div className='row pt-3'>
                {studentsState.students.map(student => (
                    <div className='col-sm-4 col-md-4 col-lg-3 pb-4' key={student.no}>
                        <div className="card" style={{ height: "100%" }}>
                            <img src={student.img} className="card-img-top" alt={student.name} />
                            <div className="card-body">
                                <h5 className="card-title">{student.name}</h5>
                                <p className="card-text">{student.no}</p>
                                <div>
                                    <Button onClick={() => deleteStudent(student.no)} variant="danger" className='btn-sm'>
                                        Delete
                                    </Button>
                                    <Button onClick={() => editStudent(student.no)} className='btn-sm ms-1'>
                                        Edit
                                    </Button>
                                    <Button onClick={() => goToStudentDeatils(student.no)} className='btn-sm ms-1'>
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    </div >
}


export default StudentList;