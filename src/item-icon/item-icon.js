/**
 * `item-icon` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class ItemIcon extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'item-icon';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            type: { type: String, value: '', },
            isWind: { type: Boolean, computed: '_isWind(type)' },
            isPressure: { type: Boolean, computed: '_isPressure(type)' },
            isTemperature: { type: Boolean, computed: '_isTemperature(type)' },
            isHumidity: { type: Boolean, computed: '_isHumidity(type)' },
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

    _isWind(type) {
        return type == 'wind';
    }

    _isTemperature(type) {
        return type === 'temp';
    }

    _isHumidity(type) {
        return type === 'humi';
    }

    _isPressure(type) {
        return type === 'pres'
    }

}

window.customElements.define(ItemIcon.is, ItemIcon);