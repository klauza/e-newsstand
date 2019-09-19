const shopItems = [

  {
    category: "firstCategory",
    items: 
    [
      {
        id: 1,
        name: "newspaper-1",
        slugs: ["paper", "sheet", "card"]
      },
      {
        id: 2,
        name: "newspaper-2",
        slugs: []
      },
      {
        id: 3,
        name: "newspaper-3",
        slugs: []
      },
      {
        id: 4,
        name: "newspaper-4",
        slugs: [],
        featured: true
      },
      {
        id: 5,
        name: "newspaper-5",
        slugs: [],
        featured: true
      },
      {
        id: 6,
        name: "newspaper-6",
        slugs: [],
        featured: true
      }
    ]
   
  },

  {
    category: "secondCategory",
    items: [
      {
        id: 7,
        name: "postcard-1",
        slugs: []
      },
      {
        id: 8,
        name: "postcard-2",
        slugs: []
      },
      {
        id: 9,
        name: "postcard-3",
        slugs: []
      }
    ]
  },

  {
    category: "thirdCategory",
    items: []
  }



]

module.exports = shopItems;