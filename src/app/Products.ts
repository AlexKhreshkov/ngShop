export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    count: 8
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 799,
    description: 'A great phone with one of the best cameras',
    count: 15
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 799,
    description: '',
    count: 12
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
