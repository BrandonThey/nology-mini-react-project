//to create a react app: npx create-react-app nameOfProject
import '../../ticket-tracker/src/App.scss';

import Employee from './containers/Employee/Employee';

import employees from "./data/employees";

function App() {
  return (
    <div className="ticket-tracker">
      <h1>Ticket Tracker</h1>
      <div className="employee-cards">
        <Employee employeesArr={employees}/>
      </div>
    </div>
  );
}

export default App;
