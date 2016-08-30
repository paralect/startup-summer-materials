import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Chance from 'chance';
const rand = Chance();
import './index.styl';

class Item extends React.Component {
    static propTypes = {
        callbacks: React.PropTypes.object.isRequired,
        item: React.PropTypes.shape({
            firstName: React.PropTypes.string.isRequired,
            lastName: React.PropTypes.string.isRequired,
            _id: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            activity: React.PropTypes.arrayOf(React.PropTypes.shape({
                time: React.PropTypes.number.isRequired,
                count: React.PropTypes.number.isRequired,
            })).isRequired
        }).isRequired
    };

    onInc = e => {
        this.props.callbacks.onEdit({
            ...this.props.item,
            counter: this.props.item.counter + 1
        });
    }

    render() {
        const sum = this.props.item.activity.reduce(({value}, {count}) => ({value: value + count}), {value: 0});
        return (
            <div style={{
                display: 'flex'
            }}>
                <div style={{flex: '0 0 10px'}}>{this.props.item.counter}</div>
                <div style={{flex: '0 0 60px'}}>{this.props.item.firstName}</div>
                <div style={{flex: '0 0 60px'}}>{this.props.item.lastName}</div>
                <div style={{flex: '0 0 40px'}}>{sum.value + this.props.item.counter}</div>
                <div style={{flex: '1 1 300px'}}>{this.props.item.text}</div>
                <div style={{flex: '0 0 10px'}}><button onClick={e => this.props.callbacks.onRemove()}>X</button></div>
                <div style={{flex: '0 0 10px'}}><button onClick={this.onInc.bind(this)}>+</button></div>
            </div>
        );
    }
}

class List extends React.Component {
    static propTypes = {
        onRemoveItem: React.PropTypes.func.isRequired,
        data: React.PropTypes.arrayOf(React.PropTypes.shape({
            firstName: React.PropTypes.string.isRequired,
            activity: React.PropTypes.arrayOf(React.PropTypes.shape({
                time: React.PropTypes.number.isRequired,
                count: React.PropTypes.number.isRequired,
            })).isRequired
        })).isRequired
    };

    onRemove(item) {
        this.props.onRemoveItem(item);
    }

    render() {
        const items = this.props.data.map((item, i) => (
            <Item
                key={rand.guid()}
                item={item}
                callbacks={{
                    onRemove: () => this.onRemove(item),
                    onEdit: item => this.props.onEditItem(item)
                }}
            />
        ));
        return (
            <div>{items}</div>
        );
    }
}

class SearchInput extends React.Component {
    render() {
        return (
            <input value={this.props.value} onChange={e => this.props.onChange(e.target.value)}/>
        );
    }
}

class Main extends React.Component {
    static propTypes = {};

    state = {
        data,
        searchText: ''
    };

    get filteredItems() {
        if (!this.state.searchText) {
            return [...this.state.data];
        }
        return this.state.data
            .filter(item => item.text.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1)
    }

    addItem(item) {
        const newData = this.state.data.slice(0);
        newData.push(item);
        this.setState({
            data: newData
        });
    }

    removeItem(itemToRemove){
        this.setState({
            data: this.state.data.filter(item => item._id !== itemToRemove._id)
        });
    }

    editItem(_id, edited) {
        this.setState({
            data: this.state.data
                .map(item => item._id === _id ? {_id, ...edited} : {_id: item._id, ...item})
        });
    }

    onSearchTextChange(searchText) {
        this.setState({
            searchText
        });
    }

    render() {
        return (
            <div>
                <SearchInput
                    value={this.state.searchText}
                    onChange={v => this.onSearchTextChange(v)}
                 />
                <List
                    data={this.filteredItems}
                    onRemoveItem={this.removeItem.bind(this)}
                    onEditItem={item => this.editItem(item._id, item)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    (<Main />),
    document.getElementById('app')
)
