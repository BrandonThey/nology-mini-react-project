import "./Employee";

import Counter from "../../components/Counter/Counter";

const Employee = (props) => {
    const {name, role} = props;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
            <Counter />
        </div>
    )
}

export default Employee;