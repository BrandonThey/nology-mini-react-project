import "../../containers/Employee/Employee.scss"

import Counter from "../../components/Counter/Counter";

const Employee = (props) => {
    const {employeesArr} = props;

    const employeeCards = employeesArr.map((employee) => {
        return(<div className="employee-card">
            <h3>Name: {employee.name}</h3>
            <h3>Role: {employee.role}</h3>
            <Counter />
        </div>)
    });
    
    return (
        <>
            {employeeCards}
        </>
    )
}

export default Employee;