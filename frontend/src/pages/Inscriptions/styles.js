import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 50px 0;
  justify-content: space-between;
  height: 950px;
  width: 1200px;
  border-radius: 20px;
  background-color: #1C1735;
`;

export const LeftSide = styled(FlexBox)`
  flex-direction: column;
  width: 30%;
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
`;

export const Rocket = styled.img`
  height: 200px;
`;

export const RightSide = styled(FlexBox)`
  width: 85%;
  flex-direction: column;
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
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;  
`;

export const SpacedContainer = styled(FlexBox)`
  width: 665px;
  display: flex;
  justify-content: space-between;

  select {
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
  }
`;

const Input = styled.input`
  padding-left: 15px;
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
`;

export const Name = styled(Input)`
  width: 650px;
`;

export const CPF = styled(Input)`
  width: 320px;
`;

export const SwitchContainer = styled(FlexBox)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.span`
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
`;

export const InlineSelect = styled.select`
  width: 320px;
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
  }
  width: 665px;
  margin: 10 0px;
`;

export const MiniCourses = styled(FlexBox)`
  margin-right: 25px;
  justify-content: space-between;
  width: 350px;
  flex-direction: column;
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

export const Option = styled(FlexBox)``;

export const CheckBoxes = styled.div`
`;

export const InputContainer = styled(FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
`;

export const Alert = styled(FlexBox)`
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

export const CheckboxeContainer = styled(FlexBox)`
p {
    margin: 0;
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
`;

export const DialogInput = styled(Input)`
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
    font-size: 16px;
    font-weight: 400;
    transition: 0.3s;

    :hover {
      background-color: #B8015D;
    }

    :focus {
      outline:0;
    }
`;