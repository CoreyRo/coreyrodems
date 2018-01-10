import React, { Component } from 'react'
import {Router} from 'react-router'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
 
const Main = (props) =>{
        return (
            <div>
                <span>
                    {this.props.children}
                </span>
                <Alert stack={{limit: 3}} />
            </div>
        )
    }
 
export default Main