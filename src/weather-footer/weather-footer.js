/**
 * `weather-footer` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class WeatherFooter extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'weather-footer';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            main: { type: String, value: '' },
            title: { type: String, computed: '_traslate(main)' },
            description: { type: String, value: '' },
            haveData: { type: Boolean, computed: '_haveData(description)' }
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

    _traslate(main) {
        if (main === 'Clouds')
            return 'Nublado';
        if (main === 'Rain')
            return 'LLuvias'
        if (main === 'Clear')
            return 'Despejado'
        if (main === 'Thunderstorm')
            return 'Tormentoso'
        if (main === 'Drizzle')
            return 'Lluvioso'
        if (main === 'Snow')
            return 'Nieve'

        return 'No hay datos';
    }

    _haveData(description) {
        return this.description.trim().length > 0;
    }

}

window.customElements.define(WeatherFooter.is, WeatherFooter);