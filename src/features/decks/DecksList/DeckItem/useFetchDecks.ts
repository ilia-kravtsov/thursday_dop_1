import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { Deck } from '../../../../features/decks/decks-api'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../../../features/decks/decks-thunks'

export const UseFetchDecks = () => {
  const decks = useAppSelector<Deck[]>((state) => state.decks.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  },[])

  return {
    decks
  }
}

