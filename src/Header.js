import { LitElement, html,css } from 'lit-element';

class Header extends LitElement {

  static get styles() {
    return css`
      img {
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0; }
    `;
  }

  render(){
    return html`
    <img src="assets/back.jpg">
    `;
  }
}

customElements.define('header-element', Header);