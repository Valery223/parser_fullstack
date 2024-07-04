import React, { useState } from 'react';
import { Input, Space, Select, InputNumber } from 'antd';
import VacancyTable from './componets/VacancyTable';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select;

const App = () => {
  const [vacancies, setVacancies] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [period, setPeriod] = useState('all'); // '7days', '20days', 'all'
  const [salary, setSalary] = useState(null);
  const [currency, setCurrency] = useState('RUR'); // 'RUR', 'EUR'

  const fetchVacancy = (value) => {
    const params = {
      text: value,
      period: period !== 'all' ? period : undefined,
      salary_from: salary !== null ? salary : undefined,
      currency: currency
    };

    axios.get('http://127.0.0.1:8000/api/v1/vacancies/', { params })
      .then(response => {
        console.log('Response', response.data);
        setVacancies(response.data.slice(0, perPage));
      })
      .catch(error => {
        console.error('Error fetching vacancies', error);
      });
  }

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    fetchVacancy(value);
  }

  return (
    <div >
      <Space direction="vertical">
        <Search placeholder="input search vacancy" onSearch={onSearch} enterButton style={{ width: 320 }}/>
        
        <Select value={period} onChange={setPeriod} style={{ width: 120 }}>
          <Option value="7">7 дней</Option>
          <Option value="20">20 дней</Option>
          <Option value="100">Всё время</Option>
        </Select>

        <InputNumber 
          value={salary} 
          onChange={setSalary} 
          placeholder="Зарплата" 
          style={{ width: 200 }} 
        />

        <Select value={currency} onChange={setCurrency} style={{ width: 120 }}>
          <Option value="RUR">Руб</Option>
          <Option value="EUR">Евро</Option>
        </Select>

        <div className="mx-auto my-auto">
          <Space size={[10, 20]} direction="vertical">
          {vacancies.map((vacancy, index) => (
            <VacancyTable key={index} vacancy={vacancy} />
          ))}
          </Space>
        </div>
      </Space>
    </div>
  );
}

export default App;