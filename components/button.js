import css from '../styles/Button.module.css'

function Button(props) {
    const style = {
        backgroundColor: props.color,
        // color: '#0004',
        // borderRadius: '15px',
    }
    return (
        <button className={css.button} style={style} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button