"use client";

import { useRouter } from 'next/navigation';
import { TodoElementInterface } from "../types"
import { ChangeEvent } from 'react';

const updateTodoListElement = async (_id: string, _isDone: boolean, refresh: () => void) => {

    const isDone = _isDone == true ? false : true;

    try {
        const res = await fetch('http://localhost:3030/api/data/update/'+_id, {
            method: 'PATCH',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isDone })
        });
        refresh();

    } catch (err) {
        console.error('Error:', err);
        throw err; 
    }
};

const deleteTodoListElement = async (_id: string, refresh: () => void) => {
    try {
        const res = await fetch('http://localhost:3030/api/data/delete/'+_id, {
            method: 'DELETE',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        refresh();

    } catch (err) {
        console.error('Error:', err);
        throw err; 
    }
};

export const ListElement: React.FC<TodoElementInterface> = ({ _id, name, isDone }) => {
    const router = useRouter();
    return (
        <div>
            <input 
                id={_id} 
                type="checkbox" 
                checked={isDone} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {updateTodoListElement(e.target.id, isDone, router.refresh)}} 
            />
            {name}
            <button 
                id={_id} 
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {deleteTodoListElement(e.currentTarget.id, router.refresh)}}
            >
                Delete
            </button>
        </div>
    )
}