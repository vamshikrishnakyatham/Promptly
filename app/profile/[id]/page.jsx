"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const [userPosts, setUserPosts] = useState([]);
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const usernameParam = searchParams.get("username");
        const nameParam = searchParams.get("name");

        if (usernameParam) setUserName(usernameParam);
        if (nameParam) setName(nameParam);
    }, [searchParams]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile
            name={name}
            desc={`Discover ${name}'s creative portfolio. Browse through their curated collection of innovative prompts and professional work`}
            data={userPosts}
        />
    );
};

export default UserProfile;