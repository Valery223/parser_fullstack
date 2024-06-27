import React from 'react';
import { Card } from 'antd';

function VacancyTable({ vacancy }) {
  const properties = Object.keys(vacancy); // Получаем все ключи объекта vacancy

  return (
    <Card
      title={`Vacancy ${vacancy.id}`} // Используем id в заголовке карточки
      extra={<a href="#">More</a>}
      style={{
        marginBottom: 16,
        borderRadius: 10, // Пример закругления краев
      }}
      styles={{
        header: { // Стили для верхней части (заголовка)
          backgroundColor: '#1890ff', // Цвет фона заголовка
          color: '#fff', // Цвет текста заголовка
          borderTopLeftRadius: 10, // Пример закругления верхнего левого угла
          borderTopRightRadius: 10, // Пример закругления верхнего правого угла
        },
        body: { // Стили для нижней части (содержимого)
          backgroundColor: '#f0f0f0', // Цвет фона содержимого
          borderBottomLeftRadius: 10, // Пример закругления нижнего левого угла
          borderBottomRightRadius: 10, // Пример закругления нижнего правого угла
        },
      }}
    >
      {properties.map((key, index) => (
        vacancy[key] && ( // Проверяем, что значение не пустое
          <p key={index}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {vacancy[key]}</p>
        )
      ))}
    </Card>
  );
}

export default VacancyTable;
  