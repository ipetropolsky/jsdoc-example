define(
    [
        'Libraries/backbone'
    ],
    function(Backbone) {
        'use strict';

        var View = Backbone.View.extend(/** @lends HH/View# */ {

            /**
             * Пример документирования Backbone.View.
             * Ключевые моменты:
             * - параметры конструктора, попадающие в `initialize()`;
             * - собственные методы.
             *
             * @constructs HH/View
             * @extends Backbone.View
             * @see {@link HH/View}
             *
             * @param {Object} options                  Параметры.
             * @param {Object} options.bindings         Селекторы.
             * @param {Object} options.bindings.input   Селектор инпута.
             */
            initialize: function(options) {
                alert('Ready!');
            },

            /**
             * Рендеринг.
             * @see {@link HH/View#render}
             */
            render: function() {
                this.$el.html('Hello, World!');
            }

        });

        return View;
    }
);
