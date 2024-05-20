import { Link } from 'react-router-dom'

const Signup = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const signupData = Object.fromEntries(formData)

        const res = await fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
        const result = await res.json()
        console.log('result > ', result)
    }
    return (
        <form
            action=""
            method="post"
            className="flex w-4/5 flex-col items-center md:w-2/4 lg:w-2/5"
            onSubmit={handleSubmit}
        >
            <div className="text-center">
                <h1 className="text-5xl font-bold md:text-6xl">Signup</h1>
                <p className="mt-2 text-sm text-two md:text-lg">
                    Create account to login the app, and first you must have
                    account or create account.
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
                Signup
            </button>
            <Link to="/login" className="mt-2 text-two">
                If you done have an account you can{' '}
                <span className="text-one underline">Login</span>
            </Link>
        </form>
    )
}

export default Signup
