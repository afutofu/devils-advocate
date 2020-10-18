import * as actions from "../actions/actionTypes";

// let initialState = {
//   logias: [
//     {
//       id: 2,
//       name: "Yami Yami no Mi",
//       price: 2247000,
//       type: "Logia",
//       englishName: "Dark-Dark Fruit",
//       meaning: "Darkness",
//       info: `The Yami Yami no Mi is a Logia-type Devil Fruit that allows the user to create, control, and transform into darkness at will, making the user a Darkness Human (闇人間 Yami Ningen?). It was eaten by Marshall D. Teach, also known as Blackbeard, who stole it from Commander Thatch of the Whitebeard Pirates' 4th division after murdering him.\nThis fruit is considered "unique" even for a Logia-type, and the ability it grants is said to be the "most evil".`
//     }
//   ],
//   paramecias: [
//     {
//       id: 1,
//       name: "Gura Gura No Mi",
//       price: 5046000,
//       type: "Paramecia",
//       englishName: "Tremor-Tremor Fruit or Quake-Quake Fruit",
//       meaning: "Sound of shaking",
//       info: `The Gura Gura no Mi is a Paramecia-type Devil Fruit which allows the user to create vibrations, or "quakes", making the user a Tremor Human (震動人間 Shindō Ningen?). It was eaten by Edward "Whitebeard" Newgate, but upon his death, its power was stolen by Marshall D. "Blackbeard" Teach.\nThis fruit is fearsomely reputed to be able to destroy the world, and is considered to be the strongest Devil Fruit within the Paramecia class, having powers no weaker than those of a Logia Devil Fruit.​​​​​​ ​It is one of the fruits with the reputation of being "invincible".`
//     }
//   ],
//   zoans: []
// };

let initialState = {
  fruits: {},
  loading: false,
  error: null,
};

const fetchFruitSuccess = (state, fruits) => {
  let newFruits = { logias: [], paramecias: [], zoans: [] };
  fruits.forEach((fruit) => {
    switch (fruit.fruit_type) {
      case "Logia":
        newFruits.logias.push(fruit);
        break;
      case "Paramecia":
        newFruits.paramecias.push(fruit);
        break;
      case "Zoan":
        newFruits.zoans.push(fruit);
        break;
      default:
        return null;
    }
  });
  return { ...state, loading: false, fruits: newFruits, error: null };
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_FRUITS_BEGIN:
      return { ...state, loading: true };
    case actions.FETCH_FRUITS_SUCCESS:
      return fetchFruitSuccess(state, action.payload.fruits);
    case actions.FETCH_FRUITS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default fruitsReducer;
