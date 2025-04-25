export interface ITodo {
    id: string;
    title: string;
    description?: string | null;
    completed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    userId: string | null;
}

