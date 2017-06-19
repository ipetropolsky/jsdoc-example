define(
    [
        'Libraries/backbone'
    ],
    function(Backbone) {
        'use strict';

        var Collection = Backbone.Collection.extend(/** @lends HH/Collection# */ {

            /**
             * Пример документирования `Backbone.Collection`.
             * Ключевые моменты:
             * - параметры конструктора, попадающие в `initialize()`;
             * - собственные свойства и методы.
             *
             * @extends Backbone.Collection
             * @constructs HH/Collection
             * @see {@link HH/Collection#initialize}
             *
             * @param {Array} models        Массив моделей.
             * @param {Object} options      Параметры.
             * @param {String} options.url  Адрес для загрузки моделей.
             */
            initialize: function(options) {
                alert('Ready!');
            },

            /**
             * Рендеринг.
             * @see {@link HH/Collection#render}
             */
            render: function() {
                this.$el.html('Hello, World!');
            }

        });

        return Collection;
    }
);
