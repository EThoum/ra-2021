import { useState } from 'react';

import { Paragraphe } from './Paragraphe';
import { ParagrapheClass } from './ParagrapheClass';

import './styles/main.scss';


function App(props) {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(prevcount => prevcount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.text}</h1>
        <Paragraphe {...props} onClickHandler={onClickHandler} />
        <ParagrapheClass></ParagrapheClass>
        {count}
      </header>
    </div>
  );
}

export default App;
