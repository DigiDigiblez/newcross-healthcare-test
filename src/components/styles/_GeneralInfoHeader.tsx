import styled from 'styled-components';

const _GeneralInfoHeader = styled.section`
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 100px;
      padding: 10px;
    }
    
    .grid-item {
      text-align: center;
      font-size: 30px;
    }
    
    .section-title-current {
        color: black;
    }
`;

export default _GeneralInfoHeader;
