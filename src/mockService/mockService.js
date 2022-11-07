const itemsDB = [
    {   
        img:"/teclado1.jpg",
        id: 1, 
        name: "teclado gamer",
        description: "teclado gamer profesional",
        category: "teclados",
        price: 4000,
        stock: 5
    },
    {   
        img:"/teclado2.jpg",
        id: 2, 
        name: "teclado gamer",
        description: "teclado gamer profesional",
        category: "teclados",
        price: 7000,
        stock: 11
    },
    {   
        img:"/teclado3.jpg",
        id: 3, 
        name: "teclado gamer",
        description: "teclado gamer profesional",
        category: "teclados",
        price: 10000,
        stock: 8
    },
    {
        img:"/mouse1.jpg",
        id: 4, 
        name: "mouse gamer",
        description: "mouse gamer profesional",
        category: "mouses",
        price: 2000,
        stock: 10
    },
    {
        img:"/mouse2.jpg",
        id: 5, 
        name: "mouse gamer",
        description: "mouse gamer profesional",
        category: "mouses",
        price: 4000,
        stock: 15
    },
    {
        img:"/mouse3.jpg",
        id: 6, 
        name: "mouse gamer",
        description: "mouse gamer profesional",
        category: "mouses",
        price: 5000,
        stock: 10
    },
    {
        img:"/mouse4.jpg",
        id: 7, 
        name: "mouse gamer",
        description: "mouse gamer profesional",
        category: "mouses",
        price: 7000,
        stock: 15
    },
    {
        img:"/monitor1.jpg",
        id: 8, 
        name: "monitor gamer",
        description: "monitor gamer basico",
        category: "monitor",
        price: 40000,
        stock: 20
    },
    {
        img:"/monitor2.jpg",
        id: 9, 
        name: "monitor gamer",
        description: "monitor gamer flat",
        category: "monitor",
        price: 60000,
        stock: 7
    },
    {
        id: 10, 
        img: "/monitor3.jpg",
        name: "monitor Gamer",
        description: "monitor gamer flat",
        category: "monitor",
        price: 75000,
        stock: 7

    },
    {
        id: 11, 
        img: "/monitor4.jpg",
        name: "monitor curvo",
        description: "monitor curvo gamer",
        category: "monitor",
        price: 100000,
        stock: 5
    },
    
]
  
  export default function getItemsFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsDB);
      }, 500);
    });
  }
  
  export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = itemsDB.find((item) => item.id === Number(idParams));
  
        if (itemRequested) {
          resolve(itemRequested);
        } else {
          reject(new Error("El item no existe."));
        }
      }, 500);
    });
  }
  
  export function getItemsFromAPIByCategory(categoryid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let itemsRequested = itemsDB.filter(
          (item) => item.category === categoryid
        );
        resolve(itemsRequested);
      }, 500);
    });
  }