import { useEffect, useState } from "react"
import Card from "../components/card"
import {getRecs} from "../utilities/airtableData"


function PickupTime() {
    const [dirty, setDirty] = useState(false)
    const [students, setStudents] = useState([])

    useEffect(() => {
        getRecs(setStudents)
    }, [dirty]);

    function update() {
        // alert('UPDATING')
        setDirty(!dirty)
    }

    // GetRecs()
    setInterval(update, 15000)

    const styles = {
        heading: {
            width: '90%',
            textAlign: 'left',
        }
    }

    return (
        <div margin='auto' align='center'>
            <button onClick={update}>
                Check Now
            </button>
            <div style={styles.heading}><h1>Ready For Pickup</h1></div>
            {
                students.filter( student => student.ready )
                .map( student => (
                    <Card key={student.id} student={student} update={update} />
                ))
            }
            <div style={styles.heading}><h1>Not Ready</h1></div>
            {
                students.filter( student => !student.ready )
                .map( student => (
                    <Card key={student.id} student={student} update={update} />
                ))
            }
        </div>
    )
}

export default PickupTime