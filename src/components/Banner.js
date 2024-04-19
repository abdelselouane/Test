function Banner() {
  return (
    <>
      <section className="banner">
        <div className="grid grid-gap-xs">
          <div className="child col-start-3@lg col-end-11@lg">
            <div className="banner-content">
              <div className="grid grid-gap-xs">
                <div className="child col-12@xs col-7@sm">
                  <h1 className="clr-primary-2"> Little Lemon </h1>
                  <h2 className="clr-secondary-5">Chicago</h2>
                  <p className="clr-secondary-5 hero-description">
                    We are a family owned <br />
                    Mediterranean restaurant, focused on <br />
                    traditional recipes served with a modern <br />
                    twist.
                    <br />
                  </p>
                  <button className="btn btn-primary">Reserve a Table</button>
                </div>
                <div className="child col-12@xs col-5@sm">
                  <div className="hero-image-container">
                    <div className="hero-image"></div>
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
