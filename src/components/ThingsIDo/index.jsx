import React from 'react';
import { strategy, desDev, informationImg } from '../../assets/images';
import './style.scss';

class ThingsIDo extends React.Component {
    render() {
        return (
            <div>
                <section id="things-i-do">
                    <div className="container">
                        <h2>Things I Do</h2>
                        <div className="row">
                            <div className="col-6">
                                <img className="img-thingsIDo dotline1" src={strategy} alt="img" />
                            </div>
                            <div className="col-6">
                                <div className="txt-map">
                                    <div className="txt-map-title">Strategy</div>
                                    <div>
                                        <p>
                                            There’s no style over substance here. I bring together
                                            form and the function to create something that looks
                                            good and performs brilliantly. Simple.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="txt-map">
                                    <div className="txt-map-title">Information Architecture</div>
                                    <div>
                                        <p>
                                            It’s about organizing the content and flow of a website
                                            based on research and planning. Eventually I come up
                                            with a structure/design that balances the users’ desires
                                            with the business’s needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="img-thingsIDo" src={informationImg} alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img className="img-thingsIDo" src={desDev} alt="img" />
                            </div>
                            <div className="col-6">
                                <div className="txt-map">
                                    <div className="txt-map-title">Design & Development</div>
                                    <div>
                                        <p>
                                            As a designer and developer, I understand the perfect
                                            user interface should look good and work even better.
                                            Alongside my clients, I uncover problems and solve them.
                                            In short, I create bolder online experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default ThingsIDo;
