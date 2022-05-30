import image from './assets/javascript.jpg';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

const text = `Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Perspiciatis, quibusdam quis quia iusto porro adipisci dolore tempora veniam molestiae fugit facere magni fuga, quidem culpa optio, soluta explicabo vitae minima suscipit. Deserunt dolor, officiis, obcaecati voluptatem neque fugiat animi nam. Aut, at, temporibus. Vitae repudiandae hic itaque fuga, a minus quam. Error et explicabo expedita ea aut eum aspernatur ab voluptatem nostrum? Quam officiis nobis dolores voluptatum, saepe delectus? Sit aperiam sequi, facilis reiciendis voluptatum. Hic, commodi, labore odit voluptatibus vero accusantium atque modi, eos eaque corporis libero quibusdam illo architecto quos deleniti, assumenda ducimus rerum blanditiis doloribus unde laboriosam.`;

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }),
    new TextBlock(text, {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }), 
    new ColumnsBlock([
            'Приложение на JS, без использования библиотек',
            'узнаешь как работают принципы SOLID и ООП в JS за один курс',
            'JAVASCRIPT - это просто, интересно. Научить создавать любые UI своими руками'
        ], {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }),
    new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'logo JS'
        })
];