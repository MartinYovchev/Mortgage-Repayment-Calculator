import { useState } from 'react';
import Calculator from './Calculator';
import Results from './Results';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleCalculate = (data) => {
    setFormData(data);
  };

  return (
    <div className="wrapper">
      <Calculator onCalculate={handleCalculate} />
      {formData && <Results formData={formData} />}
    </div>
  );
};

export default App;
