import { Container, Row, Col } from "react-bootstrap";


function Employee(props) {
    return (
        <Container>
            <Row>
                Employee age: {props.employee.employee_age}
            </Row>
            <Row>
                Employee salary: {props.employee.employee_salary}
            </Row>
        </Container>
    )
}

export default Employee;