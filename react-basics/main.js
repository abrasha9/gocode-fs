const reacth1 = React.createElement('h1', {},'header1');
reacth1.props.children = 'changed';
const reactButton = React.createElement('button', {onClick: () => reacth1.props.children = 'changed'},'click me');
const reactInput = React.createElement('input', {placeholder : 'aaa', style :{color : 'red'}});
// const reactradio = React.createElement('radio',{},'radio1');

const jsxbutton = () => {
    return (
        <div>   
            <button onClick = {alert('fdfd')}>'click me'!!!</button>
        </div>
    )
}

const container = () =>{
    return (
        <div>
        <jsxbutton />
        <jsxbutton />
        <jsxbutton />
        </div>
        )
}
console.log(reacth1);
ReactDOM.render(reactButton, document.getElementById('rbtn'));
ReactDOM.render(reactInput, document.getElementById('rinput'));
ReactDOM.render(container, document.getElementById('rh1'));
// ReactDOM.render(reactradio, document.getElementById('rradio'));
