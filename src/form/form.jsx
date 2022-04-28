import react from 'react'
class Form extends react.Component{
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
submitionHandler =()=>{
    alert("Correct")
}
render(){
    return <div>
                <div className="container">
                <h1>Login Page </h1>
                    <div className="row">
                        <div className="col-md-6">
                        <form>
                            <label>Email</label>
                            <input type="text" onchange={this.emailHandler}/> <br></br>
                            <label>Password</label>
                            <input type="Password" onchange={this.passwordHandler}/><br></br>
                            <button onClick={this.submitionHandler}>Login</button>
                        </form>
                        </div>
                    </div>
                </div>
               
    </div>
}
}
export default Form