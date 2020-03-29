const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('shoul be able to create a new ONG', async () => {
        const response = await request(app)  
            .post('/ongs')
            .send({
                name: "APAD",
	            email: "contato@test.com",
	            whatsapp: "9999999999",
	            city: "Cachoeiro de Itapemirim",
	            uf: "ES"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});