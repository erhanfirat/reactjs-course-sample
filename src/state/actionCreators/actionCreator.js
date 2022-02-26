
export const addNewStudentAction = (student) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            student: student
        })
    }
};


export const bulkInsertStudentsAction = (students) => {
    return (dispatch) => {
        dispatch({
            type: "bulkInsert",
            students
        })
    }
};

export const deleteStudentAction = (studentNo) => {
    return (dispatch) => {
        dispatch({
            type: "delete",
            student: { no: studentNo }
        })
    }
};

export const resetStudentsAction = () => {
    return (dispatch) => {
        dispatch({
            type: "reset"
        })
    }
};
