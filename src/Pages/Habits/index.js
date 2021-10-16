
import './style1.js'
import FilterHabits from '../../Components/FilterPageHabits'
import React, { useContext } from 'react'
import  ProgressBar  from '../../Components/ProgressBar'
import Habit from '../../Components/Habit'
import { useEffect } from 'react'
import api from '../../Services/api'
import { UserContext } from '../../Providers/user'
import { Container, HabitsContainer } from './style1.js'
const HabitsPage = () => {
    const { callingHabits, currentFilterHabits } = useContext(UserContext)
    useEffect(()=>{
        callingHabits()
    },[])
    return (
        <Container>
            <FilterHabits />
            <HabitsContainer>
                {currentFilterHabits.map((habit, index)=>(
                    <Habit key={index} title={habit.title} description={habit.category} percentage={habit.how_much_achieved} />
                ))}
            </HabitsContainer>
        </Container>
        
    )
}

export default HabitsPage