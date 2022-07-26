// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(
        {
            status: 200,
            success: "Product data fetched successfully",
            products: [
                {
                    "id": 1,
                    "name": "Laptop Backpack",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 2,
                    "name": "Mens Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style with contrast raglan long sleeve.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 3,
                    "name": "Mens Cotton Jacket",
                    "price": 55.99,
                    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    "quantity": 1,
                },
                    {
                    "id": 4,
                    "name": "Mens Casual Long Sleeve",
                    "price": 15.99,
                    "description": "The color could be slightly different between on the screen and in practice.",
                    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 5,
                    "name": "Women's Winter Coats",
                    "price": 56.99,
                    "description": "It is suitable for different season and help you adapt to different climates",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 6,
                    "name": "Women's Removable Leather Jacket",
                    "price": 29.95,
                    "description": "Faux leather material for style and comfort.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 7,
                    "name": "Women's Windbreaker",
                    "price": 39.99,
                    "description": "Lightweight perfect for trip or casual wear.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                    "quantity": 1,
                },
                {
                    "id": 8,
                    "name": "Women's Short Sleeve V ",
                    "price": 9.85,
                    "description": "Lightweight fabric with great stretch for comfort.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 9,
                    "name": "Opna Women's Short Sleeve Moisture",
                    "price": 7.95,
                    "description": "Machine Wash & Pre Shrunk for a Great Fit.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                    "quantity": 1,
                },
                {
                    "id": 10,
                    "name": "DANVOUY Womens Casual Cotton Combo",
                    "price": 12.99,
                    "description": "The fabric is soft and has some stretch.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                    "quantity": 1,
                }
            ]
        }
    )
  }
  