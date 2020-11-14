import React from "react";
import Icon from "../icon/icon.component";
import Styles from "./social-icons.module.scss";

const SocialIcons = () => {
  const socialList = [
    {
      url: "https://twitter.com/posepablo?lang=es",
      source: "/socialIcons/twitter-brands.svg",
      style: Styles.twitter,
      alt: "twitter",
    },
    {
      url: "https://www.facebook.com/pablo.poseiglesias.1",
      source: "/socialIcons/facebook-f-brands.svg",
      style: Styles.facebook,
      alt: "facebook",
    },
    {
      url: "https://www.instagram.com/pablopose_/?hl=es",
      source: "/socialIcons/instagram-brands.svg",
      style: Styles.instagram,
      alt: "instagram",
    },
  ];

  return (
    <div className={Styles.icons}>
      <ul>
        {socialList.map((icon) => (
          <li key={icon.alt}>
            <Icon
              url={icon.url}
              source={icon.source}
              style={icon.style}
              alt={icon.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
