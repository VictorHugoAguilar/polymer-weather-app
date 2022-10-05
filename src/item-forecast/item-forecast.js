/**
 * `item-forecast` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class ItemForecast extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'item-forecast';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            index: Number,
            show: { type: Boolean, computed: '_showItem(index)' },
            item: { type: Object, value: function () { } }
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

    _showItem(index) {
        return (index + 1) % 5 === 0;
    }

}

window.customElements.define(ItemForecast.is, ItemForecast);