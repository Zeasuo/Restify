import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Details from './Details';
import Description from './Description';
import Confirmation from './Confirmation';
import Success from './Success';

// followed this blog: https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968#0779
const AddRestaurant = () => {
    const [state, setState] = useState({
        step: 1,
        name: '',
        location: '',
        postalCode: '',
        description: '',
        logo: '',
    })
    
    // previous step
    const prevStep = () => {
        setState({
            ...state, 
            step: state.step - 1
        })
    }

    // next step
    const nextStep = () => {
        setState({
            ...state,
            step: state.step + 1
        })
    }

    const handleChange = input => e => {
        setState({
            ...state,
            [input]: e.target.value
        })
    }

    // use switch to render different steps
    const renderStep = () => {
        switch(state.step) {
            case 1:
                return <Details
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                />
            case 2:
                return <Description
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    state={state}
                />
            case 3:
                return <Confirmation
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    state={state}
                />
            case 4:
                return <Success
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    state={state}
                />
            default:
                return null
        }
    }

    return (
        <div>
            {renderStep()}
        </div>
    )
}

export default AddRestaurant

