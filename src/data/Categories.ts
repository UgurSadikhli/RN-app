export const CategoriesLst = [
  {
    title: "Vegetables",
    img: require("../../assets/images/categories/vegetables.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Broccoli",
        price: 4,
        country: "Italy",
        description:
          "Broccoli is a green vegetable belonging to the Brassica oleracea species, which also includes cabbage, kale, and cauliflower.",
        isFavorite: false,
        isInCart: false,
        img: require("../../assets/images/vegetables/broccoli.jpg"),
        isPiece: false,
      },
      {
        title: "Eggplant",
        price: 1.2,
        country: "India",
        description:
          "Eggplant, scientifically known as Solanum melongena, is a vegetable belonging to the nightshade family, Solanaceae. It is native to the Indian subcontinent and has been cultivated for thousands of years.",
        isFavorite: false,
        isInCart: false,
        img: require("../../assets/images/vegetables/eggplant.jpg"),
        isPiece: false,
      },
      {
        title: "Tomato",
        price: 2.4,
        country: "Mexico",
        description:
          "Tomato, scientifically known as Solanum lycopersicum, is a widely cultivated and versatile fruit that is often used as a vegetable in culinary contexts.",
        isFavorite: false,
        isInCart: false,
        img: require("../../assets/images/vegetables/Tomato.jpg"),
        isPiece: false,
      },
    ],
  },
  {
    title: "Fruits",
    img: require("../../assets/images/categories/fruits.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Strawberry",
        price: 3.4,
        country: "Europe",
        description:
          "Strawberry is a sweet, red fruit known for its distinct aroma, juicy texture, and vibrant color. It belongs to the Rosaceae family and is cultivated for its edible fruit. Strawberries are rich in vitamin C.",
        isFavorite: false,
        isInCart: false,
        isPiece: false,
        img: require("../../assets/images/fruits/Strawberry.jpeg"),
      },
      {
        title: "Banana",
        price: 1.2,
        country: "Southeast Asia",
        description:
          " Bananas are rich in potassium, vitamin C, and vitamin B6, and they are a convenient and nutritious snack. They can be eaten raw, added to smoothies, used in baking, or cooked in various dishes.",
        isFavorite: false,
        isInCart: false,
        isPiece: false,
        img: require("../../assets/images/fruits/banana.jpg"),
      },
    ],
  },
  {
    title: "Drinks",
    img: require("../../assets/images/categories/drinks.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Cola",
        price: 1.2,
        country: "USA",
        description:
          "Cola is a sweetened, carbonated soft drink flavored with vanilla, cinnamon, citrus oils, and other flavorings. It originated in the United States and is usually caffeinated.",
        isFavorite: false,
        isInCart: false,
        isPiece: true,
        img: require("../../assets/images/drinks/Cola.jpeg"),
      },
    ],
  },
  {
    title: "Breads",
    img: require("../../assets/images/categories/bread.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Baguette",
        price: 2.0,
        country: "France",
        description:
          "A baguette is a long, thin loaf of French bread that is commonly made from basic lean dough. It is distinguishable by its length and crisp crust.",
        isFavorite: false,
        isInCart: false,
        isPiece: true,
        img: require("../../assets/images/breads/Baguette.jpeg"),
      },
    ],
  },
  {
    title: "Pasta",
    img: require("../../assets/images/categories/pasta.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Spaghetti",
        price: 1.0,
        country: "Italy",
        description:
          "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine.",
        isFavorite: false,
        isInCart: false,
        isPiece: false,
        img: require("../../assets/images/pasta/Spaghetti.jpeg"),
      },
    ],
  },
  {
    title: "Sweets",
    img: require("../../assets/images/categories/sweets.jpeg"),
    quantity: 0,
    products: [
      {
        title: "Chocolate Bar",
        price: 2.5,
        country: "Switzerland",
        description:
          "A chocolate bar is a confection in bar form comprising some or all of the following components: cocoa solids, cocoa butter, sugar, and milk.",
        isFavorite: false,
        isInCart: false,
        isPiece: false,
        img: require("../../assets/images/sweets/ChocolateBar.jpeg"),
      },
    ],
  },
];

CategoriesLst.forEach((category) => {
  category.quantity = category.products.length;
});
