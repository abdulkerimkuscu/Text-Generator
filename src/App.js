import axios from "axios";
import './App.css';
import { useState, useEffect } from "react";
import Options from "./components/Options";
import Output from "./components/Output";

function App() {
  const[paragraphs, setParagraphs] = useState([]);
  const[tags, setTags] = useState("p");
  const[inputValue, setInputValue] = useState(1);
  const[includeHtml, setIncludeHtml] = useState("Yes")

  useEffect(() => {
    axios.get(`
    https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`)
    .then(data => setParagraphs(data.data))
  },[inputValue])
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Lorem Ipsum Text Generator</h1>
        </div>
      </div>
    <Options
    paragraphs={paragraphs}
    inputValue={inputValue}
    setInputValue={setInputValue}
    includeHtml={includeHtml}
    setIncludeHtml={setIncludeHtml}
    tags={tags}
    setTags={setTags}/>
    <Output
    paragraphs={paragraphs}
    tags={tags}
    includeHtml={includeHtml}
    />
    </div>

  );
}

export default App;
