/**
* `weather-forescast` Description
*
* @summary ShortDescription.
* @customElement
* @polymer
* @extends {Polymer.Element}
*/
class WeatherForecast extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'weather-forecast';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            forecast: {
                type: Object,
                value: function () {
                    return {};
                },
                observer: '_setList',
            },
            list: {
                type: Array,
                value: function () {
                    return [];
                },

            }
        };
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */
    ready() {
        super.ready();
    }

    _setList(newValue, oldValue) {
        this.set('list', this.forecast.list);
    }

}

window.customElements.define(WeatherForecast.is, WeatherForecast);