import './App.css';
import React, { useState } from 'react';

function App() {
  const [sonuc, setSonuc] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');
  const [displayHistory, setDisplayHistory] = useState('');

  const handleButtonClick = (buttonSymbol) => {
    if (buttonSymbol === 'C' || buttonSymbol === 'AC') {
      setSonuc('');
      setFirstValue('');
      setSecondValue('');
      setOperator('');
      setDisplayHistory(sonuc ? sonuc : '');
    } else if (buttonSymbol === '+' || buttonSymbol === '-' || buttonSymbol === '*' || buttonSymbol === '/' || buttonSymbol === '%') {
      if (firstValue && !operator) {
        setOperator(buttonSymbol);
        setDisplayHistory((prev) => prev + ' ' + buttonSymbol + ' ');
      }
    } else if (buttonSymbol === '=') {
      if (firstValue && operator && secondValue) {
        calculateResult();
      }
    } else {
      if (!operator) {
        setFirstValue((prev) => prev + buttonSymbol);
        setDisplayHistory((prev) => prev + buttonSymbol);
      } else {
        setSecondValue((prev) => prev + buttonSymbol);
        setDisplayHistory((prev) => prev + buttonSymbol);
      }
    }
  };

  const calculateResult = () => {
    let result;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = (num1 * num2) / 100;
        break;
      default:
        result = '';
    }

    setSonuc(result.toString());
    setDisplayHistory(displayHistory + " = " + result.toString());
    setFirstValue(result.toString());
    setSecondValue('');
    setOperator('');

  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display-container">
          <div className="display-history">
            {displayHistory}
          </div>
          <div className="display">
            {operator ? (secondValue ? secondValue : '0') : (firstValue ? firstValue : '0')}
          </div>
        </div>
        <div className="controls-container">
          <div className="controls-row">
            <div className="control-button top-left-control" onClick={() => handleButtonClick('C')}>
              <div className="rectangle" />
              <div className="button-text">C</div>
            </div>
            <div className="control-button top-left-control" onClick={() => handleButtonClick('AC')}>
              <div className="rectangle" />
              <div className="button-text">AC</div>
            </div>
            <div className="control-button top-left-control" onClick={() => handleButtonClick('%')}>
              <div className="rectangle" />
              <div className="button-text">%</div>
            </div>
            <div className="control-button button-right" onClick={() => handleButtonClick('/')}>
              <div className="rectangle" />
              <div className="button-text">/</div>
            </div>
          </div>
          <div className="controls-row">
            <div className="control-button button" onClick={() => handleButtonClick('7')}>
              <div className="rectangle" />
              <div className="button-text">7</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('8')}>
              <div className="rectangle" />
              <div className="button-text">8</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('9')}>
              <div className="rectangle" />
              <div className="button-text">9</div>
            </div>
            <div className="control-button button-right" onClick={() => handleButtonClick('*')}>
              <div className="rectangle" />
              <div className="button-text">*</div>
            </div>
          </div>
          <div className="controls-row">
            <div className="control-button button" onClick={() => handleButtonClick('4')}>
              <div className="rectangle" />
              <div className="button-text">4</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('5')}>
              <div className="rectangle" />
              <div className="button-text">5</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('6')}>
              <div className="rectangle" />
              <div className="button-text">6</div>
            </div>
            <div className="control-button button-right" onClick={() => handleButtonClick('-')}>
              <div className="rectangle" />
              <div className="button-text">-</div>
            </div>
          </div>
          <div className="controls-row">
            <div className="control-button button" onClick={() => handleButtonClick('1')}>
              <div className="rectangle" />
              <div className="button-text">1</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('2')}>
              <div className="rectangle" />
              <div className="button-text">2</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('3')}>
              <div className="rectangle" />
              <div className="button-text">3</div>
            </div>
            <div className="control-button button-right" onClick={() => handleButtonClick('+')}>
              <div className="rectangle" />
              <div className="button-text">+</div>
            </div>
          </div>
          <div className="controls-row">
            <div className="control-button wide-button" onClick={() => handleButtonClick('0')}>
              <div className="rectangle" />
              <div className="button-text">0</div>
            </div>
            <div className="control-button button" onClick={() => handleButtonClick('.')}>
              <div className="rectangle" />
              <div className="button-text">.</div>
            </div>
            <div className="control-button button-right" onClick={() => handleButtonClick('=')}>
              <div className="rectangle" />
              <div className="button-text">=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
