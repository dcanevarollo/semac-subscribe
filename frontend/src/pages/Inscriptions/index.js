/**
 * @author Douglas Brandão
 * 
 * Componente de visualização da tela de inscrição.
 */
import React, { Fragment, useState } from 'react'

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
  CheckboxContainer,
  AlertText,
  DialogContainer,
  DialogInputContainer,
  DialogInput,
  AdviceContainer,
  DialogText,
  ButtonsContainer,
  AlertMessageContainer,
  PayPalSection
} from './styles' 

import Switch from '@material-ui/core/Switch';

import rocket from '../../assets/rocket.png'

/* Variáveis booleanas que o usuário poderá manipular. */
let wantInternship = false;
let wantMarathon = false;
let wantGameChampionship = false;
let readAdvice = false;
let shareLink = false;

export default function Inscriptions() {

  /**
   * Caixa de alerta dinâmica.
   */
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
    {id: "Alunos de TI", title: "Alunos de TI - R$80,00"},
    {id: "Professores e Servidores", title: "Professor/Servidor da UNESP - R$90,00"},
    {id: "Demais", title: "Demais - R$100,00"},
  ]

  const [openDialog, setOpenDialog] = useState(false);
  const [cpf, setCPF] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false)

  /**
   * Aplica a máscara do campo de CPF.
   * 
   * @param {String} cpf : texto que será mascarado.
   * @returns CPF no formato XXX.XXX.XXX-XX.
   */
  function maskCpf(cpf) {
    return cpf
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

  /**
   * Seleciona, no select do formulário de redirecionamento do PayPal, o tipo de inscrição do usuário.
   * 
   * @param {Object} data : dados retornados do formulário.
   */
  function selectPayPalValue(data) {
    if (data.inscriptionType === "Alunos de TI") {
      document.getElementById('opt-ti-student').selected = true;
    } else if (data.inscriptionType === "Professores e Servidores") {
      document.getElementById('opt-professors-servers').selected = true;
    } else {
      document.getElementById('opt-others').selected = true;
    }
  }

  /**
   * Cuida da lógica responsável pelo evento de submit do formulário de cadastro.
   * 
   * @param {Object} data : dados retornados do formulário. 
   */
  async function handleSubmit(data) {
    /* Se o dialog de informações extras (GitHub, LinkedIn...) não está aberto e o usuário quer emprego ou vaga de está-
    gio, o dialog em questão deve então ser aberto. */
    if (!openDialog && wantInternship) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);

      /* Envia o formulário a API apenas se o usuário selecionou o checkbox de aviso obrigatório. */
      if (readAdvice) {
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

        /* Se obteve sucesso, redireciona para a página de pagamento do PayPal após 1.5s. */
        if (response.data.message.search("sucesso") !== -1) {
          setTimeout(() => {
            selectPayPalValue(data);
            document.getElementById('paypal-form').submit();
          }, 1500);
        }
      } else {
        setResponseMessage("Confirme que você leu o aviso antes de se cadastrar!");
        setShowAlert(true);
      }
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
                <br/><br/>
                Após completar seu cadastro, você será redirecionado para a tela de pagamento do 
                <strong> PayPal</strong>.
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
                    <CPF name="cpf" onChange={e => {setCPF(maskCpf(e.target.value))}} value={cpf}/>
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

                  <CheckboxContainer>
                    <Checkbox onChange={() => readAdvice = !readAdvice} />
                    <p>Li o aviso acima e estou de acordo</p>
                  </CheckboxContainer>
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

              <CheckboxContainer>
                <Checkbox onChange={() => shareLink = !shareLink} />

                <AdviceContainer>
                  <p>Você concorda que a SEMAC envie esses links, junto ao seu nome, para empresas de tecnologia?</p>
                </AdviceContainer>
              </CheckboxContainer>

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

        {/* Formulário escondido que o PayPal utiliza para redirecionamento. */}
        <PayPalSection>
          <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="POST" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="4BP4AQDNW68Z6" />

            <table>
              <tbody>
                <tr>
                  <td><input type="hidden" name="on0" value="SEMAC 2019" /></td>
                </tr>
                
                <tr>
                  <td>
                    <select name="os0">
                      <option id="opt-ti-student" value="Alunos de TI" />
                      <option id="opt-professors-servers" value="Professores e Servidores" />
                      <option id="opt-others" value="Demais" />
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <input type="hidden" name="currency_code" value="BRL" />
            <input 
              type="image" 
              src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif" 
              border="0" 
              name="submit" 
              alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
            />
            <img alt="" 
              border="0" 
              src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" 
              width="1" 
              height="1" 
            />
          </form>
        </PayPalSection>
      </MainContainer>
    </Fragment>
  );
  
}
