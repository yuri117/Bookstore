import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Endereco from "./CheckoutComponents/Endereco";
import  Pagamento  from "./CheckoutComponents/Pagamento";
import Review from "./CheckoutComponents/Review";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';


const steps = ["Endereço de Entrega", "Forma de Pagamento", "Revise sua compra"];

function getStepContent(step,pnome,snome,rua,bairro,CEP,estado,cidade,nomeCartao,numCartao,cpfTitular,dataVenc,cvv,nextStep,change) {
  switch (step) {
    case 0:
      return <Endereco nextStep={nextStep} pnome={pnome} snome={snome} rua={rua} bairro={bairro} CEP={CEP} estado={estado} cidade={cidade} change={change} />;
    case 1:
      return <Pagamento nextStep={nextStep} change={change} nomeCartao = {nomeCartao} numCartao={numCartao} cpfTitular={cpfTitular} dataVenc = {dataVenc} cvv={cvv}   />;
    case 2:
      return <Review pnome={pnome} snome={snome} rua={rua} bairro={bairro} CEP={CEP} estado={estado} cidade={cidade} nomeCartao = {nomeCartao} numCartao={numCartao}/>;
    default:
      throw new Error("Sem próximo passo");
  }
}

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    pnome:'',
    snome:'',
    rua:'',
    bairro:'',
    CEP:'',
    estado:'',
    cidade:'',
    nomeCartao:'',
    numCartao:'',
    cpfTitular:'',
    dataVenc:'',
    cvv:''
  };

  handleNext = () => {
    console.log(this.state)
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    
    const { activeStep,pnome,snome,rua,bairro,CEP,estado,cidade,nomeCartao,numCartao,cpfTitular,dataVenc,cvv } = this.state;
    console.log(activeStep);
    return (
      <React.Fragment>
          <CssBaseline/>
          <main>
            <Paper sx={{width:"80%",margin:"auto",marginTop:5,padding:5}}>
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{width:"60%",margin:"auto"}}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <div style={{display:"flex",justifyContent:"center",width:"80%",margin:"auto",marginTop:8}}>
                    <Typography variant="h5" gutterBottom>
                      Obrigado por comprar conosco.
                    </Typography>
                    <Typography variant="subtitle1">
                      O número do seu pedido é 4556564.
                      Te enviamos um email de confirmação e você receberá atualizações da entrega de seu produto.
                    </Typography>
                  </div>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep,pnome,snome,rua,bairro,CEP,estado,cidade,nomeCartao,numCartao,cpfTitular,dataVenc,cvv,this.handleNext,this.handleChange)}
                    <div style={{display:"flex",justifyContent:"center",width:"80%",margin:"auto",marginTop:8}}>
                      {activeStep === 2 &&(
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}

                        >
                          Finalizar Pedido
                        </Button>
                      )}
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (Checkout);
