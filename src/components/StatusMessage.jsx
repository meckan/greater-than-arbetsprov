import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { StatusContext } from "../context/StatusContext";


function StatusMessage() {

    const [status, setStatus] = useContext(StatusContext)

    if (status.show) {
        return (
            <Alert variant="danger" onClose={() => setStatus({show:false})} dismissible>
                <Alert.Heading>{status.status}</Alert.Heading>
                <p>{status.message}</p>
                
            </Alert>
        )
    }

    return ""
}

export default StatusMessage;