/**
         * `weather-header` Description
         *
         * @summary ShortDescription.
         * @customElement
         * @polymer
         * @extends {Polymer.Element}
         */
class WeatherHeader extends Polymer.Element {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'weather-header';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            city: {
                type: String,
                value: '',
            },
            open: {
                type: Boolean,
                value: false
            },
            main: { type: Boolean, value: true },
            selector: {
                type: String,
                computed: '_selector(main)'
            },
            error: {
                type: Boolean,
                observer: '_withError'
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

    _menu() {
        this.open = !this.open;
    }

    _changeCity(e) {
        if (e.charCode === 13) {
            this.dispatchEvent(new CustomEvent('change-city', {
                bubbles: true,
                composed: true,
                detail: {
                    city: this.city,
                    mainView: this.main,
                }
            }));
            this.open = false;
        }
    }

    _selector(main) {
        return main ? 'selector_city' : 'selector_forescast';
    }

    _selectionMain() {
        this.main = true;
        this._dispachEventView();

    }

    _selectionForescast() {
        this.main = false;
        this._dispachEventView();
    }

    _dispachEventView() {
        this.dispatchEvent(new CustomEvent('change-view', {
            bubbles: true,
            composed: true,
            detail: {
                mainView: this.main,
            }
        }));
    }

    _withError(newValue, oldValue) {
        this.open = newValue;
    }
}

window.customElements.define(WeatherHeader.is, WeatherHeader);