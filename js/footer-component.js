class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="sitewide-footer-grid-container">
        <div class="sitewide-footer-grid-item_1">
            <p class="sitewide-footer-heading-text" style="font-size: 1.25rem; font-weight: 500; margin: 0.15rem 0.25rem 0.15rem 0.25rem;">
                Quinton's Burgers & Fries</p>
            <p style="margin: 0 0.25rem 0.40rem 0.25rem;">Established 2024</p>
                <div style="margin: 0 0.25rem 0 0.25rem;">
                    <a class="icon-anchor" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src="https://quintons.co/img/icons/icon-youtube_512x512.png" width="23px" alt="YouTube">
                    </a>
                    <a class="icon-anchor" href="https://quintons.co/pgs/err/404.html">
                        <img src="https://quintons.co/img/icons/icon-facebook_512x512.png" width="23px" alt="Facebook">
                    </a>
                    <a class="icon-anchor" href="https://discord.gg/RP3RckzfnX">
                        <img src="https://quintons.co/img/icons/icon-discord_512x512.png" width="23px" alt="Discord">
                    </a>
                    <a class="icon-anchor" href="https://github.com/Symbadx37/symbadx37.github.io">
                        <img src="https://quintons.co/img/icons/icon-github_512x512.png" width="23px" alt="GitHub">
                    </a>
                </div>
            </div>
        <div class="sitewide-footer-grid-item_2">
            <p class="sitewide-footer-heading-text" style="margin-bottom: 0.05rem;">Services</p>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/404.html">My Quinton's</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/503.html">Quinton's PLUS</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/404.html">Quinton's DLC</a><br>
            <a class="sitewide-footer-anchor-text" href="https://r.mtdv.me/quintons-employment-application">Employment</a>
        </div>
        <div class="sitewide-footer-grid-item_3">
            <p class="sitewide-footer-heading-text" style="margin-bottom: 0.05rem;">Company</p>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/503.html">Our Story</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/contact.html">Contact Info</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/ratings.html">Write A Review</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/contact.html">File A Complaint</a>
        </div>
        <div class="sitewide-footer-grid-item_4" style="position: relative; bottom: 9px; left: 5px;">
            <p class="sitewide-footer-heading-text" style="margin-bottom: 0.05rem;">Business</p>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/404.html">Anti-Privacy Policy</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/503.html">Corporate Health Policy</a><br>
            <a class="sitewide-footer-anchor-text" href="https://quintons.co/pgs/err/404.html">Terms and Conditions</a>
        </div>
        <div class="sitewide-footer-grid-item_5">
            <p class="sitewide-footer-border-text">&copy 2024 - 2026 Quinton's Co. All rights reserved.</p>
        </div>
        <div class="sitewide-footer-grid-item_6">
           <p class="sitewide-footer-border-text">Website 0.2.3.1 260121P</p>
        </div>
    </footer>
    `;
  }
}
customElements.define('footer-component', Footer);