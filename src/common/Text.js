import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TextComponent extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    textClass: PropTypes.string,
    textColor: PropTypes.string,
    textRef: PropTypes.object
  };

  render() {
    const { text, textColor, textClass, textRef, ...props } = this.props;
    return (
      <span
        ref={textRef}
        className={textClass ? textClass : ""}
        style={{ color: textColor ? textColor : "" }}
        {...props}
      >
        {text}
      </span>
    );
  }
}

TextComponent.defaultProps = { text: "" };
export default TextComponent;
