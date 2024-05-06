const initialState = {
  favouriteCompany: {
    content: [],
  },
  jobPosting: {
    job: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE_COMPANY":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: state.favouriteCompany.content.concat(action.payload),
        },
      };
    case "REMOVE_FAVOURITE_COMPANY":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: state.favouriteCompany.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
