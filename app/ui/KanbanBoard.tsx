"use client"

import Link from "next/link";
import { Kanban } from "../lib/interface/Kanban"
import { useRouter } from "next/navigation";

interface KanbanBoardProps {
    kanban: Kanban;
}

export default function KanbanBoard({ kanban }: KanbanBoardProps) {
    const router = useRouter();
    return (
        <div className="container pl-5 border-2 border-solid rounded-lg mb-2">
            <Link href={`/kanban/${kanban.id}`}>
                <p className="text-lg font-semibold mb-1 hover:text-blue-600">
                    {kanban.title}
                </p>
            </Link>
            <p className="text-lg mb-1">{kanban.content}</p>
            <div className="flex justify-between">
            <p className="text-lg mb-1">{new Date(kanban.deadLine).toLocaleDateString()}</p>
                    <button
                    type="button"
                    className="border rounded-lg m-2 bg-green-500 text-white px-2 py-1 hover:bg-green-700"
                    onClick={() => router.push(`/kanban/edit/${kanban.id}`)}>
                            Edit
                    </button>
                </div>
        </div>
    );
}