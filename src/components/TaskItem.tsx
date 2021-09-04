import React from 'react'
import { IState as Props } from '../App'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillCheckSquare } from 'react-icons/ai'
import styled from 'styled-components'

const ListItem = styled.li`
border: 1px solid white;
border-radius: 5px;
width: 400px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
padding: 1rem;
margin-bottom: .5rem;

/* mobile */
@media (max-width: 600px) {
    width: 300px;
}
`

const ButtonWrapper = styled.div`
display: flex;
margin: 1rem 0 0;
width: 100px;
display: flex;
justify-content: space-around;
`

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.h3`
font-size: 30px;
letter-spacing: 1px;
max-width: 18ch;
word-wrap: break-word;

/* mobile */
@media (max-width: 600px) {
    max-width: 14ch;
}
`

const Paragraph = styled.p`
font-size: 17px;
max-width: 14ch;
max-width: 20ch;
word-wrap: break-word;
`

const CheckButton = styled.button`
width: 40px;
height: 20px;
color: ${pr => pr.theme.confirmColor};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
cursor: pointer;
position: relative;
background: #fff;
border: none;
border-radius: 5px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: ease-in-out 170ms;

/* desktop only hover effects */
@media (min-width: 950px) {
    :hover {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        background: ${pr => pr.theme.confirmColor};
        color: #fff;
    }

    ::after {
        content: 'Check / Uncheck';
        font-size: 20px;
        font-weight: bold;
        -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgb(0,100,0);
        display: block;
        position: absolute;
        padding: .5em 1em;
        color: #fff;
        border-radius: 5px;
        background: ${pr => pr.theme.confirmBoxColor};
        bottom: 30%;
        right: 105%;
        transition:
            transform ease-in-out 170ms;
        transform: scale(0);
    }

    :hover::after {
        transform: scale(1);
    }
}
`

const DeleteButton = styled.button`
width: 40px;
height: 20px;
color: ${pr => pr.theme.cancelColor};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
cursor: pointer;
position: relative;
background: #fff;
border: none;
border-radius: 5px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: ease-in-out 170ms;

/* desktop only hover effects */
@media (min-width: 950px) {
    :hover {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        background: ${pr => pr.theme.cancelColor};
        color: #fff;
    }

    ::after {
        content: 'Delete';
        font-size: 20px;
        font-weight: bold;
        -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgba(218, 0, 0, 1);
        display: block;
        position: absolute;
        padding: .5em 1em;
        color: #fff;
        border-radius: 5px;
        background: ${pr => pr.theme.cancelBoxColor};
        bottom: 30%;
        left: 105%;
        transition:
            transform ease-in-out 170ms;
        transform: scale(0);
    }

    :hover::after {
        transform: scale(1);
    }
}
`

interface IProps {
    task: {
      name: string
      notes?: string
      completed: boolean
      id: number
    }
    tasks: Props["tasks"]
    setTasks: React.Dispatch<React.SetStateAction<Props["tasks"]>>
  }

const TaskItem: React.FC<IProps> = ({ task, tasks, setTasks }) => {

    const toggleComplete = (): void => {
        setTasks(tasks.map((t: any) => {
            if (t.id === task.id) {
                return {
                    ...t, completed: !t.completed
                }
            }
            return t
        }))
    }

    const handleDelete = (): void => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    return (
        <ListItem className={task.completed ? 'completed': ''}>
            <InfoWrapper>
                <Header>{task.name}</Header>
                {task.notes && <Paragraph>{task.notes}</Paragraph>}
            </InfoWrapper>
            <ButtonWrapper>
                <CheckButton onClick={toggleComplete}>
                    <AiFillCheckSquare />
                </CheckButton>
                <DeleteButton onClick={handleDelete}>
                    <MdDeleteForever />
                </DeleteButton>
            </ButtonWrapper>
        </ListItem>
    )
}

export default TaskItem
