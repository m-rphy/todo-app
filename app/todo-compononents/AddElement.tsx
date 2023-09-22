"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { postTodo } from "../apiUtils/apiUtils";

export const AddElement: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const router = useRouter();

    const postTodoListElement = async (todo: string, refresh: () => void) => {
        try {
          await postTodo;
          // TODO
          setInputValue('');
          refresh();
    
        } catch (err) {
            console.error('Error:', err);
            throw err; 
        }
      };

    return (
        <div >
            <input 
                type='text'
                value={inputValue}
                placeholder='Enter Todo Item' 
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value) }
            />
            <button 
              onClick={ () => postTodoListElement(inputValue, router.refresh) }
            >
                Add
            </button>
        </div>
    );
}
