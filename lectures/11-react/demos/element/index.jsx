const element = (
    <div>Hello!</div>
);

const myBoldElement = (
    <b>{element}</b>
);

const Component = props => (
    <div>Hello!</div>
);

const MyBoldComponent = props => (
    <b>
        <Component/>
    </b>
);

const MyBoldWrapper = ({children}) => (
    <b>{children}</b>
);

class SuperBold extends React.Component {
    render() {
        return (
            <MyBoldWrapper>
                <MyBoldWrapper>
                    {this.props.children || 'О, Привет!'}
                </MyBoldWrapper>
            </MyBoldWrapper>
        );
    }
}
