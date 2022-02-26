import axios from 'axios';

const BASE_URL = "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api";

export const getTasksBasic = () => {
    axios
        .get(`${BASE_URL}/tasks`)
        .then(res => {
            console.log("tasks get > ", res);
        });
};



export const postTaskBasic = (task) => {
    axios
        .post(`${BASE_URL}/tasks`, task)
        .then(res => {
            console.log("task post > ", res);
        })
}



export const getStudentsBasic = () => {
    axios
        .get(`${BASE_URL}/students`)
        .then(res => {
            console.log("students get > ", res);
        });
};


export const postStudentBasic = (student) => {
    axios
        .post(`${BASE_URL}/students`, student)
        .then(res => {
            console.log("student post > ", res);
        })
}



export const putTaskBasic = (task) => {
    axios
        .put(`https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks/${task.id}`, task)
        .then(res => {
            console.log("task put > ", res);
        })
}

export const deleteTaskBasic = (taskId) => {
    axios
        .delete(`https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks/${taskId}`)
        .then(res => {
            console.log("task delete > ", res);
        })
}
