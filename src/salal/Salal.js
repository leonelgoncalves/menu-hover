import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TextComponent from "../common/Text";
import styles from "./salal.scss";

import anime from "animejs";
import charming from "charming";

export default class SalalComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string,
      hoverColor: PropTypes.string
    }),
    description: PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string,
      hoverColor: PropTypes.string
    }),
    backgroundColor: PropTypes.string
  };
  active = false;
  dom = {};

  constructor(props) {
    super(props);
    this.dom.name = React.createRef();
    this.dom.description = React.createRef();
    this.dom.element = React.createRef();

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(nextProps, nextState) {
    this.init();
  }

  init() {
    charming(this.dom.description.current);
    this.dom.descriptionLetters = Array.from(
      this.dom.description.current.querySelectorAll("span")
    );
  }

  mouseEnter() {
    this.mouseLeave = setTimeout(() => {
      this.isActive = true;
      anime.remove(this.dom.descriptionLetters);
      anime({
        targets: this.dom.descriptionLetters,
        delay: (t, i) => i * 7,
        translateY: [
          { value: 10, duration: 150, easing: "easeInQuad" },
          { value: [-10, 0], duration: 150, easing: "easeOutQuad" }
        ],
        opacity: [
          { value: 0, duration: 150, easing: "linear" },
          { value: 1, duration: 150, easing: "linear" }
        ],
        color: {
          value: this.props.description.hoverColor
            ? this.props.description.hoverColor
            : "#f85f83",
          duration: 1,
          delay: (t, i, l) => i * 7 + 150
        }
      });
    }, 50);
  }

  mouseLeave() {
    clearTimeout(this.mouseTimeout);
    if (!this.isActive) return;
    this.isActive = false;

    anime.remove(this.dom.descriptionLetters);
    anime({
      targets: this.dom.descriptionLetters,
      delay: (t, i, l) => (l - i - 1) * 7,
      translateY: [
        { value: 10, duration: 150, easing: "easeInQuad" },
        { value: [-10, 0], duration: 150, easing: "easeOutQuad" }
      ],
      opacity: [
        { value: 0, duration: 150, easing: "linear" },
        { value: 1, duration: 150, easing: "linear" }
      ],
      color: {
        value: this.props.description.color,
        duration: 1,
        delay: (t, i, l) => (l - i - 1) * 7 + 150
      }
    });
  }

  render() {
    const { title, description, backgroundColor } = this.props;

    return (
      <div style={{ background: backgroundColor ? backgroundColor : "white" }}>
        <a
          className={styles.menu__item}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          ref={this.dom.element}
        >
          <TextComponent
            textRef={this.dom.name}
            text={title.text}
            textColor={title.color}
            textClass={styles.menu__itemName}
          />
          <TextComponent
            textRef={this.dom.description}
            text={description.text}
            textColor={description.color}
            textClass={styles.menu__itemLabel}
          />
        </a>
      </div>
    );
  }
}
