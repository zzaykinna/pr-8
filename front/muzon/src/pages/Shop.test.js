import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from './Shop';

test('проверка заголовков слайдера', () => {
    render(<Shop />);

    const titles = screen.getAllByRole('heading', { level: 5 }); // Находим все заголовки второго уровня (h2)
    const expectedTitles = ['Микрофоны', 'Усилители', 'Электрогитары']; // Ожидаемые заголовки

    titles.forEach((title, index) => {
        expect(title.textContent).toBe(expectedTitles[index]); // Проверяем, соответствует ли текст заголовка ожидаемому
    });
});
