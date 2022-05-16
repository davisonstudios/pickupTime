import TestimonialLarge from "./TestimonialLarge"
import TestimonialCard from "./TestimonialCard"
import styled from "styled-components"

const TestimonialSection = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
    /* margin: 50px 0 50px; */
`
const TestimonialCards = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const Testimonials = () => {
    return <TestimonialSection>
        <TestimonialLarge quote='“Gary has become the standard for me when it comes to design. After following him on YouTube for several years now I still revert back to his fun and simple videos when I need."' name='Dennis Ivy' />
        <TestimonialCards>
            <TestimonialCard quote='“I learned so much in this DesignCourse, Gary Simon is a true gem at teaching. Best design course ever taken, and it makes me want to design more (as a web developer) 😎”' name='Adrian Robert' />
            <TestimonialCard quote='“Always focusing on the UI Design Fundamentals first, Gary has provided so much input in my journey as a Web Designer.”' name='Yashasvi Singh' />
        </TestimonialCards>
    </TestimonialSection>

}

export default Testimonials