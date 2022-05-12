import { useCallback, useState, useEffect } from "react"
import Card from "../components/card"
import css from '../styles/Home.module.css'
import {getRecs, updateRec} from "../utilities/airtableData.js"


function PickupTime() {
    const [students, setStudents] = useState([])

    const updateData = useCallback(() => {
        getRecs((airtableStudents) => setStudents(airtableStudents))
    }, [])

    useEffect(() => {
        updateData()

        const interval = setInterval(() => updateData(), 2e4)

        return function cleanup () {
            clearInterval(interval)
        }
    }, [updateData])

    function toggleReady(student) {
        // alert( `toggling ${student.name}` )
        student.ready = !student.ready
        student.time = null
        // props.update(student)
        updateRec(student, updateData)
    }

    return (
        <div className={css.main} align='center'>
            <button onClick={updateData}>
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
