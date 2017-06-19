define(function() {
    'use strict';

    /**
     * Фабрика, конструирующая объекты типа {@link HH/InlineFactory/Product}.
     * Тип описывается прямо в коде фабрики.
     *
     * @exports HH/InlineFactory
     * @see {@link module:HH/InlineFactory}
     *
     * @param {String} name  Имя для приветствия.
     * @returns {HH/InlineFactory/Product}
     */
    var Factory = function(name) {

        /**
         * Секретный метод.
         * @see {@link module:HH/InlineFactory~secretHello}
         */
        var secretHello = function(delay) {
            window.setTimeout(function() {
                alert('Booooom!');
            }, delay);
        };

        /**
         * Задержка, секретная внутренняя переменная.
         * @type {Number}
         * @see {@link module:HH/InlineFactory~delay}
         */
        var delay = 3000;

        return (
            /**
             * Интерфейс, возвращаемый {@link module:HH/InlineFactory}.
             * Описан в коде по месту использования.
             *
             * @interface HH/InlineFactory/Product
             * @global
             * @see {@link HH/InlineFactory/Product}
             */
            {
                /**
                 * Имя для приветствия.
                 *
                 * @type {String}
                 * @memberOf HH/InlineFactory/Product#
                 * @see {@link HH/InlineFactory/Product#name}
                 */
                name: name,

                /**
                 * Приветствие.
                 *
                 * @memberOf HH/InlineFactory/Product#
                 * @see {@link HH/InlineFactory/Product#hello}
                 */
                hello: function() {
                    secretHello(delay);
                    alert('Hello, ' + name + '!');
                },

                /**
                 * Бесполезная функция, получающая ресурс.
                 *
                 * @memberOf HH/InlineFactory/Product#
                 * @see {@link HH/InlineFactory/Product#fetch}
                 *
                 * @param {String} url  Адрес ресурса.
                 * @returns {Promise}  jQuery-промис.
                 */
                fetch: function(url) {
                    return $.get(url);
                }
            }
        );
    };

    /**
     * Статический метод.
     * @see {@link module:HH/InlineFactory.staticHello}
     */
    Factory.staticHello = function() {
        alert('Hello, static!');
    };

    return Factory;

});
