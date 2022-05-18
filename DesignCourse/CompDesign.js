import styled from "styled-components"
import DesignCard from "./DesignCard"
import {Film, Flask, Lightning, Arrow} from './Assets/svgs'
import MarkdownTest from "./MarkdownTest"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    text-align: center;
`

const Title = styled.div`
    color: ${({theme}) => theme.colors.headlines};
    font-family: 'Righteous';
    font-size: 40px;
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Path = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    list-style: none;
    font-family: 'Righteous';
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    color: ${({theme}) => theme.colors.headlines};
`

const ColoredArrow = styled.div`
    color: ${({theme}) => theme.colors.accent};
    width: 20px;
`

const CompDesign = () => {
    return (
        <Container>
            <Title>
            A Comprehensive Approach to<br/>
            UI Design
            </Title>
            <Cards>
                <DesignCard icon={Film} title='Video' details='Learn by video by watching Gary Simon' />
                <DesignCard icon={Flask} title='UI Tests' details='Interactive UI tests are a fun way to learn fundamentals' />
                <DesignCard icon={Lightning} title='Mentor' details='Receive real feedback & guidance for your design submissions' />
            </Cards>
            <Path>
                <li>Learn</li>
                <ColoredArrow><Arrow /></ColoredArrow>
                <li>Review</li>
                <ColoredArrow><Arrow /></ColoredArrow>
                <li>Apply</li>
            </Path>
            {/* <MarkdownTest /> */}
        </Container>
    )
}

export default CompDesign