import "./Employee";

import Counter from "../../components/Counter/Counter";

const Employee = (props) => {
    const {employeesArr} = props;

    const employeeCards = employeesArr.map((employee) => (
        <>
            <h3>Name: {employee.name}</h3>
            <h3>Role: {employee.role}</h3>
            <Counter />
        </>
    ));
    
    return (
        <>
            <div>{employeeCards}</div>
        </>
    )
}

export default Employee;