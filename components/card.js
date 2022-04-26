import { useState } from "react"
import {updateRec} from "../utilities/airtableData"

function Card(props) {
    let student = props.student
    const [ready, setReady] = useState(student.ready)

    const styles = {
        card: {
            width: '90%',
            height: '30px',
            backgroundColor: '#999',
            color: 'blue',
            // borderRadius: '15px',
            marginBottom: '1px',
        },
        contents: {
            width: '100%',
            height: '100%',
            padding: '5px 20px',
            backgroundColor: '#ccc',
            textAlign: 'left',
            // borderRadius: '15px 15px 0px 0px',
        },
    }

    function toggleReady() {
        // setReady( !ready )
        student.ready = !student.ready
        updateRec(student, props.update)
    }

    return (
        <div style={styles.card}>
            <div style={styles.contents}>
                <input type="checkbox" id={student.id} checked={ready} onChange={toggleReady} />
                <label htmlFor={student.id}>{student.name}</label>
            </div>
        </div>
    )
}

export default Card