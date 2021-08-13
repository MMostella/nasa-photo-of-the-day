import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title";
import Explanation from "./Explanation/Explanation";
import IMG from "./IMG";
import axios from "axios";
import { BASE_URL, API_KEY } from './constants/index'

import styled from 'styled-components';

const StyledApp = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: ${pr => pr.theme.backgroundColor};
  }

  h1 {
    margin: 1% 0;
  }
`

export default function App() {
  const [getDate, setGetDate] = useState('')
  const [docTitle, setDocTitle] = useState(null)
  const [expl, setExpl] = useState(null)
  const [copyright, setCopyright] = useState(null)
  const [date, setDate] = useState(null)
  const [img, setImg] = useState(null)

  const inputHandler = (event) => {
    setGetDate(event.target.value);
  }


  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${getDate}`)
    .then(res => {
      setDocTitle(res.data.title);
      setImg(res.data.url);
      setCopyright(res.data.copyright);
      setDate(res.data.date);
      setExpl(res.data.explanation);
    }, [])
  })

  return (
    <StyledApp className="App">
      <div>
        <Title class='title' title={docTitle}/>
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p> */}
        <IMG url={img} />
        {<p> </p>}
        {<input id='Date' type='date' onChange={inputHandler} />}
        <Explanation explanation={expl} date={date} copyright={copyright} />
      </div>
    </StyledApp >
  );
}
