import react from "react"
import { useState, useEffect } from "react"
import Card from "../components/card"
import css from '../styles/Home.module.css'
import {getRecs, updateRec} from "../utilities/airtableData.js"


function PickupTime() {
    const [dirty, setDirty] = useState(false)
    const [students, setStudents] = useState([])

    let timerID = 0

    useEffect(() => {
        clearTimeout(timerID)

        function completion(students) {
            // alert(`completion called, ${students.length}`)
            setStudents(students)
            timerID = setTimeout(update, 20000)
        }
        getRecs(completion)
    }, [dirty]);

    function update() {
        // alert('UPDATING')
        setDirty(!dirty)
    }

    function toggleReady(student) {
        // alert( `toggling ${student.name}` )
        student.ready = !student.ready
        student.time = null
        // props.update(student)
        updateRec(student, update)
    }

    return (
        <div className={css.main} align='center'>
            <button onClick={update}>
                Check Now
            </button>
            <div className={css.heading}><h1>Ready For Pickup</h1></div>
            {
                students.filter( student => student.ready )
                .map( student => (
                    <Card key={student.id} student={student} toggleReady={toggleReady} />
                ))
            }
            <div className={css.heading}><h1>Not Ready</h1></div>
            {
                students.filter( student => !student.ready )
                .map( student => (
                    <Card key={student.id} student={student} toggleReady={toggleReady} />
                ))
            }
        </div>
    )
}

export default PickupTime
