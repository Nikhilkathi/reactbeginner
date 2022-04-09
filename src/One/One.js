import React from 'react'
const One=()=>{
    return(
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <ul>
                <a className='navbar-brand' href='#'>Pro Stack</a>
               
            </ul>

        </nav>
           
    )
}
class Name extends React.Component{
    state={
        msg: "Hello"
    }
render(){
    return <div>`This a {this.state.msg} Example`</div>
}
}
export {One,Name}
