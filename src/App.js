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
  'O objetivo de uma discussão não deve ser a vitória mas sim o progresso.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Precisamos evoluir e entender que pensar diferente não nos torna inimigos.',
  'Onde dialogam pessoas sábias, pensamentos diferentes não geram conflitos, geram novas ideias.',
  'Bons hábitos são construídos na base da disciplina e não da motivação.',
  'A busca pela excelência não deve ser um objetivo mas sim um hábito.',
  'Sofremos mais na imaginação do que na realidade.',
  'Mais graves são as consequências da raiva do que as suas causas.',
  'Enquanto você vive, continue aprendendo a viver.',
  'Se palavras te controlam, qualquer um pode te controlar.',
  'Maturidade é saber ficar em silêncio, messmo quando temos muito a dizer.',
  'Cada fracasso nos ensina algo que precisamos aprender.',
  'Ter sucesso não é não fracassar...É não desistir apesar dos fracassos'
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
        <h1>Biscoito da Sorte</h1>
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
