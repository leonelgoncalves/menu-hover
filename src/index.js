/**
 * @class ExampleComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import AdsilaComponent from './adsila/adsila';
import MoheComponent from './mohe/mohe';
import SalalComponent from './salal/Salal';

class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;
    return <div className={styles.test}>Example Compon ent: {text}</div>;
  }
}

export { AdsilaComponent, MoheComponent, SalalComponent, ExampleComponent };
