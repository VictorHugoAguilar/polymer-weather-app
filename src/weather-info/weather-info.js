/**
         * `weather-info` Description
         *
         * @summary ShortDescription.
         * @customElement
         * @polymer
         * @extends {Polymer.Element}
         */
class WeatherInfo extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'weather-info';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            data: {
                type: Object,
                value: function () {
                    return {
                        city: '',
                        temperature: '',
                        minimal: '',
                        maxim: '',
                        pressure: '',
                        wind: '',
                        himidity: ''
                    }
                }
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

}

window.customElements.define(WeatherInfo.is, WeatherInfo);