import ReaHt, { Component } from 'react'
import Habit from './habit'

export default class Habits extends Component {
    state = {
        habits : [
            { name: 'Reading', conunt: 0},
            { name: 'Running', conunt: 0},
            { name: 'Coding', conunt: 0},
        ],
    };
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit habit={habit}/>
                ))}
            </ul>
        );
    }
}
