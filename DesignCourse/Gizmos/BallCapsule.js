import styled from "styled-components"

const Capsule = styled.div`
width: 20px;
height: 40px;
border-radius: 1rem;
outline-color: #fff;
outline-style: solid;
outline-width: 2px;
/* margin: 10px 0; */
`

const BouncingBall = styled.div`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: ${({theme}) => theme.colors.accent};
margin: 4px;
animation: bounce 0.75s ease-in-out infinite alternate;
@keyframes bounce {
    from { transform: translate3d(0, 0, 0); }
    to {
        transform: translate3d(0, 22px, 0);
        height: 10px;
    }
}
`

const BallCapsule = () => {
    return (
        <Capsule><BouncingBall/></Capsule>
    )
}


export default BallCapsule