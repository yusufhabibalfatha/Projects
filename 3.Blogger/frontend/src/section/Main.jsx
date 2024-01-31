import Blogs from './Blogs'
import Header from './Header'

const Main = () => {
    return (
        <div>
            <Header />
            <main className="mt-9">
                <div className="flex flex-col">
                    <label htmlFor="search" className="text-sm md:text-xl">
                        Search*
                    </label>
                    <input
                        type="text"
                        id="search"
                        className="rounded-md border border-one px-1"
                    />
                </div>
                <Blogs />
            </main>
        </div>
    )
}

export default Main
