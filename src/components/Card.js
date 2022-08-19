import {useEffect, useState} from "react";


export const Card = ({imageURL, id, updateScore, displayRandom, reset, hasReset, company, model}) => {
    const idNumber = `card${id}`

    const [selection, setSelection] = useState(false)

    // callback function to update the "selection" state
    const updateSelection = () => {
        setSelection(a => !a)
    }

    // call back function to reset state
    const resetState = () => {
        if (reset === true) {
            setSelection(false)
            hasReset()
        }
    }

    // callback functions to call parent functions
    useEffect(()=> {
        updateScore(selection)
        displayRandom()
        resetState()
    }, [selection, reset])

    return (
        <div className="carItem" id={idNumber} onClick={updateSelection}>
            <div className="carInfo">
                <p className="model">{model}</p>
                <p className="company">{company}</p>
            </div>
            <img
                src={imageURL}
                className="car"
            />
        </div>
    )
}