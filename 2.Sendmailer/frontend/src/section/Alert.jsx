import { CiMail } from 'react-icons/ci'
import { motion } from 'framer-motion'
const Alert = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: 0 }}
            className="border-one absolute top-3/4 flex w-[85%] gap-4 rounded-md border bg-white p-2 pl-4 shadow-xl"
        >
            <CiMail size={48} className="p-0" />
            <div>
                <h1 className="font-bold">Send is successful!</h1>
                <p className="text-two">
                    Now your friend can see the email you just send.
                </p>
            </div>
        </motion.div>
    )
}

export default Alert
