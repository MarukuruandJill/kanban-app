import { Kanban } from "../lib/interface/Kanban"

interface KanbanBoardProps {
    kanban: Kanban;
}

export default function KanbanBoard({kanban}: KanbanBoardProps) {
    return (
        <div className="container pl-5 border-2 border-solid rounded-lg mb-2">
            <p className="text-lg font-semibold mb-1">{kanban.title}</p>
            <p className="text-lg mb-1">{kanban.content}</p>
            <p className="text-lg mb-1">{new Date(kanban.deadLine).toLocaleDateString()}</p>
        </div>
    );
}