import react from 'react'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { One,Name } from './One/One'
import Form from './Form/Form'
function App(){
return <div>
  <Router>
  <One/>
  </Router>
  <Name/>
  <Form/>
</div>
}
 export default App