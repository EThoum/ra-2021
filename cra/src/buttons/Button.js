export const Button = props => {
    const styleType = (props.outline === true)
        ?'btn-outline-primary'
        :'btn-primary';
    return <button onClick={props.onClickHandler} className={`btn ${styleType}`}> {props.icon} {props.children}</button>;
};
Button.defaultProps = {
    outline: true
}