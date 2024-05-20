const Form_to = () => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">to</h1>
            <div className="flex flex-col gap-1">
                <label htmlFor="email-to" className="text-two text-xs">
                    Email*
                </label>
                <input
                    type="email"
                    id="email-to"
                    name="email_to"
                    className="border-two rounded-md border px-1"
                />
            </div>
            <div className="mt-2 flex flex-col gap-1">
                <label htmlFor="subject" className="text-two text-xs">
                    Subject*
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="border-two rounded-md border px-1"
                />
            </div>
            <div className="mt-2 flex flex-col gap-1">
                <label htmlFor="message" className="text-two text-xs">
                    Message*
                </label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    className="border-two rounded-md border px-1"
                />
            </div>
        </div>
    )
}

export default Form_to
