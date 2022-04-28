import React from 'react'
import {Link} from 'react-router-dom'
const One=()=>{
    return(
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            
                <Link className='navbar-brand' to='#'>Pro Stack</Link>
           <div className='ml-auto'> 
               <ul className='navbar-nav'>
               <li className='nav-item'><Link className='nav-link' to='/home'>Home</Link></li>
               <li className='nav-item'><Link className='nav-link' to='/About '>About</Link></li>
            </ul>
            </div>

        </nav>
           
    )
}
class Name extends React.Component{
    state={
        msg: "Hello, Welcome Back"
    }
render(){
    return <div>This a {this.state.msg} Example</div>
}
}
export {One,Name}
