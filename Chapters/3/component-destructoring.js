// Destructuring Component
import React, { Component} from 'react'
//import ReactDOM from 'react-dom'
import { render } from 'react-dom'

let RunningData = {
    total: 130,
    sunny: 50,
    countryside: 80,
    goal: 100
}

// Now we don't need to write React.Component
class RunningDayCounter extends Component{
    render(){
        // We can reference this.props here instead
        // and tidy up the code written in the <section>
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
                    <p>Goal: {goal}</p>
                </div>
            </section>
        )
    }
}

// We no longer need ReactDOM
render(
    <RunningDayCounter
        total={RunningData.total}
        sunny={RunningData.sunny}
        countryside={RunningData.countryside}
        goal={RunningData.goal}
        />,
    document.getElementById('root')
)
