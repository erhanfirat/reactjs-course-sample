import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const CounterFunction = ({ increment = 1, time = 500, className }) => { // increment
    const [counter, setCounter] = useState(0); // return [state, setter]

    const timer = () => {
        setCounter(counter + increment);
    };

    useEffect(() => {
        const counterInterval = setInterval(timer, time);
        return () => {
            clearInterval(counterInterval);
        }
    });

    useEffect(() => {
        // console.log("Counter is updated!");
    }, [counter]);

    useEffect(() => {
        console.log("1 increment value is updated to ", increment);

        return () => {
            console.log("2 Increment value is about to change from ", increment);
        }
    }, [increment]);

    const resetCounter = (e) => {
        setCounter(0);
        console.log("click event > ", e);
    }

    return <div className={className}>
        counter: {counter}
        <Button onClick={() => setCounter(counter + increment)} className="ms-1">
            + {increment}
        </Button>
        <Button onClick={() => setCounter(0)} className="ms-1">Reset</Button>
        <Button onClick={resetCounter} className="ms-1">Reset by Ref</Button>
    </div>
}

export default CounterFunction;