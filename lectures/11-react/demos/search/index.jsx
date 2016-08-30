const Search = ({value, onChange}) => (
    <input
        onChange={onChange}
        value={value}
    />
);

const List = ({values, filter, onClick}) => (
    <div>{
        values
            .filter(v => v.indexOf(filter) !== -1)
            .map(v => (<div key={v}><button onClick={e => onClick(e, v)}>{v}</button></div>))
    }</div>
);

const items = [
    'foo',
    'bar',
    'item 1',
    'item 2'
];

class Main extends React.Component {
    state = {
        search: ''
    };

    onSearchChange = e => {
        this.setState({
            search: e.target.value
        });
    };

    onItemSelect = (e, v) => {
        this.setState({
            search: v
        });
    };

    render() {
        return (
            <div>
                <Search
                    value={this.props.search}
                    onChange={this.onSearchChange}/>
                <List
                    values={items}
                    filter={this.state.search}
                    onChange={this.onItemSelect}/>
            </div>
        );
    }
}
