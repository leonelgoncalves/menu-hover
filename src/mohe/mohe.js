/**
 * @class MoheComponent
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./mohe.scss";
import anime from "animejs";
import charming from "charming";

export default class MoheComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string
  };
  active = false;
  dom = {};

  constructor(props) {
    super(props);
    this.dom.name = React.createRef();
    this.dom.element = React.createRef();
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(nextProps, nextState) {
    this.init();
  }

  init() {
    charming(this.dom.name.current);
    this.dom.nameLetters = Array.from(
      this.dom.name.current.querySelectorAll("span")
    );
  }

  mouseEnter() {
    this.mouseTimeout = setTimeout(() => {
      this.isActive = true;
      anime.remove(this.dom.nameLetters);
      anime({
        targets: this.dom.nameLetters,
        duration: 800,
        easing: [0.7, 0, 0.3, 1],
        scale: (t, i) => [1, anime.random(0, 1) ? 0.8 : 1.4],
        translateX: (t, i) => {
          const elBounds = this.dom.element.current.getBoundingClientRect();
          const x1 = elBounds.left + elBounds.width / 2;
          const y1 = elBounds.top + elBounds.height / 2;

          const targetBounds = t.getBoundingClientRect();
          const x2 = targetBounds.left + targetBounds.width / 2;
          const y2 = targetBounds.top + targetBounds.height / 2;

          const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          const maxDist = Math.sqrt(
            Math.pow(elBounds.left - x1, 2) + Math.pow(elBounds.top - y1, 2)
          );
          const maxTX = x2 < x1 ? -250 : 250;

          return maxTX / maxDist * dist;
        },
        translateY: (t, i) => [0, anime.random(-40, 40)],
        rotateZ: (t, i) => [0, anime.random(-20, 20)],
        opacity: (t, i) => 0.3
      });
    });
  }

  mouseLeave() {
    clearTimeout(this.mouseTimeout);
    if (!this.isActive) return;
    this.isActive = false;
    anime.remove(this.dom.nameLetters);
    anime({
      targets: this.dom.nameLetters,
      duration: 800,
      easing: [0.7, 0, 0.3, 1],
      scale: 1,
      translateX: 0,
      translateY: 0,
      rotateZ: 0,
      opacity: 1
    });
  }

  render() {
    const { title, description, titleColor, descriptionColor } = this.props;
    console.log("aa");
    return (
      <div className={styles.menuMohe}>
        <a
          className={styles.menu__item}
          onMouseEnter={this.mouseEnter.bind(this)}
          onMouseLeave={this.mouseLeave.bind(this)}
          ref={this.dom.element}
          href="#"
        >
          <span
            ref={this.dom.name}
            className={styles.menu__itemName}
            style={{ color: titleColor }}
          >
            {title}
          </span>
          <span className={styles.menu__itemLabel}>{description}</span>
        </a>
      </div>
    );
  }
}
