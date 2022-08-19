import images from './Images'
import {Card} from "./Card";
import {useEffect, useState} from "react";
import '../styles/Style.css'

export const CardList = () => {

    const [score, setScore] = useState(0)

    const [bestScore, setBestScore] = useState(0)

    const [reset, setReset] = useState(false)

    const updateScore = childData => {
        if (childData) {
            setScore(a => a + 1)
        } else {
            setScore(0)
            if (score > bestScore) {
                setBestScore(score)
            }
            setReset(a => !a)
        }
    }

    const hasReset = () => {
        setReset(false)
    }

    const displayCardList = arr => {
        const cardList = arr.map((image, key) => {
            return (
                <Card
                    imageURL={image}
                    key={key}
                    id={key.toString()}
                    updateScore={updateScore}
                    displayRandom={displayRandom}
                    reset={reset}
                    hasReset={hasReset}
                />
            )
        })
        return cardList
    }

    const displayRandom = () => {
        const cardList = document.querySelectorAll(".carItem")
        cardList.forEach (card => {
            card.style.order = Math.floor(Math.random() * 15)
        })
    }

    console.log('card list')
    return (
        <div className="container">
            <div className="header">
                <h1>Memory Card</h1>
                <div className="heading">
                    <h2>Score: {score} </h2>
                    <h2>Best Score: {bestScore} </h2>
                </div>
            </div>
            <div className="cardList">
                {displayCardList(images)}
            </div>
        </div>
    )
}