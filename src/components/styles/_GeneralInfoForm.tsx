import styled from 'styled-components';

const _GeneralInfoForm = styled.section`
    html, body {
      height: 100%;
      margin: 0;
    }
    
    .form-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
    
    .form-wrapper > div {
      display: flex; 
      flex-basis: calc(50% - 40px);  
      flex-direction: column;
    }
    
    .form-wrapper > div > div {
      display: flex;
      flex-direction: row;
    }
    
    .field-container { 
        margin: 10px; 
        padding: 10px;
    }
    
    .inner-field-container { 
        margin: 10px; 
        padding: 10px;
        height: 200px;
        background-color: #fff;
    }
    
    .radio-item {
        margin: 10px 30px;
    }
    
    .vertical {
        display: inline-block;
    }
    
    select {
        width: 100%;
    }
    
    h4 {
        text-transform: uppercase;
    }
    
    .delete-button {
        color: red;
    }
    
    .separated-fields-container { 
        background-color: #fff;
    }
    
    .start-date-container {
        margin: 20px 80px 0 100px;
    }
    
    .end-date-container {
        margin: 20px 0 0 70px;
    }
    
    .gender-preference-container {
        margin: 60px 60px 60px 120px;
    }
    
    .radio-group {
        float: left;
        padding: 20px 55px;
    }
    
    .form-wrapper {
        padding-bottom: 120px;
    }
`;

export default _GeneralInfoForm;
