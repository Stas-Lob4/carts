import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Grade } from '@/common'
import { BackButton, Loader, Page } from '@/components'
import { useGetOneDeckQuery, useGetRandomCardQuery, useGradeCardMutation } from '@/services/deck'

export const Learn = () => {
  const params = useParams()
  const id = params.id as string
  const { currentData: deck, isLoading: deckLoading } = useGetOneDeckQuery({ id })
  const { currentData: randomCard, isLoading: randomCardIsLoading } = useGetRandomCardQuery({ id })
  const [card, setCard] = useState(randomCard)

  const [gradeCard, { isLoading: gradeCardIsLoading }] = useGradeCardMutation()

  useEffect(() => {
    if (randomCard) {
      setCard(randomCard)
    }
  }, [randomCard])

  const onSubmit = async (data: Grade, changeRateMode: any) => {
    if (card) {
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

  const isLoading = deckLoading || randomCardIsLoading || gradeCardIsLoading

  return (
    <Page>
      <BackButton text={'Back to Decks List'} />
      {deck && card && <div>LearnCard</div>}
      {isLoading && <Loader />}
    </Page>
  )
}
