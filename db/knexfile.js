// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knex_tutorial",
      user: "zaxiya",
      password: null,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
