import styled from "styled-components"
import DesignCard from "./DesignCard"
import flask from '../../images/flask.svg'
import film from '../../images/film.svg'
import lightning from '../../images/lightning.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* height: 300px; */
    align-items: center;
    text-align: center;
    /* margin: 200px 0 100px; */
`

const Title = styled.div`
    font-family: 'Righteous';
    font-size: 40px;
    /* text-align: center; */
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const CompDesign = () => {
    return (
        <Container>
            <Title>
                A Comprehensive Approach to<br/>
                UI Design
            </Title>
            <Cards>
                <DesignCard icon={film} title='Video' details='Learn by video by watching Gary Simon' />
                <DesignCard icon={flask} title='UI Tests' details='Interactive UI tests are a fun way to learn fundamentals' />
                <DesignCard icon={lightning} title='Mentor' details='Receive real feedback & guidance for your design submissions' />
            </Cards>
        </Container>
    )
}

export default CompDesign