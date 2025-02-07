// import { kanbans } from '@/app/lib/place-holder';
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
    try {
        const kanbans = await prisma.kanban.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json({ kanbans });
    } catch (error) {
        console.log(error);
    }
}

export async function POST(request: Request) {
    try {
        const { title, content, status, deadLine } = await request.json();
        const kanban = await prisma.kanban.create({
            data: { title, content, status, deadLine },
        });
        return NextResponse.json({ kanban });
    } catch (error) {
        console.error('Error creating kanban: ', error);
        return NextResponse.json({error: 'Internal Server Error'},{ status: 500 } );
    }   
}