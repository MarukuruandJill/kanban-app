'use client';
// import KanbanBoard from "@/app/ui/KanbanBoard";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function NewKanban() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState("ToDo");
    const [deadLine, setDeadLine] = useState<Date>(new Date());
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Kanban: ", { title, content, status, deadLine });
        try {
            const response = await fetch('../api/kanbans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, status, deadLine }),
            });
            if (response.ok) {
                router.push('/kanban');
                router.refresh();
                } else {
                    throw new Error('Failed to create kanban');
                }
        } catch(error) {
            console.error('Error creating post: ', error);
            alert('Failed to create post. Please try again.');    
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-5">New</h1> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label  htmlFor="title" className="block mb-2 text-xl">Title</label>
                    <input 
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded-lg w-full px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label  htmlFor="content" className="block mb-2 text-xl">Content</label>
                    <textarea 
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border rounded-lg w-full px-3 py-2"
                        rows={5}
                        required
                    />
                </div>
                <div>
                    <label  htmlFor="selectedStatus" className="block mb-2 text-xl">Status</label>
                    <select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        className="border rounded-lg w-full px-3 py-2"
                    >
                        <option value="ToDo">ToDo</option>
                        <option value="Working">Working</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="deadLine" className="block mb-2 text-xl">Deadline</label>
                    <input
                        type="date"
                        id="deadLine"
                        onChange={(e) => setDeadLine(new Date(e.target.value))}
                        className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="border rounded-lg m-2 bg-sky-500 text-white p-2 hover:bg-sky-700">
                            Submit
                    </button>
                </div>
            </form>
        </div>
    )
}