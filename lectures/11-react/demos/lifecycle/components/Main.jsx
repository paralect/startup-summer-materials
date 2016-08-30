import React from 'react';
const h = React.createElement;

class Child extends React.Component {
    name = `Child ${this.props.n}`;
    componentWillMount() {
        console.log(this.name, 'componentWillMount');
    }
    componentDidMount() {
        console.log(this.name, 'componentDidMount');
    }
    componentWillReceiveProps() {
        console.log(this.name, 'componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log(this.name, 'shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log(this.name, 'componentWillUpdate');
    }
    componentDidUpdate() {
        console.log(this.name, 'componentDidUpdate');
    }
    componentWillUnmount() {
        console.log(this.name, 'componentWillUnmount');
    }
    render() {
        console.log(this.name, 'render');
        return h('div', null, this.name);
    }
}

class Middle extends React.Component {
    state = {
        value: 1
    };
    name = `Middle ${this.props.n}`;
    componentWillMount() {
        console.log(this.name, 'componentWillMount');
    }
    componentDidMount() {
        console.log(this.name, 'componentDidMount');
    }
    componentWillReceiveProps() {
        console.log(this.name, 'componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log(this.name, 'shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log(this.name, 'componentWillUpdate');
    }
    componentDidUpdate() {
        console.log(this.name, 'componentDidUpdate');
    }
    componentWillUnmount() {
        console.log(this.name, 'componentWillUnmount');
    }

    render() {
        console.log(this.name, 'render');
        return h('div', null,
            h(Child, {n: this.props.n * 2}),
            this.state.value < 3 && h(Child, {n: this.props.n * 2 + 1}),
            h('button', {
                    onClick: e => this.setState({
                        value: this.state.value + 1
                    })
                },
                'update'
            )
        );
    }
}

class Parent extends React.Component {
    name = 'Parent';
    componentWillMount() {
        console.log(this.name, 'componentWillMount');
    }
    componentDidMount() {
        console.log(this.name, 'componentDidMount');
    }
    componentWillReceiveProps() {
        console.log(this.name, 'componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log(this.name, 'shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log(this.name, 'componentWillUpdate');
    }
    componentDidUpdate() {
        console.log(this.name, 'componentDidUpdate');
    }
    componentWillUnmount() {
        console.log(this.name, 'componentWillUnmount');
    }
    render() {
        console.log(this.name, 'render');
        return h('div', null,
            h(Middle, {n: 0}),
            h(Middle, {n: 1})
        );
    }
}

export default Parent;
