const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Thought = db.define('Thought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  }
})

Thought.belongsTo(User) // 1 Thought pertence a 1 User
User.hasMany(Thought) // 1 User pertence a varios Thought

module.exports = Thought