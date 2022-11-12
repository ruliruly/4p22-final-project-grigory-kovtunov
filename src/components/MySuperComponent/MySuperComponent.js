// Функциональный подход
// Импортируем css файл 
import './MyComponent.css';
// Функцию называем так же, как и файл js
function MySuperComponent() {
    // Возвращаем код разметки (JSX)
    // Внимание! Обязательно должен быть только ОДИН корневой тег.
    return (
        <div className="MyComponent">
            Hello, Functional Component!
        </div>
    );
}

// Экспортируем созданную функцию
export default MyComponent;

// Классовый подход
// Импортируем React
import React from 'react';
// Импортируем css файл
import './MySuperComponent.css';
// Создаём и одновременно экспортируем класс
// Класс называется так же, как и файл js
// Наследуем класс от React.Component
export default class MySuperComponent extends React.Component {
    // Создаём функцию render()
    render() {
        // Возвращаем код компонента (JSX)
        // Внимание! Обязательно должен быть только ОДИН корневой тег.
        return (<div>
            Hello Class Component!
        </div>);
    }
}