import React, { useState } from 'react';
import { Input, Space } from 'antd';
import VacancyTable from './componets/VacancyTable';
import axios from 'axios';


const fetchVacancy = (value) => {
  axios.get("http://127.0.0.1:8000/test/"+value).then(r => {
    console.log('r',r.data.item)
    const vacancyResponce = r.data
  }
)
}

const { Search } = Input;
const onSearch = (value, _e, info) => {
  console.log(info?.source, value);
  fetchVacancy(value)
}
const [vacancy, setVacancy] = useState([])


const App = () => (
  <div className="flex">
  <Space direction="vertical">
    <Search placeholder="input search vacancy" onSearch={onSearch} enterButton />
    <div className="mx-auto my-auto">
      <VacancyTable></VacancyTable>
      <VacancyTable></VacancyTable>
    </div>
    
    
  </Space>
  </div>
);
export default App;  