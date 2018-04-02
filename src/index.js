/**
 * @class ExampleComponent
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import AdsilaComponent from './adsila/adsila'

class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {text} = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}

export {AdsilaComponent, ExampleComponent}
