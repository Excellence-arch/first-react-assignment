import React from 'react';
import SearchLogo from './icons8_Search_32.png'
import LockLogo from './icons8_Lock_2.ico'

class Card extends React.Component {
    render() {
        return (
            <section className="cardHeader">
                <div className="card1">
                    <img id='card1Image' src={SearchLogo} />
                    <p className="card1Text">Find the best answer to your technical question, help others answer theirs</p> <br/>
                    <button className="card1Btn">Join the Community</button><br/>
                    <span>or </span> <a className="card1Link" href="">search content</a>
                </div>

                <div className="card2">
                    <img id='card2Image' src={LockLogo} />
                    <p className="card2Text">Want a secure, private space for your technical knowledge?</p> <br/>
                    <button className="card2Btn">Create a free team</button><br/>
                    <span>or </span> <a className="card1Link" href="">discover teams</a>
                </div>
            </section>
        );
    };
}

export default Card;