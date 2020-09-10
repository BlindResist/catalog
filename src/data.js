const App = {
    components: {
        header: {
            target: '_blank',
            caption: 'Project owner & creator',
            link: 'https://blindresist.github.io/'
        },
        footer: {
            copyright: '2020 All rights reserved :p'
        },
        navigationMain: [{
                id: 0,
                name: '',
                link: '/',
                icon: 'food-basket',
                title: 'Items list'
            },
            {
                id: 1,
                name: '',
                link: '/',
                icon: 'form',
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
                            selected: false,
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
            sorting: [
                {
                    name: 'price',
                    value: 'priceValue'
                },
                {
                    name: 'discount',
                    value: 'discountSize'
                },
                {
                    name: 'rating',
                    value: 'rating'
                }
            ]
        }
    }
}

export default App
