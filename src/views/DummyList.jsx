import { useEffect, useState } from "react"
import Employee from "../components/Employee"
import { fetchFromDummyApi } from "../RestHandels/dummyApiHandler"

import { Accordion, Container } from 'react-bootstrap'
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import { useContext } from "react"
import { StatusContext } from "../context/StatusContext"
import '../style/accordion-style.css'

function DummyList() {

    const [employees, setEmployees] = useState([])
    const [status, setStatus] = useContext(StatusContext)

    /**
     * Method to call api method to fetch from dummy api
     */
    const fetchDummyList = async () => {
        const list = await fetchFromDummyApi()
        if (list.status === 200) {
            setEmployees(list.body)
        } else {
            setStatus({show:true, status:list.status,message:list.message})
        }
    }

    useEffect(() => {
        fetchDummyList()
    }, [])


    return (
        <Container>
            <Accordion >
                {employees.map(employee => 
                    <AccordionItem key={employee.id} eventKey={employee.id}>
                        <AccordionHeader>{employee.employee_name}</AccordionHeader>
                        <AccordionBody>
                            <Employee employee={employee} />
                        </AccordionBody>
                    </AccordionItem>
                )}
            </Accordion>
        </Container>
    )
}

export default DummyList