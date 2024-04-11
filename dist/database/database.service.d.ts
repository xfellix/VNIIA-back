export declare class DatabaseService {
    private pool;
    constructor();
    getDataFromDatabase(): Promise<any>;
    deleteDataById(id: number): Promise<void>;
    updateDataById(id: number, updatedData: any): Promise<void>;
    addData(newData: any): Promise<void>;
}
