import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Grade } from '@/common'
import { BackButton, Page } from '@/components'
import { LearnCard } from '@/components/learn-card/learn-card'
import { useGetOneDeckQuery, useGetRandomCardQuery, useGradeCardMutation } from '@/services/decks'

export const Learn = () => {
  const params = useParams()
  const id = params.id as string
  const { currentData: deck } = useGetOneDeckQuery({ id })
  const { currentData: randomCard } = useGetRandomCardQuery({ id })
  const [card, setCard] = useState(randomCard)

  const [gradeCard] = useGradeCardMutation()

  useEffect(() => {
    if (randomCard) {
      setCard(randomCard)
    }
  }, [randomCard])

  const onSubmit = async (data: Grade, changeRateMode: any) => {
    if (card) {
      console.log(card.id)
      const res = await gradeCard({
        args: {
          cardId: card.id,
          grade: Number(data.grade),
        },
        id,
      }).unwrap()

      if (res) {
        setCard(res)
        changeRateMode(false)
      }
    }
  }

  console.log(deck)
  console.log(card)

  return (
    <Page>
      <BackButton text={'Back to Decks List'} />
      {deck && card && <LearnCard card={card} deckName={deck.name} onSubmit={onSubmit} />}
    </Page>
  )
}
