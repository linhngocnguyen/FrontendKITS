import { useState } from 'react';
import { Layout, Space, Typography, InputNumber, Select, Button } from 'antd';
import './UnitConverter.css';

const { Title, Text } = Typography;
const { Option } = Select;

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('0');
  const [fromUnit, setFromUnit] = useState('--Select an unit--');
  const [toUnit, setToUnit] = useState('--Select an unit--');
  const [unitType, setUnitType] = useState('--Select an unit--');

  const convertLength = (value, from, to) => {
    const conversions = {
      meters: 1,
      feet: 3.28084,
      miles: 0.000621371,
      kilometers: 1000,
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

  const handleInputChange = (value) => {
    setInputValue(value)
  };

  const handleFromUnitChange = (value) => {
    setFromUnit(value);
  };

  const handleToUnitChange = (value) => {
    setToUnit(value);
  };

  const handleUnitTypeChange = (value) => {
    setUnitType(value);
    setFromUnit('');
    setToUnit('');
    setInputValue('');
  };

  const handleUnitReverse = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  let convertedValue;
if (fromUnit === toUnit) {
  convertedValue = inputValue;
} else if (unitType === 'length') {
  convertedValue = convertLength(inputValue, fromUnit, toUnit);
} else if (unitType === 'mass') {
  convertedValue = convertMass(inputValue, fromUnit, toUnit);
} else if (unitType === 'currency' && fromUnit !== '' && toUnit !== '' && fromUnit !== toUnit) {
  convertedValue = convertCurrency(inputValue, fromUnit, toUnit).toFixed(2);
}

  let unitOptions;
  if (unitType === 'length') {
    unitOptions = ['--Select an unit--', 'meters', 'feet', 'miles', 'kilometers', 'yards', 'inches'];
  } else if (unitType === 'mass') {
    unitOptions = ['--Select an unit--', 'kilograms', 'pounds', 'ounces', 'grams', 'tons'];
  } else if (unitType === 'currency') {
    unitOptions = ['--Select an unit--', 'USD', 'EUR', 'GBP', 'JPY'];
  }

  return (
    <Layout className='unit-converter'>
      <Title level={2}>Unit Converter</Title>
      <Space>
        <Text strong>Input value:</Text>
        <InputNumber min={0} value={inputValue} style={{width: 150}} onChange={handleInputChange} />
      </Space>
      <Space>
        <Text strong>Unit type:</Text>
        <Select value={unitType} onChange={handleUnitTypeChange} style={{width: 150}}>
          <Option value="length">Length</Option>
          <Option value="mass">Mass</Option>
          <Option value="currency">Currency</Option>
        </Select>
      </Space>
      <Space>
        <Text strong>From unit:</Text>
        <Select value={fromUnit} onChange={handleFromUnitChange} placeholder="Select unit" disabled={!unitOptions} style={{width: '150px'}}>
          {unitOptions && unitOptions.map((unit) => (
           <Option key={unit} value={unit}>{unit}</Option>
          ))}
        </Select>
      </Space>
      <Space>
        <Button onClick={handleUnitReverse}>Swap Units</Button>
      </Space>
      <Space>
        <Text strong>To unit:</Text>
        <Select value={toUnit} onChange={handleToUnitChange} placeholder="Select unit" disabled={!unitOptions} style={{width: '150px'}}>
          {unitOptions && unitOptions.map((unit) => (
            <Option key={unit} value={unit}>{unit}</Option>
          ))}
        </Select>
      </Space>
      <Space>
        <Text strong>Converted value:</Text>
        <Text>{convertedValue}</Text>
      </Space>
    </Layout>
  );
};

export default UnitConverter;