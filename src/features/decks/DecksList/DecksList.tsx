import s from './DecksList.module.css'
import { DeckItem } from '../../../features/decks/DecksList/DeckItem/DeckItem'
import { UseFetchDecks } from '../../../features/decks/DecksList/DeckItem/useFetchDecks'

export const DecksList = () => {

  const {decks} = UseFetchDecks()

  return <ul className={s.list}>
    {decks.map(deck => <DeckItem key={deck.id} deck={deck} id={deck.id}/>)}
  </ul>
}
