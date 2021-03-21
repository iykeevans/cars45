import React from 'react';
import { useRouter } from 'next/router'

const Feedbackbutton = (props) => {
    const router = useRouter()
    return (
        <div className="feedback-button">
            <button className="btn btn-danger" onClick={() => router.push('/feedback')}>Feedback</button>
        </div>
    )
}

export default Feedbackbutton
