import { keyframes } from "styled-components";

export const flipHorizontal = (from: number, to: number) => keyframes`
    from {
        transform: rotateY(${from});
    }
    to: {
        transform: rotateY(${to});
    }
`;

export const rockItLeft = keyframes`
    0%{
        transform: rotate(-15deg);
    }
    100% { transform: rotate(15deg); }
`;

export const rockItRight = keyframes`
    0%{
        transform: rotate(15deg);
    }
    100% {
        transform: rotate(-15deg);
    }
`;

export const moveOut = keyframes`
    100% {
        transform: translateY(100%);
        opacity: 0;
    }
`;

export const moveIn = keyframes`
    0%{
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`;
