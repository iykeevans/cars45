import React from 'react';
import { useRouter } from 'next/router'

const Feedbackbutton = (props) => {
    const router = useRouter()
    const go = () => {
        document.getElementById('survey-go').click()
    }
    return (
        <div className="feedback-button">
            <a className="d-none" id="survey-go" href="https://docs.google.com/forms/d/1uvqqKDzYS7pOVG1wKOoyNpVeyYTJpE1mXXYh0-y-IdE/edit" target="_blank">Survey link</a>
            {/* <button className="btn btn-danger" onClick={() => router.push('/feedback')}>Feedback</button> */}
            <button className="btn btn-danger" onClick={() => go()}>Feedback</button>
        </div>
    )
}

export default Feedbackbutton
