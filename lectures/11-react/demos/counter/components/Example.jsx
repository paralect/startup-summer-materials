const PureComponent = props => (
    <View>...</View>
);

class PureComponent extends React.Component {
    render() {
        return (
            <View>...</View>
        );
    }
}

class ComponentWithState extends React.Component {
    state = {
        someValue: 1,
        anotherValue: ['foo', 'bar']
    };

    render() {
        return (
            <MyView>content...</MyView>
        );
    }
}

class ComponentWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someValue: 1,
            anotherValue: ['foo', 'bar']
        };
    }

    render() {
        return (
            <MyView>content...</MyView>
        );
    }
}
