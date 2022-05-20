import styled from "styled-components";
import ReactMarkdown from "react-markdown"
// import md from '../content/home'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px;
`
const Box = styled.div`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    background-color: ${props => props.color || 'black'};
`
const Circle = styled(Box)`
    border-radius: ${props => props.radius || '50%'};
`
const OutlineCircle = styled(Circle)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    /* transform: rotate(180deg); */
    border: 5px solid ${props => props.color || 'black'};
    & {
        position: relative;
        /* color: #b00; */
    }
`

const HalfCircle = styled(Circle)`
    position: absolute;
    clip-path: inset(0 0 0 50%);
    transform: translate(-50%, 0);
    border: 5px solid ${props => props.color || 'black'};
    background: none;
    z-index: ${props => props.zIndex || 0};
`

const Circles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 100px;
    align-items: start;
    margin-left: 3px;
    /* background-color: black; */
    /* transform: translate(100%,0); */
`

const Trapezoid = styled.div`
    width: 0px;
    height: 100px;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 30px solid blue;
`

const Handle = styled.div`
    align-self: center;
    width: 30px;
    height: 40px;
    background-color: blue;
    border-radius: 10px 0 0 10px;
`

const Logo = styled.div`
    display: flex;
    width: 100px;
    /* transform: scale(80%); */
    justify-content: start;
    align-content: start;
    background-color: beige;
`

const Test = () => {
    return (
        <Container>
            <Box color='blue' />
            <OutlineCircle>
                <div>Something</div>
                Boring
            </OutlineCircle>
            <Logo>
                <Handle />
                <Trapezoid />
                <Circles>
                    <HalfCircle height='100px' width='100px' zIndex='1' color='red' />
                    <HalfCircle height='80px' width='80px' zIndex='5' color='green' />
                    <HalfCircle height='60px' width='60px' zIndex='10' color='blue' />
                </Circles>
            </Logo>
            {/* <ReactMarkdown>{md}</ReactMarkdown> */}
        </Container>

    )
}

export default Test