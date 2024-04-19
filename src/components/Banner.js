function Banner() {
  return (
    <>
      <section class="banner">
        <div class="grid grid-gap-xs">
          <div class="child col-start-3@lg col-end-11@lg">
            <div class="banner-content">
              <div class="grid grid-gap-xs">
                <div class="child col-12@xs col-7@sm">
                  <h1 class="clr-primary-2"> Little Lemon </h1>
                  <h2 class="clr-secondary-5">Chicago</h2>
                  <p class="clr-secondary-5 hero-description">
                    We are a family owned <br />
                    Mediterranean restaurant, focused on <br />
                    traditional recipes served with a modern <br />
                    twist.
                    <br />
                  </p>
                  <button class="btn btn-primary">Reserve a Table</button>
                </div>
                <div class="child col-12@xs col-5@sm">
                  <div class="hero-image-container">
                    <div class="hero-image"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
