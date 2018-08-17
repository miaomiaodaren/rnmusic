import React from 'react';
import Storage from '../../util/Storage'

function Wrapper(WarpComponent) {
    return class newComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                isfirst: void 0
            }
        }

        componentDidMount() {
            Storage.get('isfirst').then(res => {
                if(res !== 'yes') {
                    this.setState({isfirst: 'no'})
                } else {
                    this.setState({isfirst: 'yes'})
                }
            })
        }

        render() {
            return (
                <WarpComponent isfirst={this.state.isfirst} />
            )
        }
    } 
}

export default Wrapper