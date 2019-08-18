import React, {Fragment, useState} from 'react'

import api from '../../services/api'

import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { Form } from '@rocketseat/unform'

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
  AlertText,
  DialogContainer,
  DialogInputContainer,
  DialogInput,
  AdviceContainer,
  DialogText,
  ButtonsContainer,
  AlertMessageContainer
} from './styles' 

import Switch from '@material-ui/core/Switch';

import rocket from '../../assets/rocket.png'

let wantInternship = false;
let wantMarathon = false;
let wantGameChampionship = false;
let readAdvice = false;
let shareLink = false;

export default function Inscriptions() {

  const AlertBox = withStyles({
    root: {
      '& .MuiDialog-paper': {
        borderRadius: 20,
        backgroundColor: "transparent"
      },
      '& .MuiDialog-paperScrollPaper': {
        borderRadius: 20,
      },
      '& .MuiPaper-rounded': {
        borderRadius: 20,
      },
      '& .MuiDialog-paperWidthSm': {
        borderRadius: 20,
      }
    },
  })(Dialog);

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

  const [openDialog, setOpenDialog] = useState(false);
  const [cpf, setCPF] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false)

  function MaskIt(value) {
    return value
      /* Substitui qualquer caractere que não seja número por nada. */
      .replace(/\D/g, '')
      /* Captura 2 grupos de números: o primeiro de 3 e o segundo de 1. Após capturar o primeiro grupo ele adiciona um
       ponto antes do segundo grupo de números. */
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      /* Captura 2 números seguidos de um traço e não deixa ser digitado mais nada. */
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  async function handleSubmit(data) {
    if (!openDialog && wantInternship) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);

      const response = await api.post("/inscription", {
        name: data.name,
        cpf: data.cpf,
        inscriptionType: data.inscriptionType,
        tShirtSize: data.tShirtSize,
        wantInternship: wantInternship,
        wantMarathon: wantMarathon,
        wantGameChampionship: wantGameChampionship,
        shareLink: shareLink,
        minicourse1: data.miniCourse1,
        minicourse2: data.miniCourse2,
        github: data.github !== undefined ? data.github : "",
        linkedin: data.linkedin !== undefined ? data.linkedin : "",
        otherLink: data.others !== undefined ? data.others : ""
      })

      setResponseMessage(response.data.message);
      setShowAlert(true);
    }
  }

  return (
    <Fragment>
        <MainContainer>
          <Form id="main-form" onSubmit={handleSubmit}>
            <RegisterContainer>
              <LeftSide>
                <Rocket src={rocket} />

                <h1>Bem vindo!</h1>
                <p>
                  Agradecemos o interesse pelo evento. Para realizar sua inscrição, preencha os campos ao lado.
                  <br/><br/>
                  <strong>Atenção!</strong> Campos com <span>*</span> são obrigatórios.
                </p>
              </LeftSide>

              
              <RightSide>
                <h1>Faça seu cadastro e participe do evento!</h1>
                <h3>É rapidinho, prometo</h3>

                <FormInternal>
                  <InputContainer>
                    <label>Nome</label>
                    <Name name="name"/>
                  </InputContainer>

                  <SpacedContainer>
                    <InputContainer>
                      <label>Tamanho de camiseta</label>
                      <SelectSizes name="tShirtSize" options={optionsSizes} />
                    </InputContainer>

                    <InputContainer>
                      <label>CPF</label>
                      <CPF name="cpf" onChange={e => {setCPF(MaskIt(e.target.value))}} value={cpf}/>
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
                    <InlineSelect name="inscriptionType" options={typeInscriptionsOptions} />                  
                  </InputContainer>

                  <Options>
                    <CheckBoxes>
                      <SwitchContainer>
                        <Switch onChange={() => wantInternship = !wantInternship} />
                        <Text>Você tem interesse em estágio/emprego para 2020?</Text>
                      </SwitchContainer>

                      <SwitchContainer>
                        <Switch onChange={() => wantMarathon = !wantMarathon} />
                        <Text>Gostaria de participar da maratona de programação?</Text>
                      </SwitchContainer>

                      <SwitchContainer>
                        <Switch onChange={() => wantGameChampionship = !wantGameChampionship}/>
                        <Text>Gostaria de participar do campeonato de jogos?</Text>
                      </SwitchContainer>
                    </CheckBoxes>              
                  </Options>

                  <AlertText>
                    <span className="title">Atenção!</span>
                    <p> Alunos de TI, lembrem-se de levar um documento que comprove que você é aluno da área, como por 
                      exemlo, seu comprovante de matrícula. ;D 
                    </p>

                    <CheckboxeContainer>
                      <Checkbox onChange={() => readAdvice = !readAdvice} />
                      <p>Li o aviso acima e estou de acordo</p>
                    </CheckboxeContainer>
                  </AlertText>

                  <button type="submit">Cadastrar</button>
                </FormInternal>
              </RightSide>
              
            </RegisterContainer>

            <Dialog
              open={openDialog}
              onClose={() => setOpenDialog(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="900px"
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
                  <Checkbox onChange={() => shareLink = !shareLink} />

                  <AdviceContainer>
                    <p>Você concorda que a SEMAC envie esses links, junto ao seu nome, para empresas de tecnologia?</p>
                  </AdviceContainer>
                </CheckboxeContainer>

                <ButtonsContainer>
                  <button type="button" onClick={() => setOpenDialog(false)}>Cancelar</button>
                  <button type="submit" form="main-form">Confirmar</button>
                </ButtonsContainer>
              </DialogContainer>
            </Dialog>
          </Form>

          <AlertBox open={showAlert} onClose={() => setShowAlert(false)}>
            <AlertMessageContainer>
              <h1>{responseMessage}</h1>

              <ButtonsContainer>
                <button onClick={() => setShowAlert(false)}>Voltar</button>
              </ButtonsContainer>
            </AlertMessageContainer>
          </AlertBox>
        </MainContainer>
    </Fragment>
  );
  
}
