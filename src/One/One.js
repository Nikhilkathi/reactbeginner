import React from 'react'
const One=()=>{
    return(
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <ul>
                <a className='navbar-brand' href='#'>Pro Stack</a>
                <li className='navbar-list'><a className='navbar-link' href='#'>Home</a></li>
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
