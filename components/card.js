import css from '../styles/Card.module.css'
import { format, parseISO } from 'date-fns'

function Card(props) {
    const {student, toggleReady} = props

    function formattedTime() {
        if (student.ready && student.time) {
            const d = parseISO(student.time)
            return format(d, "hh:mm aaaaa'm' dd/yy")
        }
        return ""
    }

    return (
        <div className={css.card}>
            <span className={css.contents}>
                <span className={student.ready ? css.name_ready : css.name}>{student.name}</span>
                <span className={css.time}>{formattedTime()}</span>
                <button className={css.readyButton} onClick={()=>{toggleReady(student)}}>{!student.ready ? 'Ready' : 'Picked Up'}</button>
            </span>
        </div>
    )
}

export default Card