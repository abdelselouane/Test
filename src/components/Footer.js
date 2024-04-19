function Footer() {
  return (
    <>
      <footer>
        <div class="grid grid-gap-xs">
          <div class="child col-start-3@lg col-end-11@lg">
            <div class="grid grid-gap-xs">
              <div class="child col-12@xs col-6@sm col-3@md">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/Logo .svg`}
                  width="200"
                  height="300"
                  alt=""
                />
              </div>
              <div class="child col-12@xs col-6@sm col-3@md">
                <h5>Doormat Navigation</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Menu</a>
                  </li>
                  <li>
                    <a href="/">Reservation</a>
                  </li>
                  <li>
                    <a href="/">Order Online</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                </ul>
              </div>
              <div class="child col-12@xs col-6@sm col-3@md">
                <h5>Contact</h5>
                <ul>
                  <li>Address</li>
                  <li>Phone Number</li>
                  <li>Email</li>
                </ul>
              </div>
              <div class="child col-12@xs col-6@sm col-3@md">
                <h5>Social Media Links</h5>
                <ul>
                  <li>Address</li>
                  <li>Phone Number</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
