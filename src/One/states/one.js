import react from 'react'
class Text extends react.Component{
    state = {
    msg: "Hello"
}
messageHandler = () => {
    this.setState({ msg: "Good Morning....." })
}
gnHandler = () => {
    this.setState({ msg: "" })
}
render() {
    console.log("render method")
    return <div>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.messageHandler}>GM</button>
        <button onClick={this.gnHandler}>refresh</button>
    </div>
}
}
export default Text