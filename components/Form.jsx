import Link from "next/link"

const Form = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-cyan-500 hover:to-blue-600 transition-all duration-500 cursor-default">
                    {type} Post
                </span>
            </h1>
            <p className="desc text-left max-w-md">
                {type === "Create" ?
                    "Unleash your creativity and contribute to our growing collection of AI prompts. Share your expertise and help others achieve remarkable results across any AI platform." :
                    "Perfect your prompt's potential. Refine your creation to inspire others and unlock even more powerful AI-generated outcomes."
                }
            </p>
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
                    <textarea value={post.prompt} onChange={(e) => setPost(
                        { ...post, prompt: e.target.value })}
                        placeholder="Write your prompt here..."
                        required
                        className="form_textarea" />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700 mb-2">
                        <span className="text-gray-900">Tag:</span> {` `}
                        <span className="font-normal">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                #fullstackdevelopment
                            </span>
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                #machinelearning
                            </span>
                            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                #idea
                            </span>
                        </span>
                    </span>
                    <input value={post.tag} onChange={(e) => setPost(
                        { ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                        className="form_input" />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>
                    <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form
