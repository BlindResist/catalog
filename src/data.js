const App = {
    components: {
        header: {
            caption: 'React simple page'
        },
        footer: {
            copyright: '2020 All rights reserved :p'
        },
        navigationMain: [
            {
                id: '0',
                name: 'I',
                link: '/',
                title: 'Items list'
            },
            {
                id: '1',
                name: 'F',
                link: '/',
                title: 'Form'
            }
        ],
        goods: {
            filters: {},
            items: [
                {
                    id: '0',
                    name: 'Products 1',
                    link: '/',
                    price: {
                        value: '3000',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '1',
                    name: 'Products 2',
                    link: '/',
                    price: {
                        value: '4850',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '2',
                    name: 'Products 3',
                    link: '/',
                    price: {
                        value: '998',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '3',
                    name: 'Products 4',
                    link: '/',
                    price: {
                        value: '160',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '4',
                    name: 'Products 5',
                    link: '/',
                    price: {
                        value: '1500',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '5',
                    name: 'Products 6',
                    link: '/',
                    price: {
                        value: '2900',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: '6',
                    name: 'Products 7',
                    link: '/',
                    price: {
                        value: '1500',
                        currency: 'rub'
                    },
                    image: '',
                    desc: 'Lorem ipsum...'
                }
            ]
        }
    }
}

export default App
