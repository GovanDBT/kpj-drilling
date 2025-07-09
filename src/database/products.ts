type Product = {
    pid: number;
    name: string;
    description: string;
    image: string;
}

const products: Product[] = [
    { 
        pid: 1, 
        name: 'DTH Equipment',
        description: "Brief description of the product in mind. More about the product in mind. This is even more description about the product so the text becomes long for testing.",
        image: "/DTH.webp"
    },
    { 
        pid: 2,
        name: 'Drilling fluids & additives', 
        description: "Brief description of the product in mind. More about the product in mind. This is even more description about the product so the text becomes long for testing.",
        image: "/chemicals.webp"
    },
    { 
        pid: 3,
        name: 'Core storage solutions', 
        description: "Brief description of the product in mind. More about the product in mind. This is even more description about the product so the text becomes long for testing.",
        image: "/storage.webp"
    },
    { 
        pid: 4,
        name: 'Geological tools & consumables', 
        description: "Brief description of the product in mind. More about the product in mind. This is even more description about the product so the text becomes long for testing.",
        image: "/tools.webp"
    },
    { 
        pid: 5,
        name: 'AMC Samchem Drilling', 
        description: "Brief description of the product in mind. More about the product in mind. This is even more description about the product so the text becomes long for testing.",
        image: "/product.jpg"
    },
];

export default products;