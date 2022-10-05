/**
        * `item-info` Description
        *
        * @summary ShortDescription.
        * @customElement
        * @polymer
        * @extends {Polymer.Element}
        */
class ItemInfo extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'item-info';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            type: { type: String, value: '', },
            prefix: { type: String, computed: '_setPrefix(type)' },
            value: { type: String, value: '' },
            valueOptional: { type: String, value: '', },
            optional: { type: String, computed: '_haveOptional(valueOptional)' },
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

    _haveOptional(valueOptional) {
        return valueOptional && valueOptional.trim().length > 0;
    }

    _setPrefix(type) {
        if (type === 'pres') return 'Hpa';
        if (type === 'wind') return 'Km/h';
        if (type === 'humi') return '%';
        return 'º';
    }
}

window.customElements.define(ItemInfo.is, ItemInfo);