const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get(id){
    const sql = `SELECT * FROM ${config.table} WHERE UserID = ?`;
    const params = [id];
    const results = await db.query(sql, params);
    return results[0];
}

async function getMultiple(page = 1){
    const offset = helper.getOffset(page);
    const row = await db.query(`
        SELECT * FROM ${config.table}
        LIMIT ?, ?
    `, [offset, config.listPerPage]);

    const data = helper.emptyOrRows(row);
    const meta = {page};

    return {data, meta};
}

async function create(data){
    const row = await db.query(`
        INSERT INTO ${config.table}
        (FirstName, LastName, Role) VALUES (?, ?, ?)
    `, [data.firstname, data.lastname, data.role]);

    return row;
}

async function update(id, data){
    const row = await db.query(`
        UPDATE ${config.table}
        SET FirstName = ?, LastName = ?, Role = ?
        WHERE UserID = ?
    `, [data.FirstName, data.LastName, data.Role, id]);

    return row;
}

async function remove(id){
    const row = await db.query(`
        DELETE FROM ${config.table}
        WHERE UserID = ?
    `, [id]);
    
    return row;
}

module.exports = {
    get,
    getMultiple,
    create,
    update,
    remove
};