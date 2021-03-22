import { partnership } from "../../asset/data/service";
import PartnershipCard from "../../components/partnership-card";
import HomeLayout from "../../components/layouts/home-layout"


export default function Partnership() {

  return (
    <HomeLayout footer="two" >
      <div className="corporate">
        <div className="hero  partnership">
          <h1 className="header text-center">Let's Partner With You</h1>
        </div>
        <div className="content-container">
          <h3 className="content-header">We offer the following services for a corporate or business lead</h3>
          <div className="partnership-items">
            {partnership.map((item, index) => (
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
          <h5>For enquires, please contact:</h5>
          <div className="patrnership-contact-person">
            <img src="./assets/images/picture.svg" />
            <div className="sub-line"></div>
            <div className="partnership-contact-user">
              <p>Felicia Afiemo</p>
              <a href="mailto:adrenaline@gmail.com">felicia.a@cars45.com</a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
