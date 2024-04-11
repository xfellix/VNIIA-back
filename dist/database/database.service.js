"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let DatabaseService = class DatabaseService {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'DocumentsSQL',
            password: '12345',
            port: 5432,
        });
    }
    async getDataFromDatabase() {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM infodocuments');
            return result.rows;
        }
        finally {
            client.release();
        }
    }
    async deleteDataById(id) {
        const client = await this.pool.connect();
        try {
            const query = 'DELETE FROM infodocuments WHERE id = $1';
            await client.query(query, [id]);
        }
        finally {
            client.release();
        }
    }
    async updateDataById(id, updatedData) {
        const client = await this.pool.connect();
        try {
            const query = 'UPDATE infodocuments SET infonumber = $2, infodate = $3, infosum = $4, infonote = $5, infospecification = $6 WHERE id = $1';
            await client.query(query, [
                id,
                updatedData.infonumber,
                updatedData.infodate,
                updatedData.infosum,
                updatedData.infonote,
                JSON.stringify(updatedData.infospecification)
            ]);
        }
        finally {
            client.release();
        }
    }
    async addData(newData) {
        const client = await this.pool.connect();
        try {
            const query = 'INSERT INTO infodocuments (infonumber, infodate, infosum, infonote, infospecification) VALUES ($1, $2, $3, $4, $5)';
            await client.query(query, [
                newData.infonumber,
                newData.infodate,
                newData.infosum,
                newData.infonote,
                JSON.stringify(newData.infospecification)
            ]);
        }
        finally {
            client.release();
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseService);
//# sourceMappingURL=database.service.js.map