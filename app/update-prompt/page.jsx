'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Form from '@components/Form'

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const [promptId, setPromptId] = useState(null);

    useEffect(() => {
        const id = searchParams.get('id');
        setPromptId(id);
    }, [searchParams]);

    useEffect(() => {
        const getPromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptId}`);
            const data = await res.json()
            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }
        if (promptId) getPromptDetails()
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) return alert('Prompt ID not found')

        try {
            const res = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if (res.ok) {
                router.push('/')
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setSubmitting(false)
        }

    }
    return (
        <Suspense>
            <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />
        </Suspense>
    )
}

export default EditPrompt
