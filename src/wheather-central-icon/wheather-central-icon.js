/**
* `wheather-central-icon` Description
*
* @summary ShortDescription.
* @customElement
* @polymer
* @extends {Polymer.Element}
*/
class WeatherCentralIcon extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'wheather-central-icon';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            state: { type: String, value: '', },
            isThunderstorm: { type: Boolean, computed: '_isThunderstorm(state)' },
            isDrizzle: { type: Boolean, computed: '_isDrizzle(state)' },
            isRain: { type: Boolean, computed: '_isRain(state)' },
            isSnow: { type: Boolean, computed: '_isSnow(state)' },
            isClouds: { type: Boolean, computed: '_isClouds(state)' },
            isClear: { type: Boolean, computed: '_isClear(state)' },
            isFog: { type: Boolean, computed: '_isFog(state)' },
            isMist: { type: Boolean, computed: '_isMist(state)' },
            isTornado: { type: Boolean, computed: '_isTornado(state)' },
            isAtmosphere: { type: Boolean, computed: '_isAtmosphere(state)' },
            isNotData: { type: Boolean, computed: '_isNotData(state)' },
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

    _isThunderstorm(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Thunderstorm'.toLowerCase();
    }
    _isDrizzle(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Drizzle'.toLowerCase();
    }
    _isRain(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Rain'.toLowerCase();
    }
    _isSnow(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Snow'.toLowerCase();
    }
    _isClouds(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Clouds'.toLowerCase();
    }
    _isClear(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Clear'.toLowerCase();
    }

    _isFog(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Fog'.toLowerCase();
    }

    _isMist(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Mist'.toLowerCase();
    }

    _isTornado(state) {
        if (!state) return;
        return state.trim().toLowerCase() === 'Tornado'.toLowerCase();
    }

    _isAtmosphere(state) {
        if (!state) return;
        const atmosphere = ['smoke', 'haze', 'dust',
            'sand', 'dust', 'ash', 'squall'];
        return atmosphere.includes(state.trim().toLowerCase());
    }

    _isNotData(state) {
        if (!state) return true;

        const atmosphere = ['smoke', 'haze', 'dust',
            'sand', 'dust', 'ash', 'squall'];

        return state.trim().toLowerCase() !== 'Thunderstorm'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Drizzle'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Rain'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Snow'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Clouds'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Clear'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Fog'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Mist'.toLowerCase() &&
            state.trim().toLowerCase() !== 'Tornado'.toLowerCase() &&
            !atmosphere.includes(state.trim().toLowerCase());
    }

}

window.customElements.define(WeatherCentralIcon.is, WeatherCentralIcon);