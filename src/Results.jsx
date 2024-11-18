/* eslint-disable react/prop-types */

const Results = ({ formData }) => {
  const { amount, term, rate, type } = formData;

  const monthlyRate = rate / 100 / 12;

  const totalMonths = term * 12;

  let monthlyRepayment, totalRepayment;

  if (type === 'repayment') {
    monthlyRepayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
    totalRepayment = monthlyRepayment * totalMonths;
  } else if (type === 'interest') {
    monthlyRepayment = amount * monthlyRate;
    totalRepayment = monthlyRepayment * totalMonths;
  }

  return (
    <div className="results">
      <h1>Your Results</h1>
      <p>Here is what you can expect based on the provided information:</p>

      <div className="payment-block">
        <label htmlFor="monthly-repayments">
          Monthly Repayments:
          <span className="monthly-repayments-amount">
            {monthlyRepayment.toFixed(2)} €
          </span>
        </label>
        <hr />
        <label htmlFor="total-repayments">
          Total Repayments Over the Term:
          <span className="total-repayments-amount">
            {totalRepayment.toFixed(2)} €
          </span>
        </label>
      </div>
    </div>
  );
};

export default Results;
