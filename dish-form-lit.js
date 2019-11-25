import {html, LitElement} from 'lit-element';
import '@polymer/paper-card';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input';
import style from './dish-form-styles';


class DishFormLit extends LitElement {
    constructor() {
        super();
        this.dish = {};
        this.isModifying = false;
    }

    static get properties() {
        return {
            dish: {
                type: Object
            },
            isModifying: {
                type: Boolean
            }
        }
    }

    static get styles() {
        return style;
    }

    __setDishProp(event) {
        this.dish[event.currentTarget.id] = event.currentTarget.value;
    }

    __saveDish(){
        console.info(this.dish);
        this.dispatchEvent(new CustomEvent('save-dish', {
            detail: this.dish
        }));
    }

    render() {
        return html`
            <paper-card>
                <div class="card-content">
                    <paper-input 
                        label="Foto (URL)" 
                        id="image"
                        value="${this.dish.image}" 
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                    <paper-input 
                        label="Nombre" 
                        id="name" 
                        value="${this.dish.name}"
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                    <paper-input 
                        label="Contenido energético" 
                        id="energyValue" 
                        value="${this.dish.energyValue}"
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                    <paper-input 
                        label="Puntuación" 
                        id="rate" 
                        value="${this.dish.rate}"
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                    <paper-input 
                        label="Descripción" 
                        id="description" 
                        value="${this.dish.description}"
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                    <paper-input 
                        label="Precio" 
                        id="price" 
                        value="${this.dish.price}"
                        @input="${event => this.__setDishProp(event)}">
                    </paper-input>
                </div>
                <div class="card-actions">
                    <paper-button @click="${event => this.__saveDish()}">Guardar</paper-button>
                </div>
            </paper-card>
        `;
    }
}

window.customElements.define('dish-form-lit', DishFormLit);