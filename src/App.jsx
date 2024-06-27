import React, { useState } from 'react';
import { Input, Space } from 'antd';
import VacancyTable from './componets/VacancyTable';
import axios from 'axios';

const App = () => {
  const [vacancies, setVacancies] = useState([]);
  const [perPage, setPerPage] = useState(10);

  const fetchVacancy = (value) => {
    axios.get(`http://127.0.0.1:8000/api/v1/vacancies/?text=${value}`).then(response => {
      console.log('Response', response.data);
      setVacancies(response.data.slice(0, perPage));
    }).catch(error => {
      console.error('Error fetching vacancies', error);
    });
  }

  const { Search } = Input;
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    fetchVacancy(value);
  }

  return (
    <div className="flex">
      <Space direction="vertical">
        <Search placeholder="input search vacancy" onSearch={onSearch} enterButton />
        <div className="mx-auto my-auto">
          {vacancies.map((vacancy, index) => (
            <VacancyTable key={index} vacancy={vacancy} />
          ))}
        </div>
      </Space>
    </div>
  );
}

export default App;