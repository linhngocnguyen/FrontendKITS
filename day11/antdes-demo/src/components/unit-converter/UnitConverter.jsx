import { useState } from 'react';
import { Layout, Space, Typography } from 'antd';
const {Title} = Typography
const UnitConverter = () => {
  // Define state variables for the input values and selected units
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('feet');
  const [unitType, setUnitType] = useState('length');

  // Define conversion functions for length, mass, and currency
  const convertLength = (value, from, to) => {
    const conversions = {
      meters: 1,
      feet: 3.28084,
      miles: 0.000621371,
      kilometers: 0.001,
      yards: 1.09361,
      inches: 39.3701
    };
    const fromValue = conversions[from];
    const toValue = conversions[to];
    return value * (fromValue / toValue);
  };

  const convertMass = (value, from, to) => {
    const conversions = {
      kilograms: 1,
      pounds: 2.20462,
      ounces: 35.274,
      grams: 1000,
      tons: 0.001
    };
    const fromValue = conversions[from];
    const toValue = conversions[to];
    return value * (fromValue / toValue);
  };

  const convertCurrency = (value, from, to) => {
    // You can use an API to get the latest exchange rates or use a fixed rate
    const exchangeRates = {
      USD: {
        EUR: 0.842,
        GBP: 0.726,
        JPY: 110.80
      },
      EUR: {
        USD: 1.187,
        GBP: 0.864,
        JPY: 131.49
      },
      GBP: {
        USD: 1.376,
        EUR: 1.157,
        JPY: 152.88
      },
      JPY: {
        USD: 0.00903,
        EUR: 0.00760,
        GBP: 0.00652
      }
    };
    const fromRate = exchangeRates[from][to];
    const toRate = exchangeRates[to][from];
    return value * fromRate / toRate;
  };

  // Define a function to handle the input change event
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Define a function to handle the "from" unit change event
  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  // Define a function to handle the "to" unit change event
  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  // Define a function to handle the unit type change event
  const handleUnitTypeChange = (event) => {
    setUnitType(event.target.value);
    // Reset the unit options when the unit type changes
    setFromUnit('');
    setToUnit('');
    setInputValue('');
  };

  const handleUnitReverse = () => {
    const temp=fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  }

  // Calculate the converted value based on the selected units and input value
  let convertedValue;
  if (fromUnit === toUnit) {
    convertedValue = inputValue;
  } else if (unitType === 'length') {
    convertedValue = convertLength(inputValue, fromUnit, toUnit);
  } else if (unitType === 'mass') {
    convertedValue = convertMass(inputValue, fromUnit, toUnit);
  } else if (unitType === 'currency') {
    convertedValue = convertCurrency(inputValue, fromUnit, toUnit).toFixed(2);
  }

  // Define the unit options based on the selected unit type
  let unitOptions;
  if (unitType === 'length') {
    unitOptions = ['meters', 'feet', 'miles', 'kilometers', 'yards', 'inches'];
  } else if (unitType === 'mass') {
    unitOptions = ['kilograms', 'pounds', 'ounces', 'grams', 'tons'];
  } else if (unitType === 'currency') {
    unitOptions = ['USD', 'EUR', 'GBP', 'JPY'];
  }

  // Render the user interface
  return (
    <Layout style={{alignItems: 'center'}}>
      <Title level={2}>Unit Converter</Title>
      <Space style={{height: 120}}>
        <label>Input value:</label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </Space>
      <Space>
        <label>Unit type:</label>
        <select value={unitType}onChange={handleUnitTypeChange}>
          <option value="length">Length</option>
          <option value="mass">Mass</option>
          <option value="currency">Currency</option>
        </select>
      </Space>
      <Space>
        <label>From unit:</label>
        <select value={fromUnit} onChange={handleFromUnitChange}>
          <option value="" disabled>Select unit</option>
          {unitOptions && unitOptions.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </Space>
      <Space>
        <label>To unit:</label>
        <select value={toUnit} onChange={handleToUnitChange}>
          <option value="" disabled>Select unit</option>
          {unitOptions && unitOptions.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </Space>
      <Space>
        <button onClick={handleUnitReverse}>Swap Units</button>
      </Space>
      <Space>
        <label>Converted value:</label>
        <span>{convertedValue}</span>
      </Space>
    </Layout>
  );
};

export default UnitConverter;