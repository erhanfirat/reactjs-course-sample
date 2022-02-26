import { toast } from 'react-toastify';

var fullNameVar;

function fullNameLonger(name, surname) {
    fullNameVar = `${name} ${surname}`;
    return fullNameVar;
}

const fullNameLong = (name, surname) => {
    return `${name} ${surname}`;
}

const fullName = (name, surname) => `${name} ${surname}`;


console.log("fullName > ", fullName("Ali", "Baş"));
console.log("fullNameVar > ", fullNameVar);



function increaseOne(count) {
    return count + 1;
}


const TOAST_TPYES = Object.freeze({
    WARNING: "warn",
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info"
});

const toaster = (message, type = TOAST_TPYES.INFO) => {
    toast[type](message, {
        position: "bottom-left",
        autoClose: 2000,
    });
}


export { fullName, increaseOne, TOAST_TPYES, toaster };
