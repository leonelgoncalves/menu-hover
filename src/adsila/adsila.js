/**
 * @class AdsilaComponent
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './adsila.scss';
import TextComponent from '../common/Text';

export default class AdsilaComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string
  };

  render() {
    const { title, description, titleColor, descriptionColor } = this.props;
    return (
      <div className={styles.menuAdsila}>
        <a className={styles.menu__item} href="#">
          <TextComponent
            text={title}
            textClass={styles.menu__itemName}
            textColor={titleColor}
          />
          <TextComponent
            text={description}
            textClass={styles.menu__itemLabel}
            textColor={descriptionColor}
          />
        </a>
      </div>
    );
  }
}
