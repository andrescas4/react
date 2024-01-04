// This typeScript class works as a constructor to create new Todo's and also as type

export class Todo {
    title: string;
    description: string;
    done: boolean;
    id: string;

    constructor(title: string, description: string, done: boolean){
        this.title= title;
        this.description = description;
        this.id= new Date().toISOString();
        this.done = done;
    }

}