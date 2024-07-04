import React from 'react';
import { Card } from 'antd';

function VacancyTable({ vacancy, titlePrefix = '' }) {
  const properties = Object.keys(vacancy); // Получаем все ключи объекта vacancy

  return (
    <Card
      title={`${titlePrefix}Vacancy ${vacancy.id}`} // Используем id в заголовке карточки
      extra={<a href="#">More</a>}
      style={{
        marginBottom: 16,
        borderRadius: 10, // Пример закругления краев
      }}
      bodyStyle={{
        backgroundColor: '#f0f0f0', // Цвет фона содержимого
        borderBottomLeftRadius: 10, // Пример закругления нижнего левого угла
        borderBottomRightRadius: 10, // Пример закругления нижнего правого угла
      }}
      headStyle={{
        backgroundColor: '#1890ff', // Цвет фона заголовка
        color: '#fff', // Цвет текста заголовка
        borderTopLeftRadius: 10, // Пример закругления верхнего левого угла
        borderTopRightRadius: 10, // Пример закругления верхнего правого угла
      }}
    >
      {properties.map((key, index) => (
        typeof vacancy[key] === 'object' && vacancy[key] !== null ? (
          // Если значение является объектом, рекурсивно вызываем VacancyTable
          <VacancyTable key={index} vacancy={vacancy[key]} titlePrefix={`${key.charAt(0).toUpperCase() + key.slice(1)} `} />
        ) : (
          // Иначе просто отображаем значение
          vacancy[key] && ( // Проверяем, что значение не пустое
            <p key={index}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {vacancy[key]}
            </p>
          )
        )
      ))}
    </Card>
  );
}

export default VacancyTable;
  