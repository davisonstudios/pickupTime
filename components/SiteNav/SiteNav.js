import css from './SiteNav.module.scss'
import styled from 'styled-components'
import Button from '../button'
import Image from 'next/image'

function SiteNav(props) {
    // const logo = require(props.logo)
    const {title, sections, buttons} = props.config

    const Title = styled.span`
        margin-left: 15px;
        font-size: 2.5vw;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    `

    return (
        <div className={css.nav}>
            <Image className={css.logo} src={props.logo} width="50" height="50" alt='' />
            {/* <span className={css.title}>{title}</span> */}
            <Title>{title}</Title>
            <span className={css.menu}>
                {sections.map( (item, index) => (
                    <a key={index} className={css.menuitem} href={item.href}>{item.name}</a>
                ))}
            </span>
            <div className={css.buttons}>
                {buttons.map( (button, index) => (
                    <Button key={index} onClick={button.action}>{button.title}</Button>
                ))}
            </div>
        </div>
    )
}

export default SiteNav