import React from 'react';
import style from './style.scss';
import { Col, Tooltip } from 'antd';
import {
    bag,
    girl,
    food,
    pot,
    leaves,
    behance,
    linkedin,
    leaveLeft,
    dibble,
} from '../../assets/images';

const listImage = [bag, girl, food, pot];

class RecentWork extends React.Component {
    render() {
        return (
            <>
                <div className={'recentWork'}>
                    <div className="container">
                        <img src={leaves} className="leaves" />
                        <img src={leaves} className="leaves" />
                        <div className="content">
                            <h2>Recent Work </h2>
                            <div className="wrapImage">
                                {listImage.map((e, i) => (
                                    <Tooltip
                                        title="View Image"
                                        trigger="clicker"
                                        placement="bottomRight"
                                    >
                                        <img className="image" key={i} src={e} />
                                    </Tooltip>
                                ))}
                            </div>

                            <Tooltip title="View Work" trigger="clicker" placement="bottomRight">
                                <button>View Work</button>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="contact">
                    <div className="container">
                        <img src={leaveLeft} className="leaveLeft" />
                        <div className="content">
                            <h1>Ready to make something amazing?</h1>
                            <Tooltip
                                title="Start A New Pr"
                                trigger="clicker"
                                placement="bottomRight"
                            >
                                <button>Start A New Project</button>
                            </Tooltip>
                            <div className="wrapIcon">
                                <Tooltip title="Social " trigger="clicker" placement="bottomRight">
                                    <a>
                                        <img src={dibble} />
                                    </a>
                                    <a>
                                        <img src={behance} />
                                    </a>
                                    <a>
                                        <img src={linkedin} />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default RecentWork;
