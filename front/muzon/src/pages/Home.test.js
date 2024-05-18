import renderer from 'react-test-renderer';
import Shop from './Shop';
//С помощью функции describe() создается блок тестов для компонента Home.
describe('Компонент дом', () => {
    // Функция test задает конкретное поведение, которое мы проверяем: "отрисовывается ли компонент Home правильно".
    test('it renders', () => {
        // Внутри теста создается экземпляр компонента Home с помощью renderer.create(<Home />).
        const component = renderer.create(<Shop />);
        //Получаем корневой элемент компонента с помощью component.root. 
        const instance = component.root;
        //С помощью expect и findByType проверяется, содержит ли компонент h1 заголовок с текстом "Главная страница".
        expect(instance.findByType("h1").props.children).toBe("Играй в своё удовольствие");
    });

    test('it renders 2', () => {
        // Внутри теста создается экземпляр компонента Home с помощью renderer.create(<Home />).
        const component = renderer.create(<Shop />);
        //Получаем корневой элемент компонента с помощью component.root. 
        const instance = component.root;
        //С помощью expect и findByType проверяется, содержит ли компонент h1 заголовок с текстом "Главная страница".
        // console.log(instance.findByType("h3"))
        expect(instance.findByType("h3").props.children).toBe("Адрес:");
    });

    test('it renders 3', () => {
        // Внутри теста создается экземпляр компонента Home с помощью renderer.create(<Home />).
        const component = renderer.create(<Shop />);
        //Получаем корневой элемент компонента с помощью component.root. 
        const instance = component.root;
        //С помощью expect и findByType проверяется, содержит ли компонент h1 заголовок с текстом "Главная страница".
        // console.log(instance.findByType("h3"))
        expect(instance.findByType("h4").props.children).toBe("г. Владимир, Большая Московская, д. 90А");
    });
    
})

