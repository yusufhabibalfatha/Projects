const Form_from = () => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">from</h1>
            <div className="flex flex-col gap-1">
                <label htmlFor="email-from" className="text-two text-xs">
                    Email*
                </label>
                <input
                    type="email"
                    id="email-from"
                    name="email_from"
                    className="border-two rounded-md border px-1"
                />
            </div>
            <div className="mt-2 flex flex-col gap-1">
                <label htmlFor="password" className="text-two text-xs">
                    Password*
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-two rounded-md border px-1"
                />
            </div>
            <p className="text-two mt-2 text-[8px] md:text-xs">
                Note: The password is use from 2 factor authentication and you
                will ask to have app your setting. See the documentation.
            </p>
        </div>
    )
}

export default Form_from
