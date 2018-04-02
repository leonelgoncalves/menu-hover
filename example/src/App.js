import React, {Component} from 'react'

import {AdsilaComponent, ExampleComponent} from 'menu-hover'

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text='Modern React component module'/>
        <AdsilaComponent title='Text' description='asd asda asadzzz'/>
      </div>
    )
  }
}
