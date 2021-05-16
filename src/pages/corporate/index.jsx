import { partnership } from "../../asset/data/service";
import PartnershipCard from "../../components/partnership-card";
import HomeLayout from "../../components/layouts/home-layout";

const mockedData = {
  hero: {
    title: "Let's Partner With You",
  },
  service: {
    title: "We offer the following services for a corporate or business lead",
    items: partnership,
  },
  additionalInfo: {
    title: "For enquires, please contact:",
    image: ".https://storage.googleapis.com/cars45-web-bucket/picture.svg",
    name: "Felicia Afiemo",
    email: "felicia.a@cars45.com",
  },
};

export default function Partnership() {
  return (
    <HomeLayout footer="two">
      <div className="corporate">
        <div className="hero  partnership">
          <h1 className="header text-center">{mockedData.hero.title}</h1>
        </div>
        <div className="content-container">
          <h3 className="content-header">{mockedData.service.title}</h3>
          <div className="partnership-items">
            {mockedData.service.items.map((item, index) => (
              <PartnershipCard
                key={index}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="partnership-contact">
          <h5>{mockedData.additionalInfo.title}</h5>
          <div className="patrnership-contact-person">
            <img src={mockedData.additionalInfo.image} />
            <div className="sub-line"></div>
            <div className="partnership-contact-user">
              <p>{mockedData.additionalInfo.name}</p>
              <a href="mailto:adrenaline@gmail.com">
                {mockedData.additionalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
