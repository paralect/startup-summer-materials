import React from 'react';

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

class Counter extends React.Component {
    state = {
        value: 0
    };

    onInc = () => {
        this.setState({
            value: this.state.value + 1
        });
    };

    onDec = () => {
        this.setState({
            value: this.state.value - 1
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onInc}>+</Button>
                <Button onClick={this.onDec}>-</Button>
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default Counter;
