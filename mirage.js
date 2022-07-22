import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test"} = {}) {
    let server = createServer({
        environment,

        models: {
            product: Model,
        },

        seeds(server) {
            server.create("product", 
                {
                    "id": 1,
                    "name": "Laptop Backpack",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "quantity": 1,
                }
            )
            server.create("product", 
                {
                    "id": 2,
                    "name": "Mens Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style with contrast raglan long sleeve.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "quantity": 1,
                }
            )
            server.create("product", 
                {
                    "id": 3,
                    "name": "Mens Cotton Jacket",
                    "price": 55.99,
                    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    "quantity": 1,
                }
            )
            server.create("product", 
                {
                    "id": 4,
                    "name": "Mens Casual Long Sleeve",
                    "price": 15.99,
                    "description": "The color could be slightly different between on the screen and in practice.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                    "quantity": 1,
                }
            )
            server.create("product", 
                {
                    "id": 5,
                    "name": "Women's Winter Coats",
                    "price": 56.99,
                    "description": "It is suitable for different season and help you adapt to different climates",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                    "quantity": 1,
                }
            )
            server.create("product", 
                {
                    "id": 6,
                    "name": "Women's Removable Leather Jacket",
                    "price": 29.95,
                    "description": "Faux leather material for style and comfort.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                    "quantity": 1,
                }
            )
        },

        routes() {
            this.namespace = "/api"

            this.get("/products", (schema) => {
                return schema.products.all();
            })

            this.post("/products", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                return schema.products.create(attrs);
            })

            this.delete(`/products/:id`, (schema, request) => {
                let id = request.params.id

                return schema.products.find(id).destroy()
            })

            this.passthrough();
        },
    })

    return server;
}