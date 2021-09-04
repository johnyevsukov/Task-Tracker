import React from 'react'
import TaskItem from './TaskItem'
import { IState as Props } from '../App'
import styled from 'styled-components'

const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`

interface IProps {
    tasks: Props["tasks"]
    setTasks: React.Dispatch<React.SetStateAction<Props["tasks"]>>
}

const TaskList: React.FC<IProps> = ({ tasks, setTasks }) => {
    return (
        <List>
            {
                tasks.map((task: any) => {
                    return <TaskItem task={task} tasks={tasks} setTasks={setTasks}/>
                })
            }
        </List>
    )
}

export default TaskList
