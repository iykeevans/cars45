import React from "react";
import HomeLayout from "../../components/layouts/home-layout";
import Link from "next/link";
import Hero_layout from "../../components/layouts/hero-layout";

const mockedData = {
  pageTitle: "About Us",
  pageParagraph1: `
  Cars45 brand provides consumers with the opportunity to buy cars online and offline. Car dealers and end-users can now have access to a rich variety of cars that have been properly verified and checked, accompanied by a standard inspection report. What we are bringing to the market isn't just availability but access to cars with the right information such that consumers can make the right decision. Cars45 currently has its operations spread across Lekki, Ikeja, Ikorodu, Oshodi and Amuwo areas of Lagos, Ibadan, Kano, Port-Harcourt, and Abuja.
  `,
  pageParagraph2: `Find the nearest location to you here. `,
  pageSubheading: "Contact Us",
  phone: {
    text: "Phone:",
    value: "0818 984 0160 | 01 888 3367 ",
  },
  email: {
    text: "E-Mail:",
    value: "help@cars45.com",
  },
  socials: [
    {
      text: "Facebook",
      value: "https://www.instagram.com/cars45ng/",
    },
    {
      text: "Twitter",
      value: "https://twitter.com/cars45ng",
    },
    {
      text: "Instagram",
      value: "https://www.linkedin.com/company/cars45/",
    },
  ],
};

const About = () => {
  return (
    <HomeLayout footer="two">
      <div className="about">
        <div className="hero d-none d-lg-block ">
          <div className="overley"></div>
        </div>
        <div className="container mt-5">
          <div className="heading">{mockedData.pageTitle}</div>
          <p>{mockedData.pageParagraph1}</p>
          <p>{mockedData.pageParagraph2}</p>
          <p className="contact">{mockedData.pageSubheading}</p>
          <ul className="mb-5">
            <li>
              {mockedData.phone.text} {mockedData.phone.value}{" "}
            </li>
            <li>
              {mockedData.email.text} {mockedData.email.value}
            </li>
            {mockedData.socials.map(({ text, value }, index) => (
              <li key={index}>
                {text}: <Link href={value}>{value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
};

export default About;
