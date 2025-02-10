import { Kanban } from "@prisma/client";

interface KanbantDetailProps {
    kanban: Kanban;
}


export default function KanbanDetails({kanban}: KanbantDetailProps) {
    return (
        <div className="flex justify-center">
            <div className="container pl-5 border-2 border-solid rounded-lg m-10">
                    <p className="text-lg font-semibold mb-1 hover:text-blue-600">
                        {kanban.title}
                    </p>
                <p className="text-lg mb-1">{kanban.content}</p>
                <p className="text-lg mb-1">{new Date(kanban.deadLine).toLocaleDateString()}</p>
                <p className="text-lg mb-1">{kanban.status}</p>
            </div>
        </div>
    );  
}