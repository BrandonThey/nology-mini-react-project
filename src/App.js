//to create a react app: npx create-react-app nameOfProject
import logo from './logo.svg';
import './App.css';

import Employee from './containers/Employee/Employee';

import employees from "./data/employees";

function App() {
  return (
    <div className="App">
      <Employee employeesArr={employees}/>
    </div>
  );
}

export default App;
