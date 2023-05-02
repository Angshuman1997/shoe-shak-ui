export const mockProductData = [
  {
    pId: 1,
    name: "A",
    brand: "Adidas",
    size: [6, 7, 8, 9],
    color: ["red", "blue", "green"],
    image: ["https://m.media-amazon.com/images/I/61qt54ETqAL._UY535_.jpg", "url2"],
    pRate: 2, // no. of stars
    multiSize: "small",
    misc: [
      { 
        sellerId: 152,
        seller: "Raj Exports",
        sellerRate: 5,
        price: "1499",
        deliveryIn: 1, // no. of days
      },
    ],
  },
  {
    pId: 2,
    name: "B",
    brand: "Nike",
    size: [6, 9],
    color: ["red", "black", "green", "white"],
    image: ["https://m.media-amazon.com/images/I/61d2-ouOEmL._UX500_.jpg", "url2", "url3"],
    pRate: 5, // no. of stars out of 10
    multiSize: "medium",
    misc: [
      {
        sellerId: 152,
        seller: "Raj Exports",
        sellerRate: 5,
        price: "1099",
        deliveryIn: 7, // no. of days
      },
      {
        sellerId: 151,
        seller: "Shoe La La",
        sellerRate: 2,
        price: "999",
        deliveryIn: 5, // no. of days
      },
      {
        sellerId: 153,
        seller: "Suraj Exports",
        sellerRate: 7,
        price: "1499",
        deliveryIn: 10, // no. of days
      },
    ],
  },
  {
    pId: 3,
    name: "C",
    brand: "Reebok",
    size: [10],
    color: ["red", "blue", "green"],
    image: ["https://m.media-amazon.com/images/I/61sWP8CfzjL._UY625_.jpg", "url2"],
    pRate: 9, // no. of stars
    multiSize: "large",
    misc: [
      {
        sellerId: 152,
        seller: "Raj Exports",
        sellerRate: 5,
        price: "1499",
        deliveryIn: 1, // no. of days
      },
    ],
  }
];
