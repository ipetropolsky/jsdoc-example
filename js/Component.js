define(function() {
    'use strict';

    /**
     * Пример документирования компонента.
     * @namespace HH/Component
     */
    var Component = jsx.Components.build(function() {

        this.bindings = {
            input: '.HH-Component-Input'
        };

        this.defaults = {
            boo: 'Boooo!'
        };

        /**
         * @param {Object}  element
         * @param {Object}  params
         * @param {String}  params.foo              Фу.
         * @param {String}  [params.boo='Boooo!']   Бу.
         * @memberof HH/Component
         */
        this.init = function() {
            alert('Ready!');
        };

    });

    return Component;
});
