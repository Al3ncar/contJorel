import React from "react";

import Lara from "./img/Lara.webp"
import irmao from "./img/irmao.png"
import Log from "./img/logo.webp"

import GlobalStyle from "./styled.js";
import styled from "styled-components"
  const BoxResult = styled.div`
    width:100%;
    padding-top:2%;
    display:flex;
    justify-content:center;
    align-items:center;
  `
  const Result = styled.h1`
    width:20%;
    padding:1%;
    border-radius:0.5vw;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width: 500px){
      width:30%;
      background-color:#57fa0b81;
    }
    
  `
  const BoxBtn = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#ffffff81;
    position:absolute;
    bottom:0%;
    @media(max-width: 500px){
      background-color:#57fa0b81;
    }
    
  `
  const Btn = styled.button`
    width:8%;
    border:none;
    background:transparent;
    @media(max-width:500px){
      width:22%;
    }
  `
  const  Btns = styled.button`
    width:7%;
    display:flex;
    justify-content:center;
    align_items:center;
    border:none;
    background:transparent;
    @media(max-width:500px){
      width:18%;
    }
  `
  const Img = styled.img`
    width:100%;
  `
export default class App extends React.Component{
  state = {
    n1: 0
  }

  Cont = () => {
    const times = setInterval(() => {
      this.setState((prevState) => ({
        n1: prevState.n1 +1
      }))
    }, 1000)

    this.stop = () =>{
      clearInterval(times)
    }

  }

  clear = () => {
    this.setState((prev) => ({
      n1: 0
    }))
  }

  render(){
    const {n1} = this.state
    return(
      <main>
        <GlobalStyle/>
        <div>
          <img src="" alt=""/>
        </div>
        <BoxResult>
          <Result>{n1}</Result>
        </BoxResult>
        <BoxBtn>
          <Btn onClick={this.Cont}>
            <Img src={irmao} alt=""/>
          </Btn>
          <Btns onClick={this.stop}>
            <Img src={Log} alt=""/>
          </Btns>
          <Btns onClick={this.clear}>
            <Img src={Lara} alt=""/>
          </Btns>
        </BoxBtn>
      </main>
    )
  }
}