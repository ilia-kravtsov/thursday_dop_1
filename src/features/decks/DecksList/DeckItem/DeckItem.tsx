import s from './DeckItem.module.css'
import { Deck } from '../../../../features/decks/decks-api'
import { useAppDispatch } from '../../../../app/store'
import { deleteDeckTC, updateDeckTC } from '../../../../features/decks/decks-thunks'
import { ChangeEvent, useState } from 'react'


type DeckProps = {
  deck: Deck[] // todo: fix
  id: string
}

const TEST_ACC_NAME = 'test'

export const DeckItem = ({ deck, id }: DeckProps) => {
  const dispatch = useAppDispatch()
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  let [editMode, setEditMode] = useState<boolean>(false)
  let [title, setTitle] = useState<string>(deck.name)
  //dispatch(updateDeckTC(deck.name, id))
  const updateDeck = () => {
    setEditMode(true)
  }

  const deleteDeck = () => {
    dispatch(deleteDeckTC(id))
  }

  const editDeckTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const saveNewDeckTitle = () => {
    dispatch(updateDeckTC(title, id))
    setEditMode(false)
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {editMode
        ? <div>
            <input value={title} onChange={editDeckTitle}/>
            <button onClick={saveNewDeckTitle}>Save</button>
        </div>
        : deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={updateDeck}>update</button>
          <button onClick={deleteDeck}>delete</button>
        </div>
      )}
    </li>
  )
}
