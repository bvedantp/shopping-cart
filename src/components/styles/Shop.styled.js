import styled from "styled-components";

export const ShopFront = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
    }

`

export const HeadLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #FFD42F;
        font-size: 3em;
        line-height: 60%;
        margin-bottom: 6px;

        b {
            color: white;
            font-size: 20px;
        }
    }
`

export const CartArea = styled.header`
    padding-right: 8px;
    margin-right: 3px;
    display: flex;
    justify-content: flex-end;
`