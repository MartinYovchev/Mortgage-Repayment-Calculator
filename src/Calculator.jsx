import { useState } from 'react';
import './styles/calculator.scss';

// eslint-disable-next-line react/prop-types
const Calculator = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountNum = parseFloat(amount);
    const termNum = parseFloat(term);
    const rateNum = parseFloat(rate);

    if (isNaN(amountNum) || isNaN(termNum) || isNaN(rateNum)) {
      alert('Please enter valid numeric values for all fields.');
      return;
    }

    const formData = {
      amount: amountNum,
      term: termNum,
      rate: rateNum,
      type,
    };
    onCalculate(formData);
  };

  return (
    <div className="calculator">
      <h1 className="calculator-header">
        Mortgage Calculator{' '}
        <button
          className="clear-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Clear All
        </button>
      </h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="inputLabel">Mortgage Amount</label>
        <input
          id="mortgage-amount"
          value={amount}
          name="amount"
          type="text"
          pattern="\d+((\.)\d+)?"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <label className="inputLabel">Mortgage Term</label>
        <input
          id="mortgage-term"
          value={term}
          name="term"
          type="text"
          pattern="\d+((\.)\d+)?"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />

        <label className="inputLabel">Interest Rate</label>
        <input
          id="interest-rate"
          value={rate}
          name="rate"
          type="text"
          pattern="\d+((\.)\d+)?"
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />

        <div className="mortgage-type">
          <label className="inputLabel">Mortgage Type</label>

          <label className='statements'>
            Repayment
            <input
              type="radio"
              name="type"
              value="repayment"
              checked={type === 'repayment'}
              onChange={(e) => setType(e.target.value)}
            />
          </label>

          <label className='statements'>
            Interest Only
            <input
              type="radio"
              name="type"
              value="interest"
              checked={type === 'interest'}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
        </div>

        <button className="submit-button" type="submit">
          ⚙️Calculate Payment
        </button>
      </form>
    </div>
  );
};

export default Calculator;
