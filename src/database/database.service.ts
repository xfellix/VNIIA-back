import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'DocumentsSQL',
      password: '12345',
      port: 5432,
    });
  }

  async getDataFromDatabase(): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query('SELECT * FROM infodocuments');
      return result.rows;
    } finally {
      client.release();
    }
  }

  async deleteDataById(id: number): Promise<void> {
    const client = await this.pool.connect();
    try {
      const query = 'DELETE FROM infodocuments WHERE id = $1';
      await client.query(query, [id]);
    } finally {
      client.release();
    }
  }

  async updateDataById(id: number, updatedData: any): Promise<void> {
    const client = await this.pool.connect();
  
    try {
      const query = 
        'UPDATE infodocuments SET infonumber = $2, infodate = $3, infosum = $4, infonote = $5, infospecification = $6 WHERE id = $1';

      await client.query(query, [
        id,
        updatedData.infonumber,
        updatedData.infodate,
        updatedData.infosum,
        updatedData.infonote,
        JSON.stringify(updatedData.infospecification)
      ]);
    } finally {
      client.release();
    }
  }

  async addData(newData): Promise<void> {
    const client = await this.pool.connect();
    try {
        const query = 
            'INSERT INTO infodocuments (infonumber, infodate, infosum, infonote, infospecification) VALUES ($1, $2, $3, $4, $5)';
        await client.query(query, [
            newData.infonumber,
            newData.infodate,
            newData.infosum,
            newData.infonote,
            JSON.stringify(newData.infospecification)
        ]);
    } finally {
        client.release();
    }
}
}