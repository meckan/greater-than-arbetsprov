import { createContext, useState } from "react";


export const StatusContext = createContext()

const StatusProvider = (props) => {

    const [status,setStatus] = useState({show:false})

    return (
        <StatusContext.Provider value={[status,setStatus]}>
            {props.children}
        </StatusContext.Provider>
    )
}

export default StatusProvider