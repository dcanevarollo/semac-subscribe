import React, {Fragment, useState} from 'react'

import api from '../../services/api'

import Dialog from '@material-ui/core/Dialog';

import Checkbox from '@material-ui/core/Checkbox';

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

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [cpf, setCPF] = useState("");
  const [miniCourse1, setMiniCourse1] = useState("");
  const [miniCourse2, setMiniCourse2] = useState("");
  const [inscriptionType, setInscriptionType] = useState("");
  const [wantInternship, setWantInternship] = useState(false);
  const [marathonDevelopment, setMarathonDevelopment] = useState(false);
  const [gameChampionship, setGameChampionship] = useState(false);
  const [readAdvice, setReadAdvice] = useState(false);
  const [github, setGitHub] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [others, setOthers] = useState("");
  const [shareLink, setShareLink] = useState(false);

  const [open, setOpen] = useState(false);

  async function handleSubmit() {
    const response = await api.post("/inscription", {
      name,
      cpf,
      inscriptionType,
      tShirtSize: size,
      wantInternship,
      wantMarathon: marathonDevelopment,
      wantGameChampionship: gameChampionship,
      minicoursesCodes: [miniCourse1, miniCourse2],
      github,
      linkedin,
      otherLink: others
    })

    // TODO : axibir mensagem de confirmação de inscrição.
    if (response.success === true)
      alert("Sucesso!");
  }
  
  function handleClickOpen(e) {
    e.preventDefault();

    if (wantInternship)
      setOpen(true);
    else
      handleSubmit();
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
                <Name onChange={e => setName(e.target.value)} />
              </InputContainer>

              <SpacedContainer>
                <InputContainer>
                  <label>Tamanho de camiseta</label>
                  <select onChange={e => setSize(e.target.value)}>
                    <option disabled selected value=""></option>
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                    <option value="Extra GG">Extra GG</option>
                  </select>
                </InputContainer>

                <InputContainer>
                  <label>CPF</label>
                  <CPF maxLength='14' onChange={e => setCPF(MaskIt(e.target.value))} value={cpf} />
                </InputContainer>
              </SpacedContainer>

              <InputContainer>
                <label>Minicurso 1</label>
                <InlineSelect onChange={e => setMiniCourse1(e.target.value)} >
                  <option disabled selected value=""></option>
                  <option value="1" >Desenvolvimento de APIs Utilizando SpringBoot - Luiz Roberto Freitas</option>
                  <option value="2">Análise de Sinais de Áudio Musical - Thiago Fernandes Tavares</option>  
                </InlineSelect>
              </InputContainer>

              <InputContainer>
                <label>Minicurso 2</label>
                <InlineSelect onChange={e => setMiniCourse2(e.target.value)}>
                  <option disabled selected></option>
                  <option value="3">Introdução ao Processamento de Linguagem Natural com Python - Henrique Dezani</option>
                  <option value="4">...</option>
                </InlineSelect>
              </InputContainer>

              <InputContainer>
                <label>Tipo de inscrição</label>
                <InlineSelect onChange={e => setInscriptionType(e.target.value)}>
                  <option disabled selected></option>
                  <option value="1">Alunos de TI</option>
                  <option value="2">Professor/Servidor da UNESP</option>
                  <option value="3">Outros</option>
                </InlineSelect>
              </InputContainer>

              <Options>
                <CheckBoxes>
                  <SwitchContainer>
                    <Switch onChange={e => setWantInternship(!wantInternship)}/>
                    <Text>Você tem interesse em estágio/emprego para 2020?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch onChange={e => setMarathonDevelopment(!marathonDevelopment)} />
                    <Text>Gostaria de participar da maratona de programação?</Text>
                  </SwitchContainer>

                  <SwitchContainer>
                    <Switch onChange={e => setGameChampionship(!gameChampionship)}/>
                    <Text>Gostaria de participar do campeonato de jogos?</Text>
                  </SwitchContainer>
                </CheckBoxes>              
              </Options>

              <Alert>
                <span className="title">Atenção!</span>
                <p> Alunos de TI, lembrem-se de levar um documento que comprove que você é aluno da área, como por exemlo, seu comprovante de matrícula ;D </p>

                <CheckboxeContainer>
                  <Checkbox ckbox onChange={e => setReadAdvice(!readAdvice)}  />
                  <p>Li o aviso acima e estou de acordo</p>
                </CheckboxeContainer>
              
              </Alert>

              <button type="submit" onClick={e => handleClickOpen(e)}>Cadastrar</button>
            </Form>
          </RightSide>
        </RegisterContainer>
      </MainContainer>


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
            <DialogInput onChange={e => setLinkedIn(e.target.value)} value={linkedin}/>
          </DialogInputContainer>

          <DialogInputContainer>
            <label>GitHub</label>
            <DialogInput onChange={e => setGitHub(e.target.value)} value={github}/>
          </DialogInputContainer>

          <DialogInputContainer>
            <label>Outros</label>
            <DialogInput onChange={e => setOthers(e.target.value)} value={others}/>
          </DialogInputContainer>

          <CheckboxeContainer>
            <Checkbox onChange={e => setShareLink(!shareLink)} />
            <AdviceContainer>
              <p>Você concorda que a SEMAC envie esses links junto ao seu nome, para empresas de tecnologia?</p>
            </AdviceContainer>
          </CheckboxeContainer>

          <ButtonsContainer>
            <button onClick={handleClose}>Cancelar</button>
            <button onClick={handleSubmit}>Confirmar</button>
          </ButtonsContainer>

        </DialogContainer>
      </Dialog>
    </Fragment>
  );
}