
//header-component
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <a href="./index.html"><img src="images/Black Estate JPEG Logo copy.jpg" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
       </button>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" href="./people.html">Wine & Shop</a></li>
            <li class="nav-item"><a class="nav-link active" href="./people.html">Land & Farming</a></li>
            <li class="nav-item"><a class="nav-link active" href="./people.html">Visit & Stay</a></li>
            <li class="nav-item"><a class="nav-link active" href="./people.html">People</a></li>
            <li class="nav-item"><a class="nav-link active" href="./people.html">Cart</a></li>
            <li class="nav-item"><a class="nav-link active" href="./people.html">Join the Club</a></li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('header-component', Header);


//footer-component
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div>
        <ul class="vertical__list">
          <li class="vertical__list-item"><a href="./people.html">Join Our Newsletter</a></li>
          <li class="vertical__list-item"><a href="./people.html">Club Members</a></li>
          <li class="vertical__list-item"><a href="./people.html">Contact Us</a></li>
          <li class="vertical__list-item"><a href="./people.html">Shipping</a></li>
          <li class="vertical__list-item"><a href="./people.html">Our Distributors</a></li>
          <li class="vertical__list-item"><a href="./people.html">Instagram</a></li>
        </ul>
        <span>Black Estate Limited | License 57/OFF/472/2020 – expiry 28th day of November 2023 | A copy of our license
          can be <strong>viewed here.</strong> | Biogro No: 5202.<strong> Media + Marketing Resources</strong> </span>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);