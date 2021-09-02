export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  item: null,
  //Remove after finishing developing
  token:
    "BQCxERBwt3AjHHNxDaMSUC93zwF_IpldqYsrEEhD54crA5Z-TAzU6YbqjZQFXs9bjbsBoGEVoYlta6uHF7HL4B_q4cc8TLPizE9ewAEWsCpEWNFMobalzju1-twlf7t9dYxsmXP_dmU_RoNcHn4exioHTH9uWcnxW8ATKAPSTmYVuy41Yi9q",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
