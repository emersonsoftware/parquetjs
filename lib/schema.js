var parquet_thrift = require('../gen-nodejs/parquet_types')

/**
 * A parquet file schema
 */
class ParquetSchema {

  constructor() {
    this.columns = [];
  }

  /**
   * Adds a new column to the schema -- nested columns are currently not supported
   */
  addColumn(col) {
    if (!col.type || !col.type in parquet_thrift.Type) {
      throw "invalid parquet type: " + col.type;
    }

    col.thrift_type = parquet_thrift.Type[col.type];
    this.columns.push(col);
  }

};

module.exports = { ParquetSchema };
