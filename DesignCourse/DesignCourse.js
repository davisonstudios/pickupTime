
import styled from "styled-components"
import CourseNav from "./CourseNav"
import Hero from "./Hero"
import Link from "next/link"
import Testimonials from "./Testimonials"
import CompDesign from "./CompDesign"
import FloatingCards from "./FloatingCards"
import BallCapsule from "./Gizmos/BallCapsule"
import { ThemeProvider } from "styled-components"
import { withTheme } from "styled-components"

const Container = styled.section`
    display: flex;
    min-height: 100vh;
    margin: 0;
    background-color: ${({theme}) => theme.colors.background};
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    padding: 40px 0;
    margin: 0 80px;
    width: 100%;
    height: 100%;
`

const LearnDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
    font-family: 'Verdana';
    font-weight: bold;
    color: ${({theme}) => theme.colors.accent};
`

const LearnHow = () => {
    return <LearnDiv>
        <BallCapsule />
        <Link href='#learn'><a>Learn how…</a></Link>
    </LearnDiv>
}

const DesignCourse = (props) => {
    const menus = [
        {key:1, title:'Home',href:'/'},
        {key:3, title:'Design One',href:'/DesignOne'},
        {key:2, title:'Pickup Time',href:'/PickupTime'},
    ]

    const theme = {
        colors: {
            background: '#222',
            logo: '#0ff',
            accent: '#0ff',
            headlines: '#fff',
            text: '#ccc',
            icons: '#0ff',
        }
    }

    return <ThemeProvider theme={theme}>
        <Container>
            <CourseNav title='Design Course' menus={menus} />
            <Content>
                <Hero />
                <LearnHow />
                <Testimonials />
                <CompDesign />
                <FloatingCards />
            </Content>
        </Container>
    </ThemeProvider>
}

export default DesignCourse