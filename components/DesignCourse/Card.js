import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`

const RoundedBox = styled.div`
    /* min-width: 200px;
    max-width: 400px; */
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 10px;
    border-style: solid;
    border-color: #555;
`

const Card = (props) => {
    const {children} = props
    return <RoundedBox>
        {children}
    </RoundedBox>
}

export default Card