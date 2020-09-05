const App = {
    components: {
        header: {
            caption: 'React simple page'
        },
        footer: {
            copyright: '2020 All rights reserved :p'
        },
        navigationMain: [{
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
            filters: {
                name: {
                    value: '',
                    placeholder: 'Search'
                },
                promo: {
                    checked: false
                },
                discount: {
                    checked: false
                },
                brand: {
                    placeholder: 'Brand',
                    options: [{
                            id: 0,
                            selected: true,
                            disabled: false,
                            name: 'KitKat'
                        },
                        {
                            id: 1,
                            selected: false,
                            disabled: false,
                            name: 'Willies cacao'
                        },
                        {
                            id: 3,
                            selected: false,
                            disabled: false,
                            name: 'Cachet'
                        },
                        {
                            id: 4,
                            selected: false,
                            disabled: false,
                            name: 'NUGALI'
                        },
                        {
                            id: 5,
                            selected: false,
                            disabled: false,
                            name: 'Lindt'
                        },
                        {
                            id: 6,
                            selected: false,
                            disabled: false,
                            name: 'BonGenie'
                        }
                    ]
                },
                country: {
                    placeholder: 'Country',
                    options: [{
                            id: 0,
                            selected: false,
                            disabled: false,
                            name: 'USA'
                        },
                        {
                            id: 1,
                            selected: false,
                            disabled: false,
                            name: 'Belgie'
                        },
                        {
                            id: 2,
                            selected: false,
                            disabled: false,
                            name: 'United Kingdom'
                        },
                        {
                            id: 3,
                            selected: false,
                            disabled: false,
                            name: 'Brasil'
                        },
                        {
                            id: 4,
                            selected: false,
                            disabled: false,
                            name: 'Switzerland'
                        },
                        {
                            id: 5,
                            selected: false,
                            disabled: false,
                            name: 'Belarus'
                        }
                    ]
                }
            },
            items: [{
                    id: 0,
                    brand: 1,
                    country: 2,
                    promo: true,
                    discount: false,
                    name: 'Willies cacao single estate bars',
                    link: '/',
                    priceValue: 300,
                    priceCurrency: 'rub',
                    image: './src/images/goods/willies_cacao.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                },
                {
                    id: 1,
                    brand: 0,
                    country: 0,
                    promo: false,
                    discount: false,
                    name: 'KitKat Senses',
                    link: '/',
                    priceValue: 50,
                    priceCurrency: 'rub',
                    image: './src/images/goods/kitkat_senses.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 2,
                    brand: 3,
                    country: 1,
                    promo: false,
                    discount: true,
                    discountSize: 30,
                    name: 'Cachet Bio Organic',
                    link: '/',
                    priceValue: 120,
                    priceCurrency: 'rub',
                    image: './src/images/goods/cachet.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 3,
                    brand: 4,
                    country: 3,
                    promo: false,
                    discount: false,
                    name: 'NUGALI Cacau em Flor ',
                    link: '/',
                    priceValue: 260,
                    priceCurrency: 'rub',
                    image: './src/images/goods/nugali.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 4,
                    brand: 5,
                    country: 4,
                    promo: false,
                    discount: false,
                    name: 'Lindt Excellence 100% Cacao Lindt Excellence',
                    link: '/',
                    priceValue: 140,
                    priceCurrency: 'rub',
                    image: './src/images/goods/lindt.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 5,
                    brand: 6,
                    country: 5,
                    promo: false,
                    discount: true,
                    discountSize: 30,
                    name: 'BonGenie CHOCOLATE',
                    link: '/',
                    priceValue: 80,
                    priceCurrency: 'rub',
                    image: './src/images/goods/bongenie.jpg',
                    desc: 'Lorem ipsum...'
                }
            ]
        }
    }
}

export default App
