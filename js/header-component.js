class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
        <nav class="sitewide-navbar-grid-container">
            <img id="navbar-logo" class="sitewide-navbar-logo" src="https://quintons.co/img/logo.png" alt="Quinton's Burgers & Fries" width="160px">
            <a class="sitewide-navbar-anchor_1" href="https://quintons.co/index.html">Home</a>
            <a class="sitewide-navbar-anchor_2" href="https://quintons.co/pgs/menu.html">Menu</a>
            <a class="sitewide-navbar-anchor_3" href="https://quintons.co/pgs/err/503.html">About</a>
            <a class="sitewide-navbar-anchor_4" href="https://quintons.co/pgs/contact.html" >Contact</a>
            <a class="sitewide-navbar-anchor_5" href="https://quintons.co/pgs/err/503.html">Locations</a>
            <a class="sitewide-navbar-anchor_6" href="https://quintons.co/pgs/ratings.html">Ratings</a>
            <a class="sitewide-navbar-anchor_7" href="https://quintons.co/pgs/err/404.html">My Quinton's</a>
            <a class="sitewide-navbar-icon" href="https://quintons.co/pgs/err/404.html">
                <img src="https://quintons.co/img/icons/shopping-cart-2.png" alt="Shopping Cart" width="40px">
            </a>
        </nav> 
    </header>
    `;
  }
}
customElements.define('header-component', Header);