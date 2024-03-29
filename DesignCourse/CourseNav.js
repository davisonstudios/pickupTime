import styled from "styled-components"
import Link from "next/link";
import { SiteLogo } from "./Assets/svgs";
import { breathe } from "./Animations";

const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    padding: 10px 80px;
    z-index: 100;
`

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

const Logo = styled(SiteLogo)`
    width: 30px;
    height: 30px;
    color: ${({theme}) => theme.colors.logo};
`

const Title = styled.span`
    margin-left: 10px;
    font-family: 'Righteous';
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
    font-family: 'Roboto Flex';
    font-size: 1.5em;
    font-weight: 400;
    &:hover {
        color: ${({theme}) => theme.colors.accent};
        text-shadow: 0px 0px 3px ${({theme}) => theme.colors.accent};
        animation: ${breathe} 3s ease-in-out infinite;
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

    return (
        <Container>
            <TitleDiv>
                <Logo />
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