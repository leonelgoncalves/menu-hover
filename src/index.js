/**
 * @class ExampleComponent
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

export AdsilaComponent from './adsila/adsila'
export MoheComponent from './mohe/mohe'

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

export { ExampleComponent}
