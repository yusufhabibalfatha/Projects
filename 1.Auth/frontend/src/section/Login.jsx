import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Login = () => {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const loginData = Object.fromEntries(formData)
        const res = await fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        const result = await res.json()
        if (!result.status) {
            setError(true)
            setMessage(result.msg)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return
        }
        location.href = '/'
    }
    return (
        <form
            action=""
            onSubmit={handleSubmit}
            method="post"
            className="relative flex w-4/5 flex-col items-center md:w-2/4 lg:w-2/5"
        >
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="absolute top-0 flex h-1/3 w-2/3 items-center justify-center rounded-md border border-one text-3xl text-one backdrop-blur-3xl"
                    >
                        <h1>{message}</h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="text-center">
                <h1 className="text-5xl font-bold md:text-6xl">Login</h1>
                <p className="mt-2 text-sm text-two md:text-lg">
                    To see content of the app you must login first.
                </p>
            </div>
            <div className="mt-9 flex w-full flex-col">
                <label htmlFor="email" className="md:text-lg">
                    Email*
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-md border-2 border-one px-1 sm:py-1"
                />
            </div>
            <div className="mt-2 flex w-full flex-col">
                <label htmlFor="password" className="md:text-lg">
                    Password*
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="rounded-md border-2 border-one px-1 sm:py-1"
                />
            </div>
            <button
                type="submit"
                className="mt-9 w-fit self-center rounded-md bg-one px-4 py-1 text-white sm:px-5 sm:py-2 sm:text-xl"
            >
                Login
            </button>
            <Link to="/signup" className="mt-2 text-two">
                If you don't have an account you can{' '}
                <span className="text-one underline">Signup</span>
            </Link>
        </form>
    )
}

export default Login
