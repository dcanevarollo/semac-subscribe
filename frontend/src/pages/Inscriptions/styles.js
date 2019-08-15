import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled(FlexBox)`
  background-color: #151128;
  height: 100%;

  button {
    margin-top: 50px;
    height: 40px;
    width: 200px;
    background-color: #E20272;
    border: 0;
    border-radius: 20px;
    color:  #FFFF;
    font-weight: 400;

    :hover {
      transition: 0.3s;
      background-color: #B8015D;
    }

  }
`;

export const RegisterContainer = styled(FlexBox)`
  justify-content: space-between;
  height: 600px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;

  select {
    width: 310px;
    color: #FFFF;
    font-weight: 400;
    border: 0;
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    font-size: 16px;  
    height: 52px;
    background-color: rgba(0, 0, 0, 0.26);

    :hover {
      outline: none;
    }
  }
`;

const Input = styled.input`
    height: 32px;
    border: 0;
    padding: 10px;
    border-radius: 8px;
    color: #FFFF;
    font-weight: 400;
    font-size: 16px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.26);

    :focus {
      outline: none;
    }
`;

export const Name = styled(Input)`
  margin-top: 30px;
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

export const InscriptionType = styled.select`
    width: 320px;
    color: #FFFF;
    font-weight: 400;
    border: 0;
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    font-size: 16px;  
    height: 52px;
    background-color: rgba(0, 0, 0, 0.26);

    :hover {
      outline: none;
    }
  width: 670px;
  margin: 10px;
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
  margin-left: 10px;
`;