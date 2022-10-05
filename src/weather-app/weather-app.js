/**
    * @customElement
    * @polymer
    */
class WeatherApp extends Polymer.Element {

    static get is() { return 'weather-app'; }

    static get properties() {
        return {
            city: {
                type: String,
                value: 'alicante',
            },
            dataForecast: {
                type: Object,
                value: function () {
                    return {};
                }
            },
            mainView: {
                type: Boolean,
                value: true,
                readOnly: true,
            },
            data: {
                type: Object,
                value: function () {
                    return {};
                }
            },
            info: {
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
            },
            forestcast: {
                type: Object,
                value: function () {
                    return {
                        title: '',
                        description: '',
                    }
                }
            },
            error: {
                type: Boolean,
                readOnly: true,
            },
        }
    }

    handleResponse() {
        console.log('handleResponse', this.data);

        this.info = {
            city: this.data.name,
            temperature: this.data.main.temp.toString().split(".")[0],
            minimal: this.data.main.temp_min.toString(),
            maxim: this.data.main.temp_max.toString(),
            humidity: this.data.main.humidity.toString(),
            pressure: this.data.main.pressure.toString(),
            wind: this.data.wind.speed.toString(),
        };
        this.forestcast = {
            title: this.data.weather[0].main,
            description: this.data.weather[0].description,
        }
        this._setError(false);
    }

    handleResponseForecast() {
        console.log('handleResponseForescast', this.dataForecast);
    }

    _changeCity(e) {
        if (e.detail.city) {
            this.city = e.detail.city;
        }
    }

    _changeView(e) {
        this._setMainView(e.detail.mainView);
    }

    _error(e) {
        if (e.type && e.type.trim().toLocaleLowerCase() === 'error'.toLocaleLowerCase()) {
            this._setError(true);
        }
    }

}

window.customElements.define(WeatherApp.is, WeatherApp);