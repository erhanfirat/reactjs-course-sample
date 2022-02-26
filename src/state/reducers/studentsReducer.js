import { toaster, TOAST_TPYES } from '../../utils';


const checkAndAddStudent = (students, newStudent) => {
    let exist = false;
    students?.map(student => {
        if (student.no === newStudent.no) {
            exist = true;
        }
    });
    if (!exist) {
        students.push(newStudent);
        students.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    else {
        toaster("Öğrenci önceden eklenmiştir!", TOAST_TPYES.ERROR);
    }
    return students;
}

export const studentsReducer = (state = { students: [], count: 0 }, action) => {
    const { students } = state;
    let newStudents = [...students];

    switch (action.type) {
        case "add":
            newStudents = checkAndAddStudent(newStudents, action.student);

            return { students: newStudents, count: newStudents.length };
        case "bulkInsert":
            action.students.map(student => {
                newStudents = checkAndAddStudent(newStudents, student);
            });
            return { students: newStudents, count: newStudents.length };
        case "delete":
            for (let i = 0; i < students.length; i++) {
                if (students[i].no === action.student.no) {
                    const studentName = students[i].name;
                    students.splice(i, 1);
                    toaster(`${studentName} başarılı bir şekilde silinmiştir`, "success");
                    return { students, count: students.length };
                }
            }
            return { students, count: students.length };
        case "reset":
            return { students: [], count: 0 }
        default:
            return state;
    }
}

