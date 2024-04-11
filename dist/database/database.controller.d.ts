import { DatabaseService } from './database.service';
export declare class DatabaseController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getData(): Promise<any>;
    deleteDataById(id: number): Promise<{
        message: string;
    }>;
    updateDataById(id: number, updatedData: any): Promise<{
        message: string;
    }>;
    addData(newData: any): Promise<{
        message: string;
    }>;
}
