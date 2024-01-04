//You can use interface or the class that is inside the model.tsx file

export interface Todo {
    title: string, 
    description: string, 
    done: boolean,
    id?: string //optional value
}