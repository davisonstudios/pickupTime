import styled from "styled-components"
import Link from "next/link";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: #ddd; */
    padding: 10px 40px;
`

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: white;
    /* background-color: bisque; */
`

const Title = styled.span`
    margin-left: 5px;
`

const Menus = styled.div`
    flex-grow: 5;
    display: flex;
    flex-direction: row;
    justify-content: start;
    column-gap: 20px;
    margin-left: 40px;
    color: white;
    /* background-color: aliceblue; */
`

const Anchor = styled.a`
    font-weight: bold;
    &:hover {
        color: #f00;
    }
`

const MenuItem = props => {
    const {key, menu} = props
    return <Link key={key} href={menu.href}>
        <Anchor>{menu.title}</Anchor>
    </Link>
}

const CourseNav = props => {
    const {logo, title, menus} = props

    return (
        <Container>
            <TitleDiv>
                <Image src={logo} width={30} height={30} />
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