
import css from '../styles/Hero.module.css'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

function Hero(props) {
    const { title } = props.content
    const titleRef = useRef()
    const title2Ref = useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(titleRef.current, {duration: 1.5, opacity: 0, y: '200'})
        tl.from(title2Ref.current, {duration: 1.5, opacity: 0, y: '-100%'})
    });
    

    function push() {
        // alert("Ouch")
        // gsap.from([titleRef.current, title2Ref.current], {duration: 2, y: '100%'})
    }

    return (
        <div className={css.hero}>
            <div className={css.headline} ref={titleRef}>{title}</div>
            <div className={css.detail} ref={title2Ref}>Lorem ipsum something and another thing</div>
            {/* <button onClick={push}>Join Today</button> */}
        </div>
    )
}

export default Hero