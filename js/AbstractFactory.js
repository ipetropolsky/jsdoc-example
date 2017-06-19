define(function() {
    'use strict';

    /**
     * Абстрактный интерфейс, возвращаемый {@link module:HH/AbstractFactory}.
     * Описан комментами без реализации.
     *
     * @interface HH/AbstractFactory/Product
     * @see {@link HH/AbstractFactory/Product}
     */

    /**
     * Имя для приветствия.
     *
     * @member HH/AbstractFactory/Product#name
     * @see {@link HH/AbstractFactory/Product#name}
     */

    /**
     * Приветствие.
     *
     * @method HH/AbstractFactory/Product#hello
     * @see {@link HH/AbstractFactory/Product#hello}
     */

    /**
     * Бесполезная функция, получающая ресурс.
     *
     * @method HH/AbstractFactory/Product#fetch
     * @see {@link HH/AbstractFactory/Product#fetch}
     *
     * @param {String} url  Адрес ресурса.
     * @returns {Promise}  jQuery-промис.
     */

    /**
     * Фабрика, конструирующая объекты типа {@link HH/AbstractFactory/Product}.
     * Тип описывается комментами без реализации.
     *
     * @exports HH/AbstractFactory
     * @see {@link module:HH/AbstractFactory}
     *
     * @param {String} name  Имя для приветствия.
     * @returns {HH/AbstractFactory/Product}
     */
    var Factory = function(name) {

        /**
         * Секретный метод.
         * @see {@link module:HH/AbstractFactory~secretHello}
         */
        var secretHello = function(delay) {
            window.setTimeout(function() {
                alert('Booooom!');
            }, delay);
        };

        /**
         * Задержка, секретная внутренняя переменная.
         * @type {Number}
         * @see {@link module:HH/AbstractFactory~delay}
         */
        var delay = 3000;

        return {
            name: name,
            hello: function() {
                secretHello(delay);
                alert('Hello, ' + name + '!');
            },
            fetch: function(url) {
                return $.get(url);
            }
        };
    };

    /**
     * Статический метод.
     * @see {@link module:HH/AbstractFactory.staticHello}
     */
    Factory.staticHello = function() {
        alert('Hello, static!');
    };

    return Factory;

});
