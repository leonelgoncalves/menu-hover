import React, {Component} from 'react'

import {MoheComponent, AdsilaComponent, ExampleComponent} from 'menu-hover'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Über uns',
            description: 'eine kurze Beschreibung'
        };
    }
    render() {

        return (
            <div>
                <ExampleComponent text='Modern React component module'/>
                <AdsilaComponent title={this.state.title} description={this.state.description}/>
                <MoheComponent title={this.state.title} description={this.state.description}/>
            </div>
        )
    }
}
