import { LuSendHorizonal } from 'react-icons/lu'

const Submit = () => {
    return (
        <button
            type="submit"
            className="bg-one mx-auto mt-10 flex items-center gap-1 rounded-md px-4 py-2 text-white transition-all hover:bg-zinc-800"
        >
            Send
            <LuSendHorizonal />
        </button>
    )
}

export default Submit
