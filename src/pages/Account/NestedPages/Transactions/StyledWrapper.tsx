import styled from 'styled-components';

const StyledWrapper = styled.div`
    .toggling {
        border: none;
        background: transparent;
        color: ${({theme}) => theme.colors.secondary};
        font-size: 20px;
        cursor: pointer;
        position: relative;
        bottom: 25px;
    }

    .transactionsGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 12px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }
`;

export default StyledWrapper;