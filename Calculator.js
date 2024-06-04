import React, { useState } from 'react';
import { Layout, Input, Button } from 'antd';

const { Content } = Layout;

const Calculator = () => {
  const [grams, setGrams] = useState('');
  const defaultGoldRate = 7100; // Set default gold rate
  const [totalValue, setTotalValue] = useState(0);

  const handleCalculate = () => {
    const gramsFloat = parseFloat(grams);
    if (!isNaN(gramsFloat)) {
      const value = gramsFloat * defaultGoldRate; // Calculate based on default gold rate
      setTotalValue(value);
    } else {
      // Handle invalid input
      setTotalValue(0);
    }
  };

  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1>Gold Rate Calculator</h1>
          <div>
            <Input
              type="number"
              value={grams}
              onChange={(e) => setGrams(e.target.value)}
              placeholder="Enter weight in grams"
              style={{ marginBottom: '10px' }}
            />
            <Input
              type="number"
              value={defaultGoldRate}
              disabled // Disable the input field
              placeholder="Enter gold rate per gram"
              style={{ marginBottom: '10px' }}
            />
            <Button type="primary" onClick={handleCalculate}>
              Calculate
            </Button>
            
          </div>
          {totalValue > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h2>Total Value:</h2>
              <p>{totalValue.toFixed(2)}</p>
            </div>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default Calculator;
