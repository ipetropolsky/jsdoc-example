define(function() {
    'use strict';

    /**
     * Пример класса.
     *
     * @exports HH/Class
     * @constructor
     *
     * @param {String} name   Имя, параметр конструктора.
     *
     * @see {@link HH/Class}
     */
    var Class = function(name) {
        /**
         * Секретное приветствие, внутренний метод.
         * @see {@link HH/Class~secretHello}
         */
        var secretHello = function(delay) {
            window.setTimeout(function() {
                alert('Booooom!');
            }, delay);
        };

        /**
         * Имя, свойство экземпляра.
         * @type {String}
         * @see {@link HH/Class#name}
         */
        this.name = name;

        /**
         * Задержка, секретная внутренняя переменная.
         * @type {Number}
         * @see {@link HH/Class~delay}
         */
        var delay = 3000;

        /**
         * Приветствие, метод экземпляра.
         * @see {@link HH/Class#hello}
         */
        this.hello = function() {
            secretHello(delay);
            alert('Hello, ' + this.name + '!');
        };
    };

    /**
     * Статический метод класса.
     * @see {@link HH/Class.staticHello}
     */
    Class.staticHello = function() {
        alert('Hello, static!');
    };

    return Class;

});
