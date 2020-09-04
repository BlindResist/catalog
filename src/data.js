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
                    placeholder: 'Search',
                    value: '',
                    error: ''
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
                            selected: false,
                            disabled: false,
                            name: 'KitKat'
                        },
                        {
                            id: 1,
                            selected: false,
                            disabled: false,
                            name: 'Willie\'s cacao'
                        },
                        {
                            id: 2,
                            selected: false,
                            disabled: false,
                            name: 'Q\'uma'
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
                            name: 'Brasil'
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
                            name: 'France'
                        }
                    ]
                }
            },
            items: [{
                    id: 0,
                    brand: 1,
                    name: 'Willie\'s cacao single estate bars',
                    link: '/',
                    price: {
                        value: 300,
                        currency: 'rub'
                    },
                    image: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/3365596e4466516917a6c88f54fb8a77/aa301e7d-a8fd-41fd-9ab8-fd58c5e583b2_rw_1920.jpg?h=8f7bd0c702b05f5968cdc37c5a1d7b23',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                },
                {
                    id: 1,
                    brand: 0,
                    name: 'KitKat Senses',
                    link: '/',
                    price: {
                        value: 50,
                        currency: 'rub'
                    },
                    image: 'https://zira.uz/wp-content/uploads/2018/10/kitkat-senses.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 2,
                    brand: 3,
                    name: 'Cachet Bio Organic',
                    link: '/',
                    price: {
                        value: 120,
                        currency: 'rub'
                    },
                    image: 'https://cdn1.ozone.ru/multimedia/1033417521.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 3,
                    brand: 4,
                    name: 'NUGALI Cacau em Flor ',
                    link: '/',
                    price: {
                        value: 260,
                        currency: 'rub'
                    },
                    image: 'https://i.pinimg.com/736x/15/75/ed/1575ed1b7d1e75c5e2371d9863f93d5e.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 4,
                    brand: 5,
                    name: 'Lindt Excellence 100% Cacao Lindt Excellence',
                    link: '/',
                    price: {
                        value: 140,
                        currency: 'rub'
                    },
                    image: 'https://lindtexcellence.com/wp-content/uploads/2017/09/Lindt-Excellence-100-Percent.jpg',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 5,
                    brand: 2,
                    name: 'Q\'uma Chocolate',
                    link: '/',
                    price: {
                        value: 310,
                        currency: 'rub'
                    },
                    image: 'https://i.pinimg.com/originals/79/1f/1c/791f1c5d92ed8ed69d446055288a163b.png',
                    desc: 'Lorem ipsum...'
                },
                {
                    id: 6,
                    brand: 6,
                    name: 'BonGenie CHOCOLATE',
                    link: '/',
                    price: {
                        value: 180,
                        currency: 'rub'
                    },
                    image: 'https://btw.by/images/customer/chocolate1_btw4.jpg',
                    desc: 'Lorem ipsum...'
                }
            ]
        }
    }
}

export default App
