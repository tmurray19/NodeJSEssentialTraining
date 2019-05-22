import React from 'react'
import { render } from 'react-dom'

let RunningData = {
    total: 130,
    sunny: 50,
    countryside: 80,
    goal: 150
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const RunningDayCounter = ({total, sunny, countryside, goal}) => {
    return(
        <section>
            <div>
                <p>Total Days: {total}</p>
            </div>
            <div>
                <p>Sunny Days: {sunny}</p>
            </div>
            <div>
                <p>Country Side Running Days: {countryside}</p>
            </div>
            <div>
                <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
            </div>
        </section>
    )
}


render(
    <RunningDayCounter
        total={RunningData.total}
        sunny={RunningData.sunny}
        countryside={RunningData.countryside}
        goal={RunningData.goal}
        />,
    document.getElementById('root')
)
