import {useEffect, useState} from "react";


export const Card = ({imageURL, id, updateScore, displayRandom, reset, hasReset}) => {
    const idNumber = `card${id}`
    const [selection, setSelection] = useState(false)

    const updateSelection = () => {
        setSelection(a => !a)
    }

    const resetState = () => {
        if (reset === true) {
            setSelection(false)
            hasReset()
        }
    }

    useEffect(()=> {
        updateScore(selection)
        displayRandom()
        resetState()
    }, [selection, reset])

    console.log('card')
    return (
        <div className="carItem" id={idNumber}>
            <img
                src={imageURL}
                className="car"
                onClick={updateSelection}
            />
        </div>
    )
}