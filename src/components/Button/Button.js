function Button({ text, children }) {
    return (
        <button onClick={() => console.log('message: ', text)}>{children}</button>
    )
}

export default Button;