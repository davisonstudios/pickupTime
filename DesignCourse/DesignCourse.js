
import styled from "styled-components"
import CourseNav from "./CourseNav"
import Hero from "./Hero"
import Link from "next/link"
import Testimonials from "./Testimonials"
import CompDesign from "./CompDesign"
import FloatingCards from "./FloatingCards"
import BallCapsule from "./Gizmos/BallCapsule"

const Container = styled.section`
    display: flex;
    min-height: 100vh;
    margin: 0;
    background-color: #181818;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    padding: 40px 0;
    margin: 0 80px;
    color: white;
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
    color: #0f0;
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

    return <Container>
        <CourseNav title='Design Course' menus={menus} />
        <Content>
            <Hero />
            <LearnHow />
            <Testimonials />
            <CompDesign />
            <FloatingCards />
        </Content>
    </Container>
}

export default DesignCourse