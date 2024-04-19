import Card from "./Card";
function Specials() {
  return (
    <>
      <section className="categories">
        <div className="grid grid-gap-xs">
          <div className="child col-start-3@lg col-end-11@lg">
            <div className="grid grid-gap-xs">
              <div className="child col-12@xs col-9@sm">
                <h2>This Weeks Specials</h2>
              </div>
              <div className="child col-12@xs col-3@sm">
                <div className="online-order">
                  <button className="btn btn-primary">Online Menu</button>
                </div>
              </div>
              <div className="child col-12@xs col-4@sm">
                <Card
                  title="Greek salad"
                  price="12.99"
                  image="greek_salad.jpg"
                  description="The famous greek salad of crispy lettuce, peppers, olives
                  and our Chicago style feta cheese, garnished with crunchy
                  garlic and rosemary croutons."
                />
              </div>
              <div className="child col-12@xs col-4@sm">
                <Card
                  title="Bruchetta"
                  price="5.99"
                  image="bruchetta.svg"
                  description="Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil."
                />
              </div>
              <div className="child col-12@xs col-4@sm">
                <Card
                  title="Lemon Dessert"
                  price="6.99"
                  image="lemon_dessert.jpg"
                  description="This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specials;
