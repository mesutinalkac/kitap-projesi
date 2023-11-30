export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVİE_FAVORİTES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "ADD_TO_READİNGLİST":
      return {
        ...state,
        readinglist: [...state.readinglist, action.payload],
      };
    case "REMOVE_TO_FAVORİ":
      return {
        ...state,
        favorites: state.favorites.filter((book) => book.id !== action.payload),
      };
    case "REMOVE_TO_READİNGLİST":
      return {
        ...state,
        readinglist: state.readinglist.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "READİNGLİST_TO_FAVORİTİES":
      return {
        ...state,
        readinglist: state.readinglist.filter(
          (book) => book.id !== action.payload.id
        ),
        favorites: [...state.favorites, action.payload],
      };
    case "FAVORİ_TO_FROM_COMMNED":
      return {
        ...state,
        comnent: [...state.comnent, action.payload],
      };
      case "REMOVE_COMMEND":
      return {
        ...state,
        comnent: state.comnent.filter(
          (book) => book.id !== action.payload
        ),
      };
  }
};
