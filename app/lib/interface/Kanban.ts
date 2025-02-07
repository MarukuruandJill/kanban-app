export interface Kanban {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deadLine: Date;
    status: 'ToDo' | 'Working' | 'Done';
}