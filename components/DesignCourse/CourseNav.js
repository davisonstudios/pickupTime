import styled from "styled-components"
import Link from "next/link";
// import { SiteLogo } from "./Assets/svgs";

const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
    padding: 10px 80px;
    z-index: 100;
`

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

const Title = styled.span`
    margin-left: 10px;
    font-family: 'Amatic SC';
    font-size: 2em;
    font-weight: bold;
`

const Menus = styled.div`
    flex-grow: 5;
    display: flex;
    flex-direction: row;
    justify-content: start;
    column-gap: 20px;
    margin-left: 40px;
    color: white;
`

const Anchor = styled.a`
    font-family: 'Shadows Into Light';
    font-size: 1.5em;
    font-weight: 100;
    &:hover {
        color: #d0d;
        font-weight: bold;
    }
`

const MenuItem = props => {
    const {menu} = props

    return <Link key={menu.key} href={menu.href}>
        <Anchor>{menu.title}</Anchor>
    </Link>
}

const CourseNav = props => {
    const {title, menus} = props
    const Logo = <props.logo width={30} height={30} color='#0f0' />

    return (
        <Container>
            <TitleDiv>
                {Logo}
                <Title>{title}</Title>
            </TitleDiv>
            <Menus>
                {menus.map( (menu, key) => (
                    <MenuItem key={key} menu={menu} />
                ))}
            </Menus>
        </Container>
    )
}

export default CourseNav