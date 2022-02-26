import { TOAST_TPYES, toaster } from "../../../utils/index";

const checkAndAddStudent = (students, newStudent) => {
    let exist = false;
    students?.map(student => {
        if (student.no === newStudent.no) {
            exist = true;
        }
    });
    if (!exist) {
        students.push(newStudent);
        toaster("Öğrenci başarılı  bir şekilde eklenmiştir!", TOAST_TPYES.SUCCESS);
        students.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    else {
        toaster("Öğrenci önceden eklenmiştir!", TOAST_TPYES.ERROR);
    }
    return students;
}

const studentsReducer = (state, action) => {
    const { students } = state;
    let newStudents = [...students];

    switch (action.type) {
        case "add":
            newStudents = checkAndAddStudent(newStudents, action.student);

            return { students: newStudents, count: newStudents.length };
        case "bulkInsert":
            action.students.map(student => {
                newStudents = checkAndAddStudent(newStudents, student);
            })
            return { students: newStudents, count: students.length };
        case "delete":
            for (let i = 0; i < students.length; i++) {
                if (students[i].no === action.student.no) {
                    students.splice(i, 1);
                    return { students, count: students.length };
                }
            }
            return { students, count: students.length };
        default:
            return state;
    }
}


const studentListInitial = { students: [], count: 0 };


const addNewStudentAction = (student) => {
    return {
        type: "add",
        student
    }
}

const bulkInsertStudentAction = (students) => {
    return {
        type: "bulkInsert",
        students
    }
}

const deleteStudentAction = (studentNo) => {
    return {
        type: "delete",
        student: {
            no: studentNo
        }
    }
}


export { studentsReducer, addNewStudentAction, bulkInsertStudentAction, deleteStudentAction, studentListInitial };