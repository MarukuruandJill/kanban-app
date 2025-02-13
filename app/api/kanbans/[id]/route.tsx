import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

//Show機能用
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
    try {
        const kanban = await prisma.kanban.findUnique({
            where: { id: Number(id) },  // Convert to number
        });

        if (!kanban) {
            return NextResponse.json({ error: 'Kanban not found' }, { status: 404 });
        }
        return NextResponse.json({ kanban });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// // edit機能用
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const data = await request.json();
        const updatedKanban = await prisma.kanban.update({
            where: { id: Number(params.id) },
            data: data,
        });

        return NextResponse.json(updatedKanban);
    } catch (error) {
        console.error('Error updating kanban:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
