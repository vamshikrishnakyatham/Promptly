import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="text-6xl font-bold text-center tracking-tight">
                Create & Explore {` `}
                <br className="max-md:hidden" />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                    Creative AI Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Unlock creativity with Promptly: The open-source AI tool to discover, create, and share inspiring prompts for the modern world.
            </p>
            <Feed />
        </section>
    )
}

export default Home
