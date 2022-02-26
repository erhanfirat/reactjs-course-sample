import { REQ_TYPES } from './api'

export const getTasks = {
    type: REQ_TYPES.GET,
    url: "tasks"
};

export const postTask = (payload) => ({
    type: REQ_TYPES.POST,
    url: "tasks",
    payload
});

export const putTask = (payload) => ({
    type: REQ_TYPES.PUT,
    url: `tasks/${payload.id}`,
    payload
});

export const deleteTask = (taskId) => ({
    type: REQ_TYPES.DELETE,
    url: `tasks/${taskId}`
});

export const buggyTask = (taskId) => ({
    type: REQ_TYPES.DELETE,
    url: `tasks-buggy-url/${taskId}`
});


export const getStudentsRequest = {
    type: REQ_TYPES.GET,
    url: "students"
};

export const deleteStudentRequest = (studentNo) => ({
    type: REQ_TYPES.DELETE,
    url: `students/${studentNo}`
});


export const addStudentRequest = (payload) => ({
    type: REQ_TYPES.POST,
    url: "students",
    payload
});

export const updateStudentRequest = (payload) => ({
    type: REQ_TYPES.PUT,
    url: `students/${payload.no}`,
    payload
});


