'use client';
// import { Kanban } from "@prisma/client";
import {useParams, useRouter} from "next/navigation";
import { useState } from "react";


export default function EditKanban() {
    const params = useParams();
    const kanbanId = params.id
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState("ToDo");
    const [deadLine, setDeadLine] = useState<Date>(new Date());
    const router = useRouter();

    // useEffect(() => {
    //     const fetchKanban = async () => {
    //         try {
    //             const res = await fetch(`/api/kanbans/${kanbanId}`, { cache: 'no-store' });
    //             if (!res.ok) throw new Error('Failed to fetch kanban');

    //             const data = await res.json();
    //             setTitle(data.title ?? "");
    //             setContent(data.content ?? "");
    //             setStatus(data.status ?? "ToDO");
    //             setDeadLine(data.deadLine ?? ""); // 日付部分のみ取得
    //         } catch (error) {
    //             console.error(error);
    //             alert('Failed to load kanban data.');
    //         }
    //     };

    //     fetchKanban();
    // }, [kanbanId]);
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Edited Kanban: ", { title, content, status, deadLine });
        try {
            const response = await fetch(`../../api/kanbans/${kanbanId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, status, deadLine }),
            });
            // console.log("api fetched")
            if (response.ok) {
                router.push('/kanban');
                router.refresh();
                } else {
                    throw new Error('Failed to edit kanban');
                }
        } catch(error) {
            console.error('Error creating kanban: ', error);
            alert('Failed to edit kanban. Please try again.');    
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-5">Edit</h1> 
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