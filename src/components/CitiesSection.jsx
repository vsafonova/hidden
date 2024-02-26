import Card from "./Card";

export default function CitiesSection() {
  const cities = [
    {
      image: "stockholm.webp",
      cityName: "Stockholm",
      link: "/Stockholm",
      altText: "People sitting in a park overlooking the Old Town",
    },

    {
      image: "visby.webp",
      cityName: "Visby",
      link: "/Visby",
      altText: "Visby city from above. White houses with orange roofs overlooking the ocean.",
    },

    {
      image: "järvsö.webp",
      cityName: "Järvsö",
      link: "/Järvsö",
      altText: "Three people biking down a hill. Scenery with a lake and forest.",
    },
  ];

  return (
    <section className="cities_section layout_padding">
      <div className="container">
        <h2 className="cities_taital">Cities</h2>
        <p className="cities_text">
        Embark on a journey of discovery as you explore the hidden gems of Sweden, where every corner reveals a new adventure waiting to be uncovered. Our curated selection of unique and lesser-known destinations invites you to delve deeper into the heart and soul of Sweden. We believe in open exploration without gatekeeping, ensuring that everyone has the opportunity to uncover the extraordinary beauty and richness that Sweden has to offer. So, whether you're a seasoned traveler or a curious explorer, join us as we unlock the hidden treasures of this remarkable land and create unforgettable memories along the way
        </p>
        <div className="cities_section_2">
          <div className="row">
            {cities.map(({ image, cityName, link, altText }) => (
              <div className="col-md-4" key={cityName}>
                <Card image={image} cityName={cityName} link={link} alt={altText} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
