const Results = () => {
  return (
    <div className="results">
      <h1 className="results-header">Your Results</h1>
      <p className="description">
        Your results are shown below based on the information you provided. To
        adjust the results, edit tghe form and click Calculate Repayments again.
      </p>
      <div className="payment-block">
        <label htmlFor="monthly-repayments">
          Your monthly repayments
          <span className="monthly-repayments-amount">1,000</span>
        </label>
        <hr />
        <label htmlFor="total-repayments">
          Total you&apos;ll repay over the term
          <span className="total-repayments-amount">123,000</span>
        </label>
      </div>
    </div>
  );
};
export default Results;
