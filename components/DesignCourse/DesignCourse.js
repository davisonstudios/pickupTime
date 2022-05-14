
import styled from "styled-components"
import CourseNav from "./NavBar"
import logo from '../../images/Logo1.svg'
import Hero from "../DesignCourse/Hero"
import Link from "next/link"
import Card from "./Card"
import TestimonialCard from "./TestimonialCard"
import TestimonialLarge from "./TestimonialLarge"

const Container = styled.section`
    display: flex;
    min-height: 100vh;
    margin: 0;
    background-color: black;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
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
    margin: 10px 0;
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

const TestimonialSection = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
`
const TestimonialCards = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const DesignCourse = (props) => {
    const menus = [
        {key:1, title:'Home',href:'/'},
        {key:3, title:'Design One',href:'/DesignOne'},
        {key:2, title:'Pickup Time',href:'/PickupTime'},
    ]

    return <Container>
        <CourseNav title='Design Course' logo={logo.src} menus={menus} />
        <Content>
            <Hero />
            <LearnHow />
            <TestimonialSection>
                <TestimonialLarge quote='“Gary has become the standard for me when it comes to design. After following him on YouTube for several years now I still revert back to his fun and simple videos when I need."' name='Dennis Ivy' />
                <TestimonialCards>
                    <TestimonialCard quote='“I learned so much in this DesignCourse, Gary Simon is a true gem at teaching. Best design course ever taken, and it makes me want to design more (as a web developer) 😎”' name='Adrian Robert' />
                    <TestimonialCard quote='“Always focusing on the UI Design Fundamentals first, Gary has provided so much input in my journey as a Web Designer.”' name='Yashasvi Singh' />
                </TestimonialCards>
            </TestimonialSection>

            <div id="learn">Borkened Stuff</div>

            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
            <div>SomeText</div>
        </Content>
    </Container>
}

export default DesignCourse