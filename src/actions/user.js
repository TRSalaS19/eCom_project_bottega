import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id){
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}


export function fetchUserPurchases() {
    return({
        type:SET_USER_PURCHASES,
        payload: [
          {
            _id: 0,
            total: 8.02,
            orderNumber: 'A0048248343',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Gustavo Salas',
                shippingAddress: '1234 South Main street'
            }
          },
          {
            _id: 1,
            total: 8.02,
            orderNumber: 'A0048248344',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Antonio Sanchez',
                shippingAddress: '5555 south 14th street'
            }
          },
          {
            _id: 2,
            total: 18.52,
            orderNumber: 'A0048248345',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Maria Hernandez',
                shippingAddress: '200 South Main street'
            }
          },
          {
            _id: 3,
            total: 4.02,
            orderNumber: 'A0048248346',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Evelinda Ochoa',
                shippingAddress: '2020 Humbolt Street'
            }
          },
          {
            _id: 4,
            total: 3.58,
            orderNumber: 'A0048248347',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Tina Salas',
                shippingAddress: '400 1st Street'
            }
          },
          {
            _id: 5,
            total: 38.21,
            orderNumber: 'A0048248347',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Sammy Ruiz',
                shippingAddress: '8576 Tree Street'
            }
          },
          {
            _id: 6,
            total: 50.22,
            orderNumber: 'A0048248348',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Ezekiel Ochoa',
                shippingAddress: '200 Humbolt Street'
            }
          },
          {
            _id: 7,
            total: 42.52,
            orderNumber: 'A0048248349',
            orderDate: new Date(),
            creditCard: '-0000',
            user: {
                name: 'Trinity Ochoa',
                shippingAddress: '42500 Humbolt Street'
            }
          },
        ]
    })
}