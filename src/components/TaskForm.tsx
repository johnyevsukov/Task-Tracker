import React, { useState } from 'react'
import { IState as Props } from '../App'
import { BsPlusSquareFill } from 'react-icons/bs'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 18rem;
display: flex;
align-items: center;
justify-content: center;
`

const Form = styled.form`
border: 2px solid #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
height: 230px;
border-radius: 5px;
background: rgba(112, 167, 255, .8);
margin-bottom: .5rem;

/* mobile */
@media (max-width: 600px) {
    width: 300px;
}
`

const Input = styled.input`
width: 18rem;
height: 2rem;
border-radius: 5px;
border: none;
margin: .5rem;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
font-size: 20px;
padding-left: 5px;

/* mobile */
@media (max-width: 600px) {
    width: 16rem;
}
`

const TextArea = styled.textarea`
width: 18rem;
height: 4rem;
resize: none;
border-radius: 5px;
border: none;
margin-bottom: .5rem;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
font-size: 20px;
padding-left: 5px;

/* mobile */
@media (max-width: 600px) {
    width: 16rem;
}
`

const Button = styled.button`
width: 9rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center;
color: ${pr => pr.theme.confirmColor};
font-size: 20px;
cursor: pointer;
position: relative;
background: white;
border: none;
border-radius: 5px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: ease-in-out 170ms;

/* mobile */
@media (max-width: 600px) {
    width: 7rem;
}

/* desktop only hover effects */
@media (min-width: 950px) {
    :hover {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        background: rgba(14, 220, 0, .8);
        color: white;
    }
    
    ::after {
        content: 'Add Task';
        font-size: 25px;
        font-weight: bold;
        -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgb(0,100,0);
        display: block;
        position: absolute;
        padding: .7em 1.2em;
        color: #fff;
        border-radius: 5px;
        background: ${pr => pr.theme.confirmBoxColor};
        bottom: 30%;
        left: 105%;
        transition:
            transform ease-in-out 170ms;
        transform: scale(0);
    }
    
    :hover::after {
        transform: scale(1) rotate(360deg);
    }
}
`

interface IProps {
    tasks: Props["tasks"]
    setTasks: React.Dispatch<React.SetStateAction<Props["tasks"]>>
}

const initialFormValues = {
    name: '',
    notes: '',
    completed: false,
    id: 0
}

const TaskForm: React.FC<IProps> = ({ tasks, setTasks }) => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
            id: Date.now()
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (formValues.name === '') {
            return
        }
        setTasks([
            ...tasks,
            formValues
        ])
        setFormValues(initialFormValues)
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='task'
                    value={formValues.name}
                    onChange={handleChange}
                    name='name'
                />
                <TextArea
                    placeholder='notes'
                    value={formValues.notes}
                    onChange={handleChange}
                    name='notes'
                />
                <Button>
                    <BsPlusSquareFill />
                </Button>
            </Form>
        </Wrapper>
    )
}

export default TaskForm
