const Button = props => (
    <button onClick={props.onClick}>
        {props.children}
    </button>
);

Button.propTypes = {
    onClick: T.func.isRequired,
    children: T.node.isRequired
};

class Button {
    static propTypes = {
        onClick: React.propTypes.func.isRequired,
        children: React.propTypes.node.isRequired
    };
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}
