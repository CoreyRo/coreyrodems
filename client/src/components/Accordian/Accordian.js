import React, {Component} from 'react'
import './Accordian.css'

class Accordian extends Component {

    state = {
        card: 0,
        data: [],
        imgsrc: ''
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        }, () => {
            return this.setState({imgsrc: this.state.data[0].img[0]})
        })
    }

    buttonClick = (e) => {
        return this.setState({
            card: e.target.id,
            imgsrc: this.state.data[e.target.id].img[0]
        })
    }

    toggler = (i) => {
        if (i === 0) {
            return "collapse show"
        } else {
            return "collapse"
        }
    }

    render() {

        let buttonClick = this.buttonClick
        let toggler = this.toggler
        return (
            <div className="container-fluid">
                <div className='row'>
                    {/* <div className='col-md-6'>
                        <img className='img-fluid' src={this.state.imgsrc}/>
                    </div> */}
                    <div className='col-md-6 mx-auto'>
                        <div className="accordion" id="accordion">
                            {this
                                .state
                                .data
                                .map(function (x, i) {
                                    return (
                                        <div className="card" key={`card-${i}`}>
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button
                                                        id={i}
                                                        className="btn btn-link"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target={`#card-${i}`}
                                                        aria-expanded="true"
                                                        aria-controls={`card-${i}`}
                                                        onClick={buttonClick}>
                                                        {x.title}
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id={`card-${i}`}
                                                className={toggler(i)}
                                                aria-labelledby="headingOne"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>{x.body}</p>
                                                    <ul>
                                                        {x
                                                            .list
                                                            .map(function (li, i) {
                                                                return (
                                                                    <li key={`li-${i}`}>
                                                                        <i className={li.icon}></i> {` `}
                                                                        <a href={li.link} target="_blank">{li.link}</a>
                                                                    </li>
                                                                )
                                                            })}
                                                    </ul>
                                                    <img className='img-fluid' src={x.img[0]} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Accordian