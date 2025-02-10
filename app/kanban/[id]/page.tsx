import KanbanDetails from "@/app/ui/KanbanDetails";

async function getKanban(id: number) {
    const res = await fetch(`http://localhost:3000/api/kanbans/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch kanban');
    }
    const data = await res.json();
    return data.kanban;
    
}
export default async function KanbanDetailsShow({ params }: { params: Promise<{ id: number }> }) {
    const {id} = await params
    const kanban = await getKanban(id)

    if (!kanban) {
        return <div>投稿がみつかりません</div>;
    }
    
    return (
        <div>
            <KanbanDetails kanban={kanban}/>
        </div>
    )
}