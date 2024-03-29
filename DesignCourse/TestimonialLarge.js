import PersonBadge from "./PersonBadge"
import styled from "styled-components"

const Container = styled.div`
    flex-grow: 4;
    color: ${({theme}) => theme.colors.text};
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
        <PersonBadge name={name} imageSrc='/images/dennis.png' />
    </Container>
}

export default TestimonialLarge