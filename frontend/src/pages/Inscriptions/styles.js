import styled from 'styled-components'

import {Input, Select} from '@rocketseat/unform'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const MainContainer = styled(FlexBox)`
  background-color: #151128;

  button {
    margin-top: 50px;
    height: 54px;
    width: 240px;
    background-color: #E20272;
    border: 0;
    border-radius: 60px;
    color:  #FFFF;
    font-size: 16px;
    font-weight: 400;
    transition: 0.3s;

    :hover {
      background-color: #B8015D;
      cursor: pointer;
    }

    :focus {
      outline:0;
    }
  }

  label {
    margin: 0 0 2px 5px;
    color: rgba(255, 255, 255, 0.5);  
  }
`;

export const RegisterContainer = styled(FlexBox)`
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  height: 950px;
  width: 1200px;
  border-radius: 20px;
  background-color: #1C1735;

  @media screen and (max-width: 800px) {
    margin: 10px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 90%;
    padding: 16px;
    width: 100%;
    max-width: 350px;
  }
`;

export const SelectSizes = styled(Select)`
  width: 310px;
  color: #FFFF;
  font-weight: 400;
  border: 0;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;  
  height: 52px;
  background-color: #151128;

  :focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 800px) {
    flex: 1;
    width: 100%;
    max-width: 350px;
    padding: 15px 0 15px 10px;
  }
`;

export const LeftSide = styled(FlexBox)`
  flex-direction: column;
  flex: 1;
  margin-left: 50px;

  h1 {
    font-weight: 700;
    color: #FFF;
    margin: 15px;
  }

  p {
    font-weight: 400;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }

  span {
    color: #E20272;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;

    h1 {
      margin: 7px;
    }

    p {
      max-width: 400px;
    }
  }
`;

export const Rocket = styled.img`
  height: 200px;
`;

export const RightSide = styled(FlexBox)`
  flex-direction: column;
  flex: 2;

  h1 {
    margin: 5px;
    font-weight: "bold";
    font-size: 22px;
    color: #FFFF;
  }

  h3 {
    font-weight: 200;
    font-size: 16px;
    color: #FFFF;
  }

  @media screen and (max-width: 800px) {
    flex: 1;
    width: 100%;

    h1 {
      width: 100;
      margin-top: 24px;
      text-align: center;
    }
  }
`;

export const FormInternal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpacedContainer = styled(FlexBox)`
  width: 665px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

const InputStyle = styled(Input)`
  height: 54px;
  border: 0;
  border-radius: 8px;
  color: #FFFF;
  font-weight: 400;
  font-size: 16px;
  background-color: #151128;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    flex: 1;
    width: 100%;
    max-width: 350px; 
    padding: 15px 0 15px 10px;
  }
`;

export const Name = styled(InputStyle)`
  width: 650px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 350px;
    padding-left: 0 !important;
  }
`;

export const CPF = styled(InputStyle)`
  width: 320px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 350px;
    padding-left: 0 !important;
  }
`;

export const SwitchContainer = styled(FlexBox)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: flex-end;
    align-items: start;
    margin-bottom: 5px;
  }
`;

export const Text = styled.span`
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
`;

export const InlineSelect = styled(Select)`
  width: 665px;
  color: #FFFF;
  font-weight: 400;
  border: 0;
  padding: 16px;
  margin: 10 0px;
  border-radius: 8px;
  font-size: 16px;  
  height: 52px;
  background-color: #151128;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    flex: 1;
    width: 100%;
    max-width: 350px;
  }
`;

export const MiniCourses = styled(FlexBox)`
  margin-right: 25px;
  justify-content: space-between;
  width: 350px;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 350px;

    option {
      overflow: hidden;
    }
  }
`;

export const Line = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
`;

export const Options = styled(FlexBox)`
  padding: 0 10px 0 10px;
  width: 100%;
  justify-content: space-between;
`;

export const CheckBoxes = styled.div`
`;

export const InputContainer = styled(FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;

  label::after {
    content: "*";
    margin-left: 4px;
    color: #E20272;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 400px;
    justify-content: center,
    align-items: center;
  }
`;

export const AlertText = styled(FlexBox)`
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  margin: 40px 0 0 0;
  width: 650px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);

  .title {
    margin-left: 10px;
  }

  span {
    font-weight: 600;
  }

  p {
    margin-left: 10px;
    margin-top: 10px;
  }

  div {
    flex-direction: row;
  }
`;

export const CheckboxContainer = styled(FlexBox)`
  @media screen and (min-width: 801px) {
    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    align-items: start;

    p {
      margin-left: 0;
    }
  }
`;

export const DialogContainer = styled(FlexBox)`
  height: 600px;
  width: 900px;
  background-color: #1C1735;
  flex-direction: column;
`;

export const DialogText = styled(FlexBox)`
  width: 500px;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
  }
`;

export const DialogInputContainer = styled(FlexBox)`
  border-radius: 20px;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px 0;

  label {
    margin: 0 0 5px 10px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const AdviceContainer = styled.div`
  width: 500px;
  margin: 15px 0;

  p {
    margin: 5px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 400px;
    margin: 0;
  }
`;

export const DialogInput = styled(InputStyle)`
  width: 500px;
`;

export const ButtonsContainer = styled(FlexBox)`
  button {
    margin: 50px 10px 0 10px;
    height: 32px;
    width: 120px;
    background-color: #E20272;
    border: 0;
    border-radius: 60px;
    color:  #FFFF;
    font-size: 14px;
    font-weight: 400;
    transition: 0.3s;

      :hover {
        background-color: #B8015D;
        cursor: pointer;
      }

      :focus {
        outline:0;
      }
  }
`;

export const AlertMessageContainer = styled(FlexBox)`
  flex-direction: column;
  width: 500px;
  height: 150px;
  background-color: #151128;

  h1 {
    font-size: 16px;
    color: #FFF;
  }

  button {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const PayPalSection = styled.section`
  display: none;
`;