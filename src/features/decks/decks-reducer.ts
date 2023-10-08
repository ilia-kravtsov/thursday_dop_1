import { Deck, decksAPI } from '../../features/decks/decks-api'
import { AppDispatch } from '../../app/store'
import { deleteDeckTC } from 'src/features/decks/decks-thunks'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionTypes): DecksState => {
  switch (action.type) {
    case 'DECKS/GET-DECKS':
      return {...state, decks: action.decks}
    case 'DECKS/ADD-DECK':
      return {...state, decks: [action.newDeck, ...state.decks]}
    case 'DECKS/UPDATE-DECK':
      debugger
      return {...state, decks: state.decks.map((d) => d.id === action.id ? {...d, name: action.newDeck.name} : d)}
    case 'DECKS/DELETE-DECK':
      return {...state, decks: state.decks.filter(d => d.id !== action.id)}
    default: return state
  }
}

type ActionTypes =
  | ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDecksAC>
  | ReturnType<typeof updateDeckAC>

export const setDecksAC = (decks: Deck[]) => ({
    type: 'DECKS/GET-DECKS' as const,
    decks
})

export const addDecksAC = (newDeck: Deck) => ({
  type: 'DECKS/ADD-DECK' as const,
  newDeck
})

export const updateDeckAC = (newDeck: Deck, id: string) => ({
  type: 'DECKS/UPDATE-DECK' as const,
  newDeck,
  id
})

export const deleteDeckAC = (id: string) => ({
  type: 'DECKS/DELETE-DECK' as const,
  id
})

