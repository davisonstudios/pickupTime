
import css from '../styles/Feature.module.css'
import Button from '../components/button'

function Feature(props) {

    function click() {
        alert('You pushed me!')
    }

    return (
        <div className={css.content}>
            <div className={css.heading}>
                <div>{props.heading}</div>
            </div>
            <div className={css.detail}>
                <div>{props.detail}</div>
            </div>
            {/* <Button onClick={click} color='#080'>Push me</Button> */}
       </div>
    )
}

export default Feature