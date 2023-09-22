var catalog =[
    {
        "title":"milk",
        "category":"farm",
        "price":151.99,
        "image":"milk.jpg",
        "_id":"1",
    },

    {
        "title":"eggs",
        "category":"farm",
        "price":121,
        "image":"eggs.jpg",
        "_id":"2",
    },

    {
        "title":"carrots",
        "category":"farm",
        "price":71.25,
        "image":"carrots.jpg",
        "_id":"3",
    },

    {
        "title":"meat",
        "category":"farm",
        "price":251.99,
        "image":"meat.jpg",
        "_id":"4",
    },
    {
        "title":"cereal",
        "category":"farm",
        "price":51.99,
        "image":"cereal.jpg",
        "_id":"5",
    },
    {
        "title":"coffee",
        "category":"farm",
        "price":551.99,
        "image":"coffee.jpg",
        "_id":"6",
    },
    {
        "title":"tea",
        "category":"farm",
        "price":110.99,
        "image":"tea.jpg",
        "_id":"7",
    },
    {
        "title":"teapot",
        "category":"farm",
        "price":111.99,
        "image":"teapot.jpg",
        "_id":"8",
    },
  
];

class DataService {

    getProducts()
    {
        return catalog;
    }
}

export default DataService;


// please create at least 7 of this products