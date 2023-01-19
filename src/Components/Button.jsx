const Button = (props) => {
    return (
        <button disabled={props.disable} type="submit" className="btn btn-outline-dark fw-bold">{props.text}</button>
    )
}

export default Button