import { useState } from 'react';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');
  // eslint-disable-next-line no-unused-vars
  const [requestData, setRequestData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { amount, term, rate, type };
    console.log(formData);
    setRequestData(formData);
  };

  return (
    <div className="calculator">
      <h1 className="calculator-header">Mortgage Calculator</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="mortgageAmount">
          Mortgage Amount <br />
          <input
            id="mortgage-amount"
            value={amount}
            name="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="mortgageTerm">
          Mortgage Term <br />
          <input
            id="mortgage-term"
            value={term}
            name="term"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="interestRate">
          Interest Rate <br />
          <input
            id="interest-rate"
            value={rate}
            name="rate"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
        </label>
        <br />
        <div className="mortgage-type">
          <label htmlFor="mortgageType">
            Mortgage Type <br />
          </label>

          <label htmlFor="repayment">
            Repayment
            <input
              type="radio"
              name="type"
              value="repayment"
              checked={type === 'repayment'}
              onChange={(e) => setType(e.target.value)}
            />
          </label>

          <label htmlFor="interest">
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
        <br />
        <button className="submit-button" type="submit">
          Calculate Payment
        </button>
        <button
          className="clear-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Clear All
        </button>
      </form>
    </div>
  );
};

export default Calculator;
