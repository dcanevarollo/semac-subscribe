import React, {Fragment} from 'react'

import {
  MainContainer,
  RegisterContainer,
  InputContainer,
  LeftSide,
  Rocket,
  RightSide,
  Form,
  SpacedContainer,
  Name,
  CheckBoxes,
  CPF,
  SwitchContainer,
  Text,
  Options,
  InlineSelect
} from './styles' 

import Switch from '@material-ui/core/Switch';

import rocket from '../../assets/rocket.png'

export default function Inscriptions() {
  return (
    <Fragment>
      <MainContainer>
        <RegisterContainer>
          <LeftSide>
            <Rocket src={rocket}></Rocket>
            <h1>Bem vindo!</h1>
            <p>Agradecemos o interesse pelo evento. Caso ja tenha se cadastrado e deseja acessar sua conta, clique no botão abaixo.</p>
          </LeftSide>

          <RightSide>
            <h1>Faça seu cadastro e participe do evento!</h1>
            <h3>É rapidinho, prometo</h3>

            <Form>
              <InputContainer>
                <label>Nome</label>
                <Name width="500px" />
              </InputContainer>

              <SpacedContainer>
                <InputContainer>
                  <label>Tamanho de camiseta</label>
                  <select>
                    <option disabled selected></option>
                    <option>PP</option>
                    <option>P</option>
                    <option>M</option>
                    <option>G</option>
                    <option>GG</option>
                    <option>Extra GG</option>
                  </select>
                </InputContainer>

                <InputContainer>
                  <label>CPF</label>
                  <CPF />
                </InputContainer>
              </SpacedContainer>

              <InputContainer>
                <label>Minicurso 1</label>
                <InlineSelect>
                  <option disabled selected></option>
                  <option>Desenvolvimento de APIs Utilizando SpringBoot - Luiz Roberto Freitas</option>
                  <option>Análise de Sinais de Áudio Musical - Thiago Fernandes Tavares</option>  
                </InlineSelect>
              </InputContainer>

              <InputContainer>
                <label>Minicurso 2</label>
                <InlineSelect>
                  <option disabled selected></option>
                  <option>Introdução ao Processamento de Linguagem Natural com Python - Henrique Dezani</option>
                  <option>...</option>
                </InlineSelect>
              </InputContainer>

              <Options>
                <CheckBoxes>
                  <SwitchContainer>
                    <Switch />
                    <Text>Você tem interesse em estágio/emprego para 2020?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch />
                    <Text>Gostaria de participar da maratona de programação?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch />
                    <Text>Gostaria de participar do campeonato de jogos?</Text>
                  </SwitchContainer>
                </CheckBoxes>              
              </Options>

              <button type="submit">Cadastrar</button>
              
            </Form>

          </RightSide>

          

        </RegisterContainer>
      </MainContainer>
    </Fragment>
  );
}