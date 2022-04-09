import react from 'react'
class form extends react.Component{
            state={
                email:'',
                password:''
}
emailHandler=(event)=>{
    this.setState({email:event.target.value})
}
passwordHandler=(event)=>{
    this.setState({password: event.target.value})
}
render(){
    return <div>
                <h1>Login Page </h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>
                    <label>Email</label>
                    <input type="text" onchange={this.emailHandler}/>
                </form>
    </div>
}
}
export default form