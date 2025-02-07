import { Kanban } from "../lib/interface/Kanban";
// import { kanbans } from "../lib/place-holder";
import KanbanBoard from "../ui/KanbanBoard";

async function getKanbans(): Promise<Kanban[]> {
        const res = await fetch('http://localhost:3000/api/kanbans', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        return data.kanbans;
}
    
export default async function kanbanList() {
    const kanbans = await getKanbans();

    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold m-10">Kanban List</h1>
            <div>
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="container p-3 border-2 border-solid rounded-lg">
                        <div className="text-center">
                            <p className="text-4xl font-semibold ml-10">ToDo</p>
                        </div>
                        {kanbans.map((kanban: Kanban) => {
                            if (kanban.status == "ToDo") {
                                return<KanbanBoard key={kanban.id} kanban={kanban} />
                            }
                        })}
                    </div>
                    
                    <div className="container p-3 border-2 border-solid rounded-lg">
                        <div className="text-center">
                            <p className="text-4xl font-semibold ml-10">Working...</p>
                        </div>
                        {kanbans.map((kanban: Kanban) => {
                            if (kanban.status == "Working") {
                                return<KanbanBoard key={kanban.id} kanban={kanban} />
                            }
                        })}
                    </div>
                
                    <div className="container p-3 border-2 border-solid rounded-lg">
                        <div className="text-center">
                            <p className="text-4xl font-semibold ml-10">Done</p>
                        </div>
                        {kanbans.map((kanban: Kanban) => {
                            if (kanban.status == "Done") {
                                return<KanbanBoard key={kanban.id} kanban={kanban} />
                            }
                        })}
                    </div>           
                </div>
            </div>
        </div>
    )

}

//grid gap-6 md:grid-cols-2 lg:grid-cols-3