/* eslint-disable react/prop-types */
import './styles/results.scss';

const Results = ({ formData }) => {
  const { amount, term, rate, type } = formData;

  const monthlyRate = rate / 100 / 12;

  const totalMonths = term * 12;

  let monthlyRepayment, totalRepayment;

  if (type === 'repayment') {
    monthlyRepayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
    totalRepayment = monthlyRepayment * totalMonths;
  } else {
    monthlyRepayment = amount * monthlyRate;
    totalRepayment = monthlyRepayment * totalMonths;
  }

  return (
    <div className="results">
      <h1>Your Results</h1>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayment&quot; again.
      </p>

      <div className="payment-block">
        <label className="result-label">Monthly Repayments: </label>
        <span className="monthly-repayments-amount">
          €{monthlyRepayment.toFixed(2)}
        </span>

        <hr />
        <label className="result-label">Total Repayments Over the Term: </label>
        <span className="total-repayments-amount">
          €{totalRepayment.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Results;
