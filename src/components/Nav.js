function Nav() {
  return (
    <>
      <nav>
        <div className="grid grid-gap-xs">
          <div className="child col-start-3@lg col-end-11@lg">
            <div className="grid grid-gap-xs">
              <div className="child col-6@xs col-3@sm">
                <a href="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Logo.svg`}
                    width="200"
                    height="auto"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="child col-6@xs col-9@sm">
                <div className="hamburger">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/icon_hamburger_menu_.svg`}
                    width="auto"
                    height="auto"
                    alt="menu"
                  />
                </div>
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
                    <a href="/booking">Reservations</a>
                  </li>
                  <li>
                    <a href="/">Order Online</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
