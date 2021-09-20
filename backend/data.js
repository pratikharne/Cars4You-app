import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Pratik Harne',
      email: 'pratikharne6@gmail.com',
      password: bcrypt.hashSync('Toggle@?4561', 8),
      isAdmin: true,
    },
    {
      name: 'Om',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
        {
             
            name: 'Renault Kwid',
            category: 'mini SUV',
            image: '/images/p1.jpg',
            price: 4,
            price: 4,
            countInStock: 20,
            brand: 'Renault',
            rating: 3,
            numReviews: 10,
            description: 'Best Budget car avialable',
        },
        {
             
            name: 'Hyundai Verna',
            category: 'Sedan',
            image: '/images/p6.jpg',
            price: 9.29,
            countInStock: 10,
            brand: 'Hyundai',
            rating: 4,
            numReviews: 38,
            description: 'Most Stylish Sedan',
        },
        { 

            name: 'Honda Amaze',
            category: 'Sedan',
            image: '/images/p3.jpg',
            price: 6.34,
            countInStock: 0,
            brand: 'Honda',
            rating: 3,
            numReviews: 8,
            description: 'typical Indian sedan',
        },
        {
             
            name: 'Kia Seltos',
            category: 'SUV',
            image: '/images/p4.jpg',
            price: 9.95,
            countInStock: 25,
            brand: 'Kia',
            rating: 3,
            numReviews: 33,
            description: 'Stylish SUV from KIA',
        },
        {
             
            name: 'Toyota Fortuner',
            category: 'mini SUV',
            image: '/images/p5.jpg',
            price: 30.34,
            countInStock: 18,
            brand: 'Toyota',
            rating: 4,
            numReviews: 58,
            description: 'best looking and solid build quality in SUV',
        },
        {
        
            name: 'Tata Harrier',
            category: 'SUV',
            image: '/images/p2.jpg',
            price: 14.4,
            countInStock: 12,
            brand: 'Tata',
            rating: 3.5,
            numReviews: 22,
            description: 'stylish car',
        },
    ],
};
export default data; 