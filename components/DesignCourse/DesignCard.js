import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 50px 0 50px;
    color: white;
`
const Title = styled.div`
    font-family: 'Righteous';
    font-size: 2rem;
    font-weight: bold;
    padding: 30px 0 10px;
`
const Details = styled.div`
    font-family: 'Josefin Slab';
    font-size: 20px;
`

const DesignCard = (props) => {
    const {title, details} = props
    const Icon = <props.icon width='50px' height='50px' color='#0f0' />

    return (
        <Container>
            {Icon}
            <Title>{title}</Title>
            <Details>{details}</Details>
        </Container>
    )
}

export default DesignCard