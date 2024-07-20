import "./Button.scss"

function Button(props){
    return(
        <button onClick={props.updateUserFn}>{props.name}</button>
    )
}

export default Button