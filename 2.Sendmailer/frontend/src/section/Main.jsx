import Form_from from './Form_from'
import Form_to from './Form_to'
import Submit from './Submit'
import Alert from './Alert'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Main = () => {
    const [success, setSuccess] = useState(false)
    const submittest = (e) => {
        e.preventDefault()
        const formApp = new FormData(e.target)
        const data = Object.fromEntries(formApp)

        fetch('http://localhost:5000/sendmail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 2500)
            })
    }
    return (
        <main>
            <form action="" onSubmit={submittest}>
                <Form_from />
                <Form_to />
                <Submit />
            </form>
            <AnimatePresence>{success && <Alert />}</AnimatePresence>
        </main>
    )
}

export default Main
