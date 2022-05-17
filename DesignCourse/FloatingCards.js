import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 500px;
    /* background-color: khaki; */
`

const RoundedBox = styled.div`
    /* min-width: 200px;
    max-width: 400px; */
    width: 30%;
    margin: 10px;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 10px;
    /* border-style: solid; */
    background-color: #ddd;
    border-color: #555;
    overflow: hidden;
    &:hover {
        animation: rise 0.25s forwards;
        /* transform: translateY(-5px); */
    }
    @keyframes rise {
        0% {
            /* transform: translate3d(0, -5px, 0); */
        }
        100% {
            transform: translate3d(0, -5px, 0);
            box-shadow: 0 5px 20px #0f0;
        }
    }
`

const FloatingCards = () => {
    return (
        <Container>
            <RoundedBox>Stuff</RoundedBox>
            <RoundedBox>Stuff</RoundedBox>
            <RoundedBox>Stuff</RoundedBox>
        </Container>
    )
}

export default FloatingCards