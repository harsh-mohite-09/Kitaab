import { TYPE } from "../utils/constants";

export const filterInitialState = {
  filterBySearch: "",
  filterByCategories: [],
  filterByPriceRange: "1000",
  filterByRating: "",
  sortByPrice: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case TYPE.FILTER_BY_SEARCH: {
      return {
        ...state,
        filterBySearch: action.payload,
      };
    }

    case TYPE.ADD_CATEGORY_FILTER: {
      return {
        ...state,
        filterByCategories: [...state.filterByCategories, action.payload],
      };
    }

    case TYPE.REMOVE_CATEGORY_FILTER: {
      return {
        ...state,
        filterByCategories: state.filterByCategories.filter(
          (item) => item !== action.payload
        ),
      };
    }

    case TYPE.FILTER_BY_PRICE_RANGE: {
      return {
        ...state,
        filterByPriceRange: action.payload,
      };
    }

    case TYPE.FILTER_BY_RATING: {
      return {
        ...state,
        filterByRating: action.payload,
      };
    }

    case TYPE.SORT_BY_PRICE: {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }

    case TYPE.CLEAR_FILTERS: {
      return filterInitialState;
    }

    default:
      return;
  }
};
