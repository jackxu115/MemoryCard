import {useEffect, useState} from "react";


export const Card = ({imageURL, id, updateScore}) => {
    const idNumber = `card${id}`
    const [selection, setSelection] = useState(false)

    const updateSelection = () => {
        setSelection(a => !a)
    }

    useEffect(()=> {
        updateScore(selection)
    }, [selection])

    return (
        <div>
            <img
                src={imageURL}
                id={idNumber}
                className="car"
                onClick={updateSelection}
            />
        </div>
    )
}