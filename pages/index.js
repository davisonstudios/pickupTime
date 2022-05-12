import react, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "styled-components"
import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    background: linear-gradient(150deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 11%, rgba(0,212,255,1) 100%);
    // justify-content: space-around;
    align-items: stretch;
    row-gap: 20px;
    padding: 40px 180px;
    position: absolute;
    height: 100%;
    width: 100%;
`;

const Box = styled.div`
    background-color: #fafafa;
    border: 1px #ccc solid;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px;
    // flex-basis: 400px;
    // flex:1;
`

const Box1 = styled(Box)`
    // order: 2;
    // flex: 2;
    // align-self: flex-start;
`
const Box2 = styled(Box)`
    // order: 1;
    // align-self: flex-end;
    transform: rotate(${props => props.rotate || 0});
`

// const Headline = styled.h1`
//     font-size: 24px;
//     font-family: Verdana;
//     font-weight: 900;
// `;

// const RedLine = styled(Headline)`
//     color: ${props => props.color || '#f00'};
//     grid-row-start: ${props => props.row || 1};
//     background-color: #eee;
// `;

const Anchor = styled.a`
    color: blue;
    font-family: 'Special Elite', cursive;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        color: red;
        font-size: 26px;
    }
`

const SiteLink = (props) => {
    const {href, title} = props
    return <Link href={href}><Anchor>{title}</Anchor></Link>
}

const Description = styled.p`
    font-family: 'Josefin Slab';
    font-size: 20px;
`

const Home = () => {
    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');
    const [item3, setItem3] = useState('');
    
    useEffect(() => {
        setItem1(loremIpsum({count: 1, units: 'paragraph'}));
        setItem2(loremIpsum({count: 1, units: 'paragraph'}));
        setItem3(loremIpsum({count: 1, units: 'paragraph'}));
    }, []);

    return <Container>
        <Box2 rotate='-2deg'>
            <SiteLink href='/DesignOne' title='Event Site Idea 1' />
            {/* <Link href='/DesignOne'><Anchor>Design One</Anchor></Link> */}
            <Description>{item1}</Description>
        </Box2>
        <Box2 rotate='3deg'>
            <SiteLink href='/DesignOne' title='Event Site Idea 2' />
            <Description>{item2}</Description>
        </Box2>
        <Box2 rotate='-2deg'>
            <SiteLink href='/PickupTime' title='Pickup Time' />
            <Description>{item3}</Description>
        </Box2>
    </Container>
}

export default Home