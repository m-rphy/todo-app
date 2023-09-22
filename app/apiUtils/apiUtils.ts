// This file handles all the api requests
export const postTodo = async (todo: string) => {
   try {
     const res = await fetch(`http://localhost:3030/api/data/post`, {
       method: 'POST',
       cache: 'no-store',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify( { name: todo, isDone: false } ),
     });
     
     return res.json();

   } catch (err) {
       console.error('Error:', err);
       throw err; 
   }
 };

