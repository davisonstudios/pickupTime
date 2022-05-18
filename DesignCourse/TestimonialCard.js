import Card from "./Card"
import PersonBadge from "./PersonBadge"
import styled from "styled-components"

const Container = styled.div`
    flex-grow: 1;
`
const Quote = styled.p`
    line-height: 1.2;
    font-family: 'Roboto Flex';
    color: ${({theme}) => theme.colors.text};
`

const TestimonialCard = (props) => {
    const {quote, name} = props

    return <Container>
        <Card>
            <Quote>{quote}</Quote>
            <PersonBadge name={name} imageSrc='/images/dennis.png' />
        </Card>
    </Container>
}

export default TestimonialCard