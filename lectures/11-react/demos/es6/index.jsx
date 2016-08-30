function MyComponent(props) {
    return (<div>{props.name}</div>);
}

const MyComponent = ({name}) => (
    <div>{name}</div>
);



const Boom = React.createClass({
    displayName: 'Boom',
    getInitialState: function () {
        return {
            text: 'Hello'
        };
    },
    onBoom: function () {
        this.setState({
            text: 'boom'
        });
    },
    render: function () {
        return (
            <div>
                <button onClick={this.onBoom.bind(this)}>Boom!</button>
                {this.state.text}
            </div>
        );
    }
});

class Boom extends React.Component {
    state = {
        text: 'Hello'
    };
    onBoom = () => {
        this.setState({
            text: 'boom'
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.onBoom}>Boom!</button>
                {this.state.text}
            </div>
        );
    }
}
