import { useState } from 'react';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');

  return (
    <div className="calculator">
      <form>
        <label className="mortgageAmount">
          Mortgage Amount <br />
          <input
            id="mortgage-amount"
            value={amount}
            name="mortgage-amount"
            onChange={(e) => {
                setAmount(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label htmlFor="mortgageTerm">
          Mortgage Term <br />
          <input
            id="mortgage-term"
            value={term}
            onChange={(e) => {
                setTerm(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <lable htmlFor="interestRate">
          Interest Rate <br />
          <input
            id="interest-rate"
            value={rate}
            onChange={(e) => {
                setRate(e.target.value);
            }}
          ></input>
        </lable>
        <br />
        <div className="mortgage-type">
          <lable htmlFor="mortgageType">
            Mortgage Type <br />
          </lable>
          <label htmlFor="replayment">Repayment</label>
          <input
            type="radio"
            name="mortgage"
            value="repayment"
            defaultChecked
          />
          <label htmlFor="interest">Interest Only</label>
          <input type="radio" name="mortgage" value="interest-only" />
        </div>
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Calculate Payment
        </button>
        <button>Clear All</button>
      </form>
    </div>
  );
};
export default Calculator;
