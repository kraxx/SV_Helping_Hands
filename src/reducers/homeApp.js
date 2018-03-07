const initialState = {
    markers: [
        {   
            key: "1",
            latlng: {
                latitude: 37.5739,
                longitude: -122.0036,
            },
            title: 'Food Stop',
            description: 'Tasty food cum get sum',
            type: "Food",
        },
        {
            key: "2",
            latlng: {
                latitude: 37.548271,
                longitude: -121.988571,
            },
            title: 'Rag n Bone',
            description: 'Upscale rags',
            type: "Clothing",
        },
        {
            key: "3",
            latlng: {
                latitude: 37.53271,
                longitude: -121.981,
            },
            title: 'H&M',
            description: 'hip items lol',
            type: "Clothing",
        },
        {
            key: "4",
            latlng: {
                latitude: 37.56271,
                longitude: -121.781,
            },
            title: 'Momma\'s Meats',
            description: 'tasty meat pies',
            type: "Food",
        },
        {
            key: "5",
            latlng: {
                latitude: 37.56471,
                longitude: -121.781,
            },
            title: 'Gay Bois',
            description: 'yall dapper',
            type: "Clothing",
        },
        {
            key: "6",
            latlng: {
                latitude: 37.60270,
                longitude: -121.401,
            },
            title: 'Dicks',
            description: 'u guessed it',
            type: "Food",
        },
        {
            key: "7",
            latlng: {
                latitude: 37.60270,
                longitude: -121.402,
            },
            title: 'Puss',
            description: 'oui tres bonne',
            type: "Food",
        },
        {
            key: "8",
            latlng: {
                latitude: 37.60251,
                longitude: -121.662,
            },
            title: 'HEALTH PACK',
            description: 'u dyin?',
            type: "Health",
        },
        {
            key: "9",
            latlng: {
                latitude: 37.60131,
                longitude: -121.223,
            },
            title: 'Sleepy Bees',
            description: 'I am le tired',
            type: "Shelter",
        },
        {
            key: "10",
            latlng: {
                latitude: 37.489,
                longitude: -121.489,
            },
            title: 'Puss',
            description: 'oui tres bonne',
            type: "Food",
        },
    ],
}

function homeApp(state = initialState, action) {
  switch (action.type){
    default:
      return state
  }
}

export default homeApp
