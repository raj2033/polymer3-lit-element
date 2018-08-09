import { LitElement, html } from '@polymer/lit-element';

class MyApp extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {score: Number};
    }

    _render({score}) {
        console.log(score);
        return html`
            The score is ${score}
        `;
    }
}

window.customElements.define('my-app', MyApp);