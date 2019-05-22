import React, { Component} from 'react'
import { render } from 'react-dom'

let RunningData = {
    total: 130,
    sunny: 50,
    countryside: 80,
    goal: 150
}

class RunningDayCounter extends Component{
    // We've added two custom methods
    // Designed to give us a percentage of how close we are to our goal
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }
    // We call this method within the <section>
    render(){
        const { total, sunny, countryside, goal} = this.props
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
                    <p>Goal Progress: {this.calcGoalProgress(total,goal)}</p>
                </div>
            </section>
        )
    }
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
