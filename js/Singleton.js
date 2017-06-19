define(function() {
    'use strict';

    /**
     * Объект состояния, использующийся в {@link module:HH/Singleton}.
     * @typedef {Object} HH/Singleton/State
     * @property {Boolean} locked  Признак блокировки.
     * @property {Boolean} count   Количество всяких штук.
     */

    /**
     * Синглтон для хранения состояния определённого типа ({@link HH/Singleton/State}).
     * Свойства и методы статические.
     *
     * @exports HH/Singleton
     * @see {@link module:HH/Singleton}
     */
    var Singleton = {

        /**
         * Состояние.
         * @type {Boolean}
         */
        state: true,

        /**
         * Переключение состояния.
         * @param state {HH/Singleton/State}  Новое состояние.
         * @returns {module:HH/Singleton}  Возвращает себя.
         */
        setState: function(state) {
            this.state = state;
            return this;
        },

        /**
         * Получение состояния.
         * @returns {HH/Singleton/State}  Текущее состояние.
         */
        getState: function() {
            return this.state;
        }
    };

    return Singleton;

});
