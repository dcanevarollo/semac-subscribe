import React, {Fragment} from 'react'

import {
  MainContainer,
  RegisterContainer,
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
  InscriptionType,
  MiniCourses,
  Line,
  Option
} from './styles' 

import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';

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
              <Name placeholder="Nome completo" width="500px" />

              <SpacedContainer>
                <select>
                  <option disabled selected>Tamanho de camiseta</option>
                  <option>P</option>
                  <option>M</option>
                  <option>G</option>
                  <option>GG</option>
                </select>

                <CPF placeholder="CPF" />
              </SpacedContainer>

              <InscriptionType>
                <option disabled selected>Selecione seu tipo de inscrição</option>
                <option>Alunos de TI</option>
                <option>Professores e servidres da UNESP</option>
                <option>Outros</option>
              </InscriptionType>

              <Options>
                <CheckBoxes>
                  <SwitchContainer>
                    <Switch />
                    <Text>Vaga de estágio?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch />
                    <Text>Maratona de programação?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch />
                    <Text>Campeonato de jogos?</Text>
                  </SwitchContainer>
                </CheckBoxes>

                <MiniCourses>
                  <Line>
                    <Option>
                      <Checkbox />
                      <Text>Minicurso 1</Text>
                    </Option>

                    <Option>
                      <Checkbox />
                      <Text>Minicurso 2</Text>
                    </Option>
                  </Line>

                  <Line>
                    <Option>
                      <Checkbox />
                      <Text>Minicurso 3</Text>
                    </Option>

                    <Option>
                      <Checkbox />
                      <Text>Minicurso 4</Text>
                    </Option>
                  </Line>
                </MiniCourses>
              </Options>

              <button type="submit">Cadastrar</button>
              
            </Form>

          </RightSide>

          

        </RegisterContainer>
      </MainContainer>
    </Fragment>
  );
}