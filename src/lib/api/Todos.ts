const apiUrl:string = "https://jsonplaceholder.typicode.com";
import { Todo } from "@/lib/types/Todo";

export const getTodos = async () => {
    try {
        const res = await fetch(
            `${apiUrl}/todos`,
            {
                method: 'GET',
            }
        );
        const data:Array<Todo> = await res.json();
        return data;
    } catch (err:any) {
        return ["Error", err+""]
    }
};