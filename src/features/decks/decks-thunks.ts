import { decksAPI } from '../../features/decks/decks-api'
import { addDecksAC, deleteDeckAC, setDecksAC, updateDeckAC } from '../../features/decks/decks-reducer'
import { AppDispatch } from '../../app/store'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
    decksAPI.fetchDecks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
}

export const addDecksTC = (newDeckName: string) => (dispatch: AppDispatch) => {
  return decksAPI.addDeck(newDeckName)
    .then((res) => {
      // dispatch(addDecksAC(res.data))
      dispatch(fetchDecksTC())
    })
}

export const updateDeckTC = (deckName, id) => (dispatch: AppDispatch) => {
  decksAPI.updateDeck(deckName, id)
    .then((res) => {
      //dispatch(fetchDecksTC())
      dispatch(updateDeckAC(res.data, id))
    })
}

export const deleteDeckTC = (id) => (dispatch: AppDispatch) => {
  decksAPI.deleteDeck(id)
    .then((res) => {
      //dispatch(fetchDecksTC())
      dispatch(deleteDeckAC(id))
    })
}