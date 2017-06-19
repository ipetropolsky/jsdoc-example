define([
    'HH/Class'
], function(Class) {
    'use strict';

    /**
     * Фабрика, конструирующая экземпляры {@link HH/Class}.
     *
     * @constructor
     * @exports HH/Factory
     * @see {@link module:HH/Factory}
     *
     * @param {String} name  Имя для приветствия.
     * @returns {HH/Class}
     */
    var Factory = function(name) {
        return new Class(name);
    };

    return Factory;

});
