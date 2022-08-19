import images from './Images'
import {Card} from "./Card";
import {useEffect, useState} from "react";
import '../styles/Style.css'

export const CardList = () => {

    const [score, setScore] = useState(0)

    const [bestScore, setBestScore] = useState(0)

    const [reset, setReset] = useState(false)

    // update the score after selection
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

    // reset the "reset" state
    const hasReset = () => {
        setReset(false)
    }

    // display the Card component
    const displayCardList = arr => {
        const cardList = arr.map((image, key) => {
            const start = image.lastIndexOf('/')
            const middle = image.indexOf('_')
            const end = image.indexOf('.')
            const company = image.slice(start + 1, middle)
            const model = image.slice(middle + 1, end)
            return (
                <Card
                    imageURL={image}
                    key={key}
                    id={key.toString()}
                    updateScore={updateScore}
                    displayRandom={displayRandom}
                    reset={reset}
                    hasReset={hasReset}
                    company={company}
                    model={model}
                />
            )
        })
        return cardList
    }

    // change order value of card to display the Card component in random order
    const displayRandom = () => {
        const cardList = document.querySelectorAll(".carItem")
        cardList.forEach (card => {
            card.style.order = Math.floor(Math.random() * 15)
        })
    }

    return (
        <div className="container">
            <div className="header">
                <div className="heading">
                    <div className="gameHeading">
                        <h2 className="heading1">Forza</h2>
                        <div className="heading2">
                            <h2 >Horizon</h2>
                        </div>
                    </div>
                    <h1 className="headingGame">Memory Card</h1>
                </div>
                <div className="score">
                    <h4>Score: {score} </h4>
                    <h4>Best Score: {bestScore} </h4>
                </div>
            </div>
            <div className="cardList">
                {displayCardList(images)}
            </div>
        </div>
    )
}