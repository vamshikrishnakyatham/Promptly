import PromptCard from "./PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className="w-full">
            <h1 className="head_text text-left bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-cyan-500 hover:to-blue-600 transition-all duration-500 cursor-default">
                <span className="blue_gradient">{name} Profile</span>
            </h1>
            <p className="desc text-left">{desc}</p>
            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard key={post._id} post={post} handleEdit={() => { handleEdit && handleEdit(post) }} handleDelete={() => { handleDelete && handleDelete(post) }} />
                ))}
            </div>
        </section>
    )
}

export default Profile
