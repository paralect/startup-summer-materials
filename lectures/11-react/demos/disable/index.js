class JqGrid extends React.Component {
    componentDidMount() {
        myNativeJsGrid.init({
            domElem: this.getDOMNode(),
            data: this.props.rows,
            onRowRemove: row => this.props.onRowRemove(row)
        });
    }
    shouldComponentUpdate(props) {
        myNativeJsGrid.update({
            domElem: this.getDOMNode(),
            data: props.rows,
        });
        return false;
    }
    render() {
        return React.DOM.div();
    }
}
