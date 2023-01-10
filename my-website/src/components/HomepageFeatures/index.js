import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "About SkyGolf India",
    Svg: require("@site/static/img/g3.svg").default,
    description: (
      <>
        Sky Golf India is premier entertainment venue which welcomes everyone with any
        golf skill to enjoy and bond themselves over a game of golf.
      </>
    ),
  },
  {
    title: "Plan Your Visit",
    Svg: require("@site/static/img/g2.svg").default,
    description: (
      <>
       Make your reservation in advance with the help of our online booking tool
      </>
    ),
  },
  {
    title: "Pick your Game",
    Svg: require("@site/static/img/g1.svg").default,
    description: (
      <>
       Pick your game and Smash it! We hope that you had an Amazing experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
