import React, {Fragment, useState} from 'react'

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
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

  const [documentId, setCPF] = useState("")

  const [open, setOpen] = React.useState(false);

  const CheckboxDefault = withStyles({
    root: {
      color: 'rgba(255, 255, 255, 0.5)',
      '&$checked': {
        color: '#E20272',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

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
                  <CPF maxLength='14' onChange={e => setCPF(MaskIt(e.target.value))} value={documentId} />
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

              <InputContainer>
                <label>Tipo de inscrição</label>
                <InlineSelect>
                  <option disabled selected></option>
                  <option>Alunos de TI</option>
                  <option>Professor/Servidor da UNESP</option>
                  <option>Outros</option>
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

              <Alert>
                <span className="title">Atenção!</span>
                <p> Alunos de TI, lembrem-se de levar um documento que comprove que você é aluno da área, como por exemlo, seu comprovante de matrícula ;D </p>

                <CheckboxeContainer>
                  <CheckboxDefault />
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
            <DialogInput />
          </DialogInputContainer>

          <DialogInputContainer>
            <label>GitHub</label>
            <DialogInput />
          </DialogInputContainer>

          <DialogInputContainer>
            <label>Outros</label>
            <DialogInput />
          </DialogInputContainer>

          <CheckboxeContainer>
            <CheckboxDefault />
            <AdviceContainer>
              <p>Você concorda que a SEMAC envie esses links junto ao seu nome, para empresas de tecnologia?</p>
            </AdviceContainer>
          </CheckboxeContainer>

          <ButtonsContainer>
            <button onClick={handleClose}>Cancelar</button>
            <button onClick={handleClose}>Confirmar</button>
          </ButtonsContainer>

        </DialogContainer>
      </Dialog>
    </Fragment>
  );
}