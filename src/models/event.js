
import { sequelize, DataTypes } from '../setting/database.js';
import { usuario } from './usuario.js'; 


const evento = sequelize.define('evento', {

    id_event: {
        type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },

    eventName: {
        type: DataTypes.STRING,
    allowNull: false
    },
    
    eventLocation: {
        type: DataTypes.STRING,
    allowNull: false
    },

    eventDateStart: {
        type: DataTypes.DATE,
    allowNull: false
    },

    eventDateEnd: {
        type: DataTypes.DATE,
    allowNull: false
    },

    estadoEvent: {
        type: DataTypes.BOOLEAN,
    defaultValue: true
    },

    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario,
            key: "id_user",
        }
    },

    estadoUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    
}, {
    
    timestamps: false,
});

evento.belongsTo(usuario, {
    foreignKey: 'id_user'
});

usuario.hasMany(evento, {
    foreignKey: 'id_user'
})


export {evento}