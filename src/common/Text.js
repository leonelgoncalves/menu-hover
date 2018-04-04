import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TextComponent extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    textClass: PropTypes.string,
    textColor: PropTypes.string,
    textRef: PropTypes.object
  };

  render() {
    const { text, textColor, textClass, textRef, ...props } = this.props;
    return (
      <span
        ref={textRef}
        className={textClass}
        style={{ color: textColor }}
        {...props}
      >
        {text}
      </span>
    );
  }
}
