import React from "react";
import Chat from "../../components/chat";
import Hero_layout from "../../components/layouts/hero-layout";
import HomeLayout from "../../components/layouts/home-layout"

const Dealer = (props) => {
  return (
    <div className="dealer">
      <Hero_layout bg="/assets/images/become-a-dealer.webp" />
      <div className="text-area container pb-5  ">
        <div className="heading mb-4 text-center">Become a Dealer</div>
        <div className="text">Get access to our inventory today!</div>
        <div className="container quality pt-5 pz-0">
          <div className="top px-lg-5 mx-4 mx-lg-5">
            <div className="heading">Quality cars for the best prices</div>
            <div className="row sign-up">
              <div className="sign-up-left col-lg-8">
                <div className="sign-up-left-heading">
                  Want access to more cars? Sign up and join our daily auctions!
                </div>
                <ul className="mt-4">
                  <li className="d-flex align-items-center">
                    <div>
                      <img
                        src="/assets/images/checkmark-circle.svg"
                        alt="check mark"
                        className="mr-3"
                      />
                    </div>{" "}
                    All car inspected and document checked
                  </li>
                  <li>
                    <img
                      src="/assets/images/checkmark-circle.svg"
                      alt="check mark"
                      className="mr-3"
                    />{" "}
                    No-fuss actions-bid or buy with one click
                  </li>
                  <li>
                    <img
                      src="/assets/images/checkmark-circle.svg"
                      alt="check mark"
                      className="mr-3"
                    />{" "}
                    Full support team available to answer your questions
                  </li>
                </ul>
                .
              </div>
              <div className="sign-up-right col-12 col-lg-4 d-flex flex-column ">
                <img
                  src="/assets/images/phone.svg"
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
                      src="/assets/images/google-play.svg"
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
                      src="/assets/images/app-store.svg"
                      alt="app store"
                      className="mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
            <button className="mx-auto btn d-flex sign-up-btn mt-5">
              sign up now
            </button>
          </div>
          <div className="how-work p-5">
            <div className="heading text-center">How it works</div>
            <div className="row justify-content-between mt-5 ">
              <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src="/assets/images/sign-up.svg"
                    alt="app store"
                    className="mr-3"
                  />
                </div>
                <div className="title text-center my-3">Sign up</div>
                <div className="content text-center">
                  Register your company! We verify every dealer to ensure our
                  auctions stay secure and hassle-free.
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src="/assets/images/download.svg"
                    alt="app store"
                    className="mr-3"
                  />
                </div>
                <div className="title text-center my-3">Download the app</div>
                <div className="content text-center">
                  Have constant access to all auctions via our mobile app.
                </div>
              </div>
            </div>

            <div className="row justify-content-between mt-5 ">
              <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src="/assets/images/browses.svg"
                    alt="app store"
                    className="mr-3"
                  />
                </div>
                <div className="title text-center my-3">Browse and Bid</div>
                <div className="content text-center">
                  Browse our auction lists, find the ones that interest you and
                  place a bid!
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src="/assets/images/done.svg"
                    alt="app store"
                    className="mr-3"
                  />
                </div>
                <div className="title text-center my-3">Done</div>
                <div className="content text-center">
                  If you win an auction, the car is yours!
                </div>
              </div>
            </div>
          </div>
          <form className=" col-lg-7 d-flex flex-column p-5 ">
            <div className="heading">Please fill in your details</div>

            <input
              type="tex"
              className="form-control "
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control "
              placeholder="Last Name"
            />
            <input type="text" className="form-control " placeholder="Email" />
            <input type="tel" className="form-control " placeholder="Phone" />
            <input type="text" className="form-control " placeholder="City" />
            <button className="mt-4">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="verification ">
        <div className="heading">Our verification locations</div>
        <p className="text-center mt-3">
          Verification can be performed at the following locations
        </p>
        <div className=" col-10 mx-auto text-white ">
          <div className=" d-none d-lg-flex  justify-content-between border-bottom font-weight-bold pb-3 mt-5 h5">
            <div className="col-3">Lagos</div>
            <div className="col-3">Port harcourt</div>
            <div className="col-3">Abuja</div>
          </div>
        </div>
        <div className=" col-10 mx-auto text-white">
          <div className=" d-flex flex-column flex-lg-row justify-content-between  mt-3 pb-3">
            <div className=" col-12 col-lg-3 mt-5 mt-lg-0">
              <p className="h5 font-weight-bold d-lg-none">Lagos</p>
              Alausa Shopping Mall Suite 6, Block B, Second Floor, Obafemi
              Awolowo way, Alausa, Ikeja
            </div>
            <div className="col-12 col-lg-3 mt-5 mt-lg-0">
            <p className="h5 font-weight-bold d-lg-none">Port harcourt</p>
              DRC Cars45 Dealer Resource Center. 57 Uyo Street off Stadium Rd,
              it’s a red plaza Gracious Plaza opposite Save A Life Hospital.
              Phone: 09087026161
            </div>
            <div className=" col-12 col-lg-3 mt-5 mt-lg-0">
            <p className="h5 font-weight-bold d-lg-none">Abuja</p>
              ALIBRO ATRIUM SUIT S-6 2ND FLOOR. NO 32 A EKUKINAM STREET UTAKO
              DISTRICT. Landmark: Close to ABC Transport
            </div>
          </div>
          <div className="text-center font-weight-bold h5 mt-3">
            Do you have questions?
          </div>
          <p className="text-center mt-3 ">
            Our support team is happy to hear from you!{" "}
          </p>
          <p className="text-center d-flex justify-content-center mt-3 pb-5 mb-0">
            {" "}
            <div>
              <img
                src="/assets/images/telephone.svg"
                alt="app store"
                className="mr-3"
              />
            </div>
            +234 813 984 0160
          </p>
        </div>
      </div>

      <Chat />
    </div>
  );
};

export default HomeLayout (Dealer);
