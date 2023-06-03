import React, { Component } from "react";
import './estilo.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

  this.frases = [
  'Quanto mais uma pessoa se aproxima de uma mente calma, mais próximo ela está da força',
  'Siga os bons e aprenda com eles.', 
  'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.',
  'O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Mais graves são as consequências da raiva do que as suas causas.',
];

} 
  
quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
  state.textoFrase = '" ' + this.frases[numeroAleatorio] + '" ';
  this.setState(state)
}

render(){
    return(
      <div className="container">
        <img src={require('./assets/Biscoito.png')} className="img" />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
} 
class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
} 
export default App;
