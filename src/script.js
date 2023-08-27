const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}]

const getRandomIndexEl = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}    

class ListItem extends React.Component {
    render() {
        const { item } = this.props;

        return (
            <li className={`list__item ${item.active && 'list-item-active'}`}>
                <span className="list__title">{item.type}</span>
                <span className="list__icon">{item.icon}</span>
            </li>
        );
    }
}
    
class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
            borderWidth:0 
        };   
    }
    

    componentDidMount() {
        const activeEl = setInterval(() => { 
            let unActiveEl = this.state.list.filter(item => !item.active) 
            let randomIndexEl = getRandomIndexEl(0, unActiveEl.length-1),
                randomObj = unActiveEl[randomIndexEl];  

            this.setState({
                list: this.state.list.map((el) => {
                    if(el === randomObj) el.active = true;
                    return el;
                })
            },    
            () => {
                let unActiveEl = this.state.list.filter(item => !item.active);
                if (!unActiveEl.length) {
                    clearInterval(activeEl);
                    this.setState({
                        borderWidth: 20
                    })
                };

                if( unActiveEl.length === Math.floor(this.state.list.length/2) ) {
                    this.setState({
                        borderWidth: 10
                    })
                }
            })

        }, 1000);
    }

    render() {
        const { list, borderWidth } = this.state;

        return list.length 
        ? (
            <ul className="list" style={{borderWidth}}>
                {list.map((animal, idx) => (
                    <ListItem key={idx} item={animal} />
                ))}
            </ul>
        ) : (
            <p>The list is empty</p>
        );
    }
}

const App = (
    <React.Fragment>
        <List list={animals} />
    </React.Fragment>
);

root.render(App);
    

