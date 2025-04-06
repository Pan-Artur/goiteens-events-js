import styled from 'styled-components';

export const StyledItem = styled.li`
    position: relative;
    width: 280px;
    height: 180px;
    background-color: #ffe2d0;
    border: solid 2px #f4b185;
    border-radius: 6px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    & h2 {
        color: #3a2d25;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
    }

    & ul.managment {
        list-style: none;
        padding: 0;
        margin: 0;

        & li {
            display: flex;
            align-items: center;
            margin-bottom: 8px;

            & p {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #3a2d25;
                margin: 0;

                & span {
                    display: inline-flex;
                    margin-right: 8px;
                }
            }
        }
    }

    & svg {
        width: 16px;
        height: 16px;
        fill: #3a2d25;
    }
`;