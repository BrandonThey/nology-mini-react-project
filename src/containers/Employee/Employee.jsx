import "./Employee";

const Employee = (props) => {
    const {name, role} = props;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
        </div>
    )
}

export default Employee;