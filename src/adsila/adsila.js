/**
 * @class AdsilaComponent
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import styles from './adsila.scss';

export default class AdsilaComponent extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        titleColor: PropTypes.string,
        descriptionColor: PropTypes.string
    }

    render() {
        const {title, description, titleColor, descriptionColor} = this.props;
        return (
            <div className={styles.menuAdsila}>
                <a className={styles.menu__item} href="#">
                    <span
                        className={styles.menu__itemName}
                        style={{
                        color: titleColor
                    }}>{title}</span>
                    <span
                        className={styles.menu__itemLabel}
                        style={{
                        color: descriptionColor
                    }}>{description}</span>
                </a>
            </div>
        );
    }
}