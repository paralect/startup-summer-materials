let i = 0;

const Impure = props =>
    h('div', null, i++);

h(Impure);
h(Impure);

const addOne = v => v + 1;

const MY_WIDTH = 100;

class MostlyPure extends React.Component {
    static contextTypes = {
        config: T.object
    };

    static propTypes = {
        children: T.node.isRequired
    };

    state = {
        value: 0
    };

    render() {
        return h(OtherComponent, {
                value: addOne(this.state.value),
                config: this.context.config,
                width: MY_WIDTH
            },
            this.props.children
        );
    }
}
