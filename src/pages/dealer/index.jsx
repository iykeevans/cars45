import React from "react";
import Chat from "../../components/chat";
import Hero_layout from "../../components/layouts/hero-layout";
import HomeLayout from "../../components/layouts/home-layout";
import Link from "next/link";

const mockedData = {
  pageTitle: "Become a Dealer",
  pageTitleParagraph: "Get access to our inventory today!",
  ctaTitle: "",
  cta: {
    title: "Quality cars for the best prices",
    paragraph: "",
    items: [
      {
        text: "All car inspected and document checked",
        image: "https://storage.googleapis.com/cars45-web-bucket/checkmark-circle.svg",
      },
      {
        text: "No-fuss actions-bid or buy with one click",
        image: "https://storage.googleapis.com/cars45-web-bucket/checkmark-circle.svg",
      },
      {
        text: "Full support team available to answer your questions",
        image: "https://storage.googleapis.com/cars45-web-bucket/checkmark-circle.svg",
      },
    ],
    image: "https://storage.googleapis.com/cars45-web-bucket/phone.svg",
    apple: "https://storage.googleapis.com/cars45-web-bucket/app-store.svg",
    google: "https://storage.googleapis.com/cars45-web-bucket/google-play.svg",

    button: {
      text: "sign up now",
    },
    button2: {
      text: "Get Started",
    },
  },

  service: {
    title: "How it works",
    items: [
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/sign-up.svg",
        text: "Sign up",
        summary: `Register your company! We verify every dealer to ensure our
    auctions stay secure and hassle-free.`,
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/download.svg",
        text: "Download the app",
        summary: `Have constant access to all auctions via our mobile app.`,
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/browses.svg",
        text: "Browse and Bid",
        summary: `Browse our auction lists, find the ones that interest you and place a bid`,
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/done.svg",
        text: "Done",
        summary: `If you win an auction, the car is yours!`,
      },
    ],
  },

  additionalInfo: {
    title: "Our verification locations",
    paragraph: "Verification can be performed at the following locations",
    cities: [
      {
        name: "Lagos",
        summary: `Alausa Shopping Mall Suite 6, Block B, Second Floor, Obafemi
      Awolowo way, Alausa, Ikeja`,
      },
      {
        name: "Port harcourt",
        summary: `Port harcourt</p>
        DRC Cars45 Dealer Resource Center. 57 Uyo Street off Stadium Rd,
        it’s a red plaza Gracious Plaza opposite Save A Life Hospital.
        Phone: 09087026161`,
      },
      {
        name: "Abuja",
        summary: `ALIBRO ATRIUM SUIT S-6 2ND FLOOR. NO 32 A EKUKINAM STREET UTAKO
        DISTRICT. Landmark: Close to ABC Transport`,
      },
    ],
  },

  contact: {
    title: "Do you have questions?",
    paragraph: "Our support team is happy to hear from you!",
    number: "+234 813 984 0160",
  },
};

const Dealer = (props) => {
  return (
    <HomeLayout footer="two">
      <div className="dealer">
        <Hero_layout bg="https://storage.googleapis.com/cars45-web-bucket/become-a-dealer.webp" />
        <div className="text-area container pb-5  ">
          <div className="heading mb-4 text-center">{mockedData.pageTitle}</div>
          <div className="text">{mockedData.pageTitleParagraph}</div>
          <div className="container quality pt-5 pz-0">
            <div className="top px-lg-5 mx-4 mx-lg-5">
              <div className="heading">{mockedData.cta.title}</div>
              <div className="row sign-up">
                <div className="sign-up-left col-lg-8">
                  <div className="sign-up-left-heading">
                    {mockedData.cta.paragraph}
                  </div>
                  <ul className="mt-4">
                    {mockedData.cta.items.map(({ text, image }, index) => (
                      <li className="d-flex align-items-center" key={index}>
                        <div>
                          <img src={image} alt="check mark" className="mr-3" />
                        </div>{" "}
                        {text}
                      </li>
                    ))}
                  </ul>
                  .
                </div>
                <div className="sign-up-right col-12 col-lg-4 d-flex flex-column ">
                  <img
                    src={mockedData.cta.image}
                    alt="mobile phone"
                    className="mx-auto"
                  />

                  <div className="d-flex flex-column flex-lg-row mx-auto mb-2 mt-2">
                    <a
                      href="https://play.google.com/store/apps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={mockedData.cta.google}
                        alt="google play store"
                        className="mr-3 mb-4 mb-lg-0 mt-3 mt-lg-0"
                      />
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={mockedData.cta.apple}
                        alt="app store"
                        className="mr-3"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <button className="mx-auto btn d-flex sign-up-btn mt-5">
                {mockedData.cta.button.text}
              </button>
            </div>

            {/* service section */}
            <div className="how-work p-5">
              <div className="heading text-center">
                {mockedData.service.title}
              </div>
              <div className="row justify-content-between mt-5 ">
                {mockedData.service.items.map((item, index) => (
                  <div
                    className="col-lg-5 d-flex flex-column align-items-center justify-content-center"
                    key={index}
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.text.toLowerCase()}
                        className="mr-3"
                      />
                    </div>

                    <div className="title text-center my-3">{item.text}</div>

                    <div className="content text-center">{item.summary}</div>
                  </div>
                ))}
              </div>
            </div>

            <form className=" col-lg-7 d-flex flex-column p-5 ">
              <Link
                href="https://dealer.cars45.com/signup/"
                className="mt-4 btn btn-secondary orange-button"
              >
                {mockedData.cta.button2.text}
              </Link>
            </form>
          </div>
        </div>

        {/* additional info */}
        <div className="verification ">
          <div className="heading">{mockedData.additionalInfo.title}</div>

          <p className="text-center mt-3">
            {mockedData.additionalInfo.paragraph}
          </p>

          <div className=" col-10 mx-auto text-white ">
            <div className=" d-none d-lg-flex  justify-content-between border-bottom font-weight-bold pb-3 mt-5 h5">
              {mockedData.additionalInfo.cities.map((item, index) => (
                <div className="col-3" key={index}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className=" col-10 mx-auto text-white">
            <div className=" d-flex flex-column flex-lg-row justify-content-between  mt-3 pb-3">
              {mockedData.additionalInfo.cities.map((item, index) => (
                <div className=" col-12 col-lg-3 mt-5 mt-lg-0" key={index}>
                  <p className="h5 font-weight-bold d-lg-none">{item.name}</p>
                  {item.summary}
                </div>
              ))}
            </div>

            <div className="text-center font-weight-bold h5 mt-3">
              {mockedData.contact.title}
            </div>

            <p className="text-center mt-3 ">{mockedData.contact.paragraph} </p>

            <p className="text-center d-flex justify-content-center mt-3 pb-5 mb-0">
              {" "}
              <span>
                <img
                  src="https://storage.googleapis.com/cars45-web-bucket/telephone.svg"
                  alt="app store"
                  className="mr-3"
                />
              </span>
              {mockedData.contact.number}
            </p>
          </div>
        </div>

        <Chat />
      </div>
    </HomeLayout>
  );
};

export default Dealer;
