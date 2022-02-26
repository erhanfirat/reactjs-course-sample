import React from "react";

class GreetingsClass extends React.Component {
    render() {
        const { name } = this.props;
        return <h1>Merhaba {name ? name : 'Anonim'}</h1>;
    }
}

export default GreetingsClass;