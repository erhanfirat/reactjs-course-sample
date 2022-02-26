
import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, increment: 5 };
    }
    timerRef = null;
    setTimer() {
        console.log("setTimer called!");
        const { time } = this.props;

        this.timerRef = setInterval(() => {
            const newCounter = this.state.counter + this.state.increment;
            this.setState({ counter: newCounter });
        }, time);
    }
    componentDidMount() {
        console.log("Counter Mounted!");
        this.setTimer();
    }
    componentDidUpdate() {
        console.log("Counter Updated!");
    }
    componentWillUnmount() {
        console.log("Counter Will Unmount!");
        console.log("clearInterval called!");
        clearInterval(this.timerRef);
        // intervals clear
        // event listener clear
    }

    render() {
        return <div>
            counter: {this.state.counter}
        </div>
    }
}

export default CounterClass;