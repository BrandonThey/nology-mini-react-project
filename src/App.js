//to create a react app: npx create-react-app nameOfProject
import logo from './logo.svg';
import './App.css';

import Employee from './containers/Employee/Employee';

import employees from "./data/employees";

function App() {
  return (
    <div className="App">
      <Employee name={employees[0].name} role={employees[0].role}/>
    </div>
  );
}

export default App;
