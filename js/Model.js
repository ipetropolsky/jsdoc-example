define(
    [
        'Libraries/backbone'
    ],
    function(Backbone) {
        'use strict';

        var View = Backbone.Model.extend(/** @lends HH/Model# */ {

            /**
             * Значения по умолчанию.
             * @type {Object}
             * @see {@link HH/Model#defaults}
             *
             * @property {Object} foo=''     Фууу.
             * @property {Object} bar=false  Бар!
             */
            defaults: {
                foo: '',
                bar: false
            },

            /**
             * Пример документирования Backbone.Model.
             * Ключевые моменты:
             * - параметры конструктора, попадающие в `initialize()`;
             * - атрибуты и их значения по умолчанию;
             * - собственные методы.
             *
             * @constructs HH/Model
             * @extends Backbone.Model
             * @see {@link HH/Model}
             *
             * @param {Object} attributes   Атрибуты модели.
             * @param {Object} options      Параметры.
             * @param {Object} options.url  Адрес для сохранения.
             */
            initialize: function(options) {
                alert('Ready!');
            },

            /**
             * Рендеринг.
             * @see {@link HH/Model#render}
             */
            render: function() {
                this.$el.html('Hello, World!');
            }

        });

        return View;
    }
);
