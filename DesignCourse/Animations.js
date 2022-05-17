import {keyframes} from "styled-components"

export const slideDownAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
 
export const breathe = keyframes`
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; transform: scale(1.05);}
`