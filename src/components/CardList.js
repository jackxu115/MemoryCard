import images from './Images'
import {Card} from "./Card";
import {useState} from "react";

export const CardList = () => {

    const [score, setScore] = useState(0)

    const [bestScore, setBestScore] = useState(0)

    const updateScore = childData => {
        if(childData) {
            setScore(a => a + 1)
        }
        else {
            setScore(0)
            setBestScore(score)
        }
    }

    return (
        <div>
            <div>
                <h1>Memory Card</h1>
                <div>
                    <h2>Score: {score} </h2>
                    <h2>Best Score: {bestScore} </h2>
                </div>
            </div>
            {images.map((image, key )=> {
                return (
                    <Card
                        imageURL={image}
                        key={key}
                        id={key.toString()}
                        updateScore = {updateScore}
                    />
                )
            })}
        </div>
    )
}