import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <footer className="mt-auto bg-light text-center text-lg-start">
                <div className="text-center p-3 bg-light">
                    © 2022 Copyright <a href="https://github.com/caionmarquezini">CMarquezini</a>
                </div>
            </footer>
        )
    }
}

export default FooterComponent