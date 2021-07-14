import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <section className="cardHeader">
                <div className="card" style={{clipPath : this.props.clip, width: 500, backgroundColor: this.props.bgColor, marginLeft: this.props.margin}}>
                    <img id='cardImage' src={this.props.logo} alt={this.props.logoName} />
                    <p className="card1Text">{this.props.text}</p> <br/>
                    <button className="card1Btn" style={{backgroundColor: this.props.btnColor }}>{this.props.join}</button><br/>
                    <span>or </span> <a className="card1Link" href="#">{this.props.link}</a>
                </div>

                /* <div className="card2">
                    <img id='card2Image' src={LockLogo} />
                    <p className="card2Text">Want a secure, private space for your technical knowledge?</p> <br/>
                    <button className="card2Btn">Create a free team</button><br/>
                    <span>or </span> <a className="card1Link" href="">discover teams</a>
                </div> 
             </section> */
        );
    };
}

export default Card;