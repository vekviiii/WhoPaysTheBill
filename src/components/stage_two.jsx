import { useContext, useState } from "react"
import { MyContext } from "../context"


const Stage2 = () => {

const context = useContext(MyContext)

    return(
        <>
            <div className="result_wrapper">
                <h3> The Loser Is: </h3>
                { context. result }
            </div>
            <div 
            className="action_button"
            onClick={() => context.resetGame()}
            >
                START OVER
            </div>
            <div 
            className="action_button btn_2"
            onClick={() => context.getNewLooser()}
            >
                GET NEW LOOSER
            </div>
        </>
    )
}

export default Stage2