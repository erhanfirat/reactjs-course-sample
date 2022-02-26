import { useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import StudentForm from './StudentForm';
import { studentsReducer, addNewStudentAction, studentListInitial, bulkInsertStudentAction, deleteStudentAction } from "./StudentListReducer";

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
    const [studentsState, studentsDispatch] = useReducer(studentsReducer, studentListInitial);
    const [showStudentForm, setShowStudentForm] = useState(false);

    const addStudent = () => {
        studentsDispatch(addNewStudentAction(students[Math.floor(Math.random() * 9)]));
    }

    const loadStudents = () => {
        studentsDispatch(bulkInsertStudentAction(students));
    }

    const deleteStudent = (studentNo) => {
        studentsDispatch(deleteStudentAction(studentNo));
    }

    const saveStudentHandler = (student) => {
        studentsDispatch(addNewStudentAction(student));
    }

    const closeStudentFormHandler = () => setShowStudentForm(false);

    return <div className='row'>
        <div className={showStudentForm ? 'col-6' : 'col-12'}>
            <p>Students Count: {studentsState.count}</p>
            <ul>
                {studentsState.students.map(student => <li key={student.no}>
                    {student.no} - {student.name}
                    <Button onClick={() => deleteStudent(student.no)} variant="danger">X</Button>
                </li>)}
            </ul>
        </div>
        {showStudentForm &&
            <StudentForm
                saveStudent={saveStudentHandler}
                closeStudentForm={closeStudentFormHandler} />}
        <div className='col-12'>
            {!showStudentForm && <Button onClick={() => setShowStudentForm(true)}>Create Student</Button>}
            <Button onClick={() => addStudent()} className="mx-2">Add Student</Button>
            <Button onClick={() => loadStudents()}>Load Students</Button>
        </div>
    </div>

}


export default StudentList;