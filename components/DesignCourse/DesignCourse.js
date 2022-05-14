
import styled from "styled-components"
import CourseNav from "./CourseNav"
import Hero from "../DesignCourse/Hero"
import Link from "next/link"
import Testimonials from "./Testimonials"
import CompDesign from "./CompDesign"

const Container = styled.section`
    display: flex;
    min-height: 100vh;
    margin: 0;
    background-color: black;
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

const Capsule = styled.div`
    width: 20px;
    height: 40px;
    border-radius: 1rem;
    outline-color: #fff;
    outline-style: solid;
    outline-width: 2px;
    /* margin: 10px 0; */
`

const Ball = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #0f0;
    margin: 4px;
    animation: bounce 0.75s ease-in-out infinite alternate;
    @keyframes bounce {
        from { transform: translate3d(0, 0, 0); }
        to {
            transform: translate3d(0, 22px, 0);
            height: 10px;
            background-color: #0b0;
        }
    }
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
        <Capsule><Ball/></Capsule>
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
        </Content>
    </Container>
}

export default DesignCourse