function Nav() {
  return (
    <>
      <nav>
        <div class="row">
          <div class="col">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/Logo.svg`}
              alt="logo"
            />
          </div>
          <div class="col">
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
                <a href="/">Reservations</a>
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
      </nav>
    </>
  );
}

export default Nav;
