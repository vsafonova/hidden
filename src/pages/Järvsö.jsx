import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Järvsö() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
      </header>
      <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">Järvsö</h1>
                <p className="about_text">
                  Explore the charming Järvsö, a quaint city bursting with
                  exciting adventures! Regardless of the season, there's always
                  something thrilling to experience in this hidden gem. <hr/>
                </p>
                <p className="about_text">
                  In the <b> winter months </b>, Järvsö transforms into a skier's
                  paradise with its 
                  <a href="https://maps.app.goo.gl/W36B2ZVYavAraVA4A" target="_blank"> Järvsöbacken </a> 
                  boasting 23 diverse hills
                  catering to all skill levels, from seasoned experts to little
                  ones taking their first turns on the slopes.
                </p>
                <p className="about_text">
                  Come summer, adrenaline junkies can trade their skis for
                  mountain bikes and conquer the rugged terrain with daring
                  descents and exhilarating trails. 
                </p>
                <p className="about_text">
                  For those seeking a different kind of adventure, immerse yourself in the heart of
                  Swedish nature at 
                  <a href="https://maps.app.goo.gl/GLj3hg6SRBc9Qy8o9" target="_blank"> Vildriket </a>
                  ,a unique zoo where you stroll
                  through the forest, seamlessly blending into the natural
                  habitat alongside majestic creatures like lynxes and snow
                  foxes
                </p>
                <p className="about_text">
                  When it's <b>time to eat</b>, we recommend 
                  <a href="https://maps.app.goo.gl/qahi6aDjPx2GSmVJ7" target="_blank"> Järvsö Creperie </a>
                  , a small and charming spot that offers both savoury and sweet crepes.
                  How about a crêpe with local cloudberries and a generous scoop
                  of vanilla – a true taste of the region's flavours.
                </p>
                <p className="about_text">
                
                  And <b>for connoisseurs of architecture and serene sanctuaries</b>,
                  Järvsö proudly boasts one of the largest and most spectacular
                  churches in the northern region of Sweden built in 1832–1838.
                  The church is nestled on a hill overlooking the water with a
                  spectacular view. <hr/>
                </p>
                <p className="about_text">
                
                  Järvsö invites you to discover its hidden treasures and
                  unforgettable experiences, beckoning you to embark on a
                  journey like no other. Come explore the beautiful nature of
                  and create memories that will last a lifetime in this hidden
                  gem of Sweden.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src=".\images\järvsö-сity.webp"
                  className="about_img"
                  alt="About Hidden Gems"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
