import Link from "next/link";
import { Kanban } from "../lib/interface/Kanban"

interface KanbanBoardProps {
    kanban: Kanban;
}

export default function KanbanBoard({kanban}: KanbanBoardProps) {
    return (
        <div className="container pl-5 border-2 border-solid rounded-lg mb-2">
            <Link href={`/kanban/${kanban.id}`}>
                <p className="text-lg font-semibold mb-1 hover:text-blue-600">
                    {kanban.title}
                </p>
            </Link>
            <p className="text-lg mb-1">{kanban.content}</p>
            <p className="text-lg mb-1">{new Date(kanban.deadLine).toLocaleDateString()}</p>
        </div>
    );
}