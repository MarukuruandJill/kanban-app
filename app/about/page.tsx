'use client';
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();
    return (
        <div className="container items-center justify-center m-10 mx-auto">
            <h1 className="text-4xl font-bold">What is Kanban Board?</h1>
            <p className="text-lg font-sans mt-6">
                You can visually manage your tasks!
            </p>
            <button type="button" className="bg-gray-300 p-2 m-5 rounded-md hover:bg-gray-400" onClick={() => router.push('/kanban')}>
                Get Start
            </button>
        </div>
    )
}