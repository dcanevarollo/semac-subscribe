import React, {Fragment, useState} from 'react'


import api from '../../services/api'

import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';

import { Form  } from '@rocketseat/unform'

import {
  MainContainer,
  RegisterContainer,
  InputContainer,
  LeftSide,
  Rocket,
  RightSide,
  FormInternal,
  SpacedContainer,
  Name,
  SelectSizes,
  CheckBoxes,
  CPF,
  SwitchContainer,
  Text,
  Options,
  InlineSelect,
  CheckboxeContainer,
  Alert,
  DialogContainer,
  DialogInputContainer,
  DialogInput,
  AdviceContainer,
  DialogText,
  ButtonsContainer
} from './styles' 

import Switch from '@material-ui/core/Switch';

import rocket from '../../assets/rocket.png'

export default function Inscriptions() {

  const optionsSizes = [
    {id: "PP", title: "PP" },
    {id: "P", title: "P"},
    {id: "M", title: "M"},
    {id: "G", title: "G"},
    {id: "GG", title: "GG"},
    {id: "Extra GG", title: "Extra GG"}
  ]
  
  const optionsMiniCourse1 = [
    {id: 1, title: "Desenvolvimento de APIs Utilizando SpringBoot - Luiz Roberto Freitas"},
    {id: 2, title: "Análise de Sinais de Áudio Musical - Thiago Fernandes Tavares"}
  ]

  const optionsMiniCourse2 = [
    {id: 3, title: "Introdução ao Processamento de Linguagem Natural com Python - Henrique Dezani"},
    {id: 4, title: "..."}
  ]

  const typeInscriptionsOptions = [
    {id: "1", title: "Alunos de TI"},
    {id: "2", title: "Professor/Servidor da UNESP"},
    {id: "3", title: "Outros"},
  ]

  const [open, setOpen] = useState(false);

  let wantInternship = false;
  let wantMarathon = false;
  let wantGameChampionship = false;
  let readAdvice = false;
  let shareLink = false;
  
  function handleClickOpen(e) {
    e.preventDefault();
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function MaskIt(value) {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function handleSubmit(data) {
    console.log("Entrei aqui")
    console.log(data)
    console.log(wantInternship,  wantMarathon, wantGameChampionship, readAdvice, shareLink)
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
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

              <FormInternal>
                <InputContainer>
                  <label>Nome</label>
                  <Name name="nome"/>
                </InputContainer>

                <SpacedContainer>
                  <InputContainer>
                    <label>Tamanho de camiseta</label>
                    <SelectSizes name="tShirtSize" options={optionsSizes} />
                  </InputContainer>

                  <InputContainer>
                    <label>CPF</label>
                    <CPF name="cpf" />
                  </InputContainer>
                </SpacedContainer>

                <InputContainer>
                  <label>Minicurso 1</label>
                  <InlineSelect name="miniCourse1" options={optionsMiniCourse1} />
                </InputContainer>

                <InputContainer>
                  <label>Minicurso 2</label>
                  <InlineSelect name="miniCourse2" options={optionsMiniCourse2} />
                </InputContainer>

                <InputContainer>
                  <label>Tipo de inscrição</label>
                  <InlineSelect name="typeInscription" options={typeInscriptionsOptions} />                  
                </InputContainer>

                <Options>
                  <CheckBoxes>
                    <SwitchContainer>
                      <Switch onChange={e => wantInternship = !wantInternship}/>
                      <Text>Você tem interesse em estágio/emprego para 2020?</Text>
                    </SwitchContainer>

                    <SwitchContainer>
                      <Switch onChange={e => wantMarathon = !wantMarathon} />
                      <Text>Gostaria de participar da maratona de programação?</Text>
                    </SwitchContainer>

                    <SwitchContainer>
                      <Switch onChange={e => wantGameChampionship = !wantGameChampionship}/>
                      <Text>Gostaria de participar do campeonato de jogos?</Text>
                    </SwitchContainer>
                  </CheckBoxes>              
                </Options>

                <Alert>
                  <span className="title">Atenção!</span>
                  <p> Alunos de TI, lembrem-se de levar um documento que comprove que você é aluno da área, como por exemlo, seu comprovante de matrícula ;D </p>

                  <CheckboxeContainer>
                    <Checkbox onChange={e => readAdvice = !readAdvice}  />
                    <p>Li o aviso acima e estou de acordo</p>
                  </CheckboxeContainer>
                
                </Alert>

                <button onClick={e => handleClickOpen(e)}>Cadastrar</button>
              </FormInternal>
            </RightSide>
          </RegisterContainer>

          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={900}
        >
          <DialogContainer>

            <DialogText>
              <p>Notei que você tem interesse em estágio ou emprego.</p>
              <p>Para chegar lá, conte-me mais sobre você:</p>
            </DialogText>

            <DialogInputContainer>
              <label>LinkedIn</label>
              <DialogInput name="linkedin" />
            </DialogInputContainer>

            <DialogInputContainer>
              <label>GitHub</label>
              <DialogInput name="github" />
            </DialogInputContainer>

            <DialogInputContainer>
              <label>Outros</label>
              <DialogInput name="others" />
            </DialogInputContainer>

            <CheckboxeContainer>
              <Checkbox onChange={e => shareLink = !shareLink} />
              <AdviceContainer>
                <p>Você concorda que a SEMAC envie esses links junto ao seu nome, para empresas de tecnologia?</p>
              </AdviceContainer>
            </CheckboxeContainer>

            <ButtonsContainer>
              <button onClick={handleClose}>Cancelar</button>
              <button type="submit">Confirmar</button>
            </ButtonsContainer>

          </DialogContainer>
        </Dialog>
          
        </MainContainer>
      </Form>
    </Fragment>
  );
}