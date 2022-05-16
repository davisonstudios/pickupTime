import PersonBadge from "./PersonBadge"
import styled from "styled-components"

const Container = styled.div`
    flex-grow: 4;
`

const Quote = styled.p`
    line-height: 1.2;
    font-family: 'Roboto Flex';
    font-size: 2rem;
`

const TestimonialLarge = (props) => {
    const {quote, name} = props

    return <Container>
        <Quote>{quote}</Quote>
        <PersonBadge name={name} imageSrc='/dennis.png' />
    </Container>
}

export default TestimonialLarge