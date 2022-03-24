const e = require("express");

function getOffset(currentPage = 1, perPage = 10) {
  return (currentPage - 1) * perPage;
}   // getOffset(1, 10) => 0

function emptyOrRows(rows) {
  return rows.length === 0 ? [] : rows;
}   // emptyOrRows([]) => []

module.exports = {
    getOffset,
    emptyOrRows
};