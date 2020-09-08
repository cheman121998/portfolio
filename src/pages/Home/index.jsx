import React from 'react';

import './style.scss';

import Header from '../../components/Header';
import RecentWork from '../../components/RecentWork';
import ThingsIDo from '../../components/ThingsIDo';
import Footer from '../../components/Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header></Header>
                <ThingsIDo></ThingsIDo>
                <RecentWork></RecentWork>
                <Footer></Footer>
            </div>
        );
    }
}
export default Home;
