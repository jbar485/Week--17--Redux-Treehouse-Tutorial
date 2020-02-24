import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
  {
    name: 'Judah Barton',
    score: 20,
  },
  {
    name: 'Jo Carter',
    score: 33,
  },
  {
    name: 'Gideon Barton',
    score: 17,
  },
];

export default function Player(state=initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
    return [
      ...state,
      {
        name: action.name,
        score: 0
      }
    ];
    case PlayerActionTypes.REMOVE_PLAYER:
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
    returnstate.map((player, index) => {
      if (index === action.index) => {
        return {
          ...player,
          score:player.score + action.score
        };
      }
      return player;
    });
    default:
    return state;
  }
}
