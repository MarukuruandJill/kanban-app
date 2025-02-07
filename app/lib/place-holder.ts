import { Kanban } from "./interface/Kanban";

export const kanbans: Kanban[] = [
    {
        id: 1,
        title: "最初のタスク",
        content: "これは最初のタスクです",
        createdAt: new Date('2025-01-30'),
        updatedAt: new Date('2025-01-31'),
        deadLine: new Date('2025-02-08'),
        status: "Done"
    },
    {
        id: 2,
        title: "2番目のタスク",
        content: "これは2番目のタスクです",
        createdAt: new Date('2025-02-01'),
        updatedAt: new Date('2025-02-02'),
        deadLine: new Date('2025-02-10'),
        status: "Working"
    },
    {
        id: 3,
        title: "3番目のタスク",
        content: "これは3番目のタスクです",
        createdAt: new Date('2025-02-05'),
        updatedAt: new Date('2025-02-06'),
        deadLine: new Date('2025-02-28'),
        status: "ToDo"
    }
]