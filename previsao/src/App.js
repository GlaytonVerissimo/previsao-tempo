import React, { useEffect, useState } from "react";
import X2JS from "x2js";
import axios from "axios";
import styled from "styled-components"




const Title = styled.div`
  display: block;
  font-size: 1.5em;
  text-align: center;
  color: blue;
  background-color: lightgrey;
  height: 5vw;
`
const Footer = styled.div`
  display: block;
  font-size: 1.5em;
  text-align: center;
  color: blue;
  background-color: lightgrey;
  height: 13vw;
 
`
const Geral = styled.div `
display: grid;
grid-template-columns:  25vw 25vw 25vw 25vw;
font-size: 1.3em;

`

const Body = styled.div`
background-image: url('https://thumbs.gfycat.com/RashAcademicGroundhog.webp');
    background-size: cover;
    
    height: 100vh;
    padding:0;
    margin:0;
`


function App() {
  const [vitoria, setVitoria] = useState([{}]);
  const [minas, setMinas] = useState ([{}]);
  const [saoPaulo, setSaoPaulo] = useState ([{}]);
  const [rio, setRio] = useState ([{}]);

  useEffect(() => {
    obtemObj();
  }, []);

  async function obtemObj() {
    await axios
      .get("http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml")
      .then((res) => {
        const x2js = new X2JS();
        const data = x2js.xml2js(res.data);
        const localizacoes = data.capitais.metar;
        let vitoria1 = [];
        let minas1 = [];
        let saoPaulo1 = [];
        let rio1 = [];

        // localizacoes.map((linha) => console.log(linha));

        localizacoes.forEach((cidadeEs) => {
          if (
            cidadeEs.codigo === "SBVT"  //vitória-ES
          
          ) {
            vitoria1.push(cidadeEs);
          } 
        });

        localizacoes.forEach((cidadeMg) => {
          if (
            cidadeMg.codigo === "SBCF"  //tancredo-neves-MG
          
          ) {
            minas1.push(cidadeMg);
          } 
        });

        localizacoes.forEach((cidadeSp) => {
          if (
            cidadeSp.codigo === "SBSP"  //congonhas-SP
          
          ) {
            saoPaulo1.push(cidadeSp);
          } 
        });

        localizacoes.forEach((cidadeRj) => {
          if (
            cidadeRj.codigo === "SBRJ"  //Santos-Dumont-RJ
          
          ) {
            rio1.push(cidadeRj);
          } 
        });


        console.log(vitoria1);
        console.log(minas1);
        console.log(saoPaulo1);
        console.log(rio1)
        setVitoria(vitoria1);
        setMinas(minas1)
        setSaoPaulo(saoPaulo1);
        setRio(rio1)
      })
      .catch((err) => {
        console.log(err);
      });
  }


    /*linha.codigo === "SBCF" || //tancredo-neves-MG
          linha.codigo === "SBSP" || //congonhas-SP
          linha.codigo === "SBRJ"    //Santos-Dumont-RJ*/
  

  return (
    
    <div>
      <Body>
      <Title>
      <h1>PREVISÃO DO TEMPO - REGIÃO SUDESTE</h1> 
      </Title>

      
      <Geral>
      
      <ol>
      <h2>Vitória</h2>

      Atualizado em {vitoria[0].atualizacao}
      <br/>
      Temperatura atual {vitoria[0].temperatura}ºC <img width='22px' height='22px' src ="https://image.flaticon.com/icons/png/512/40/40532.png"/>
      <br/>
      Pressão atmosférica {vitoria[0].pressao} atm
      <br/>
      Umidade relativa do ar {vitoria[0].umidade}%
      </ol>

      <ol>
        <h2>Minas Gerais</h2>

      Atualizado em {minas[0].atualizacao}
      <br/>
      Temperatura atual {minas[0].temperatura}ºC <img width='22px' height='22px' src ="https://image.flaticon.com/icons/png/512/40/40532.png"/>
      <br/>
      Pressão atmosférica {minas[0].pressao} atm
      <br/>
      Umidade relativa do ar {minas[0].umidade}%
      </ol>


      <ol>
        <h2>São Paulo</h2>

      Atualizado em {saoPaulo[0].atualizacao}
      <br/>
      Temperatura atual {saoPaulo[0].temperatura}ºC <img width='22px' height='22px' src ="https://image.flaticon.com/icons/png/512/40/40532.png"/>
      <br/>
      Pressão atmosférica {saoPaulo[0].pressao} atm
      <br/>
      Umidade relativa do ar {saoPaulo[0].umidade}%
      </ol>

      
      <ol>
        <h2>Rio de Janeiro</h2>

      Atualizado em {rio[0].atualizacao}
      <br/>
      Temperatura atual {rio[0].temperatura}ºC <img width='22px' height='22px' src ="https://image.flaticon.com/icons/png/512/40/40532.png"/>
      <br/>
      Pressão atmosférica {rio[0].pressao} atm
      <br/>
      Umidade relativa do ar {rio[0].umidade}%
      </ol>

      </Geral>
      

      </Body>
      <Footer>
        Desenvolvido por
        <br/>
        Glayton Verissimo
        <br/>
        Jefferson Costa
        <br/>
        José Renato Madeira 
        <br/>
        Marcos Pastora 
        <br/>
        Ravel Cravo 
        <br/>
        Wasny Henrique 
      </Footer>
    </div>
    
      
   
  );
}
export default App;
