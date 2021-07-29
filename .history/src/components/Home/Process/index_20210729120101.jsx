import React from 'react'
// 引入外部资源
import './index.css'
import liucheng1 from '../../../assets/liucheng1.png'
import liucheng2 from '../../../assets/liucheng2.png'
import liucheng3 from '../../../assets/liucheng3.png'
import liucheng3 from '../../../assets/liucheng3.png'

export default function index() {
    return (
        <div className="prc-bgc">
            <div className="prc-wrap">
                <div className="prc-top">
                    <div className="prc-top-left prc-top-process">
                        <img
                            src={liucheng1}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                报名/预习
                            </div>
                            <div className="prc-top-h2">
                                8月中旬—9月中旬
                            </div>
                        </div>
                    </div>
                    <div className="prc-top-icon">
                        <i className="iconfont prc-top-icon-i">&#xe6d7;</i>
                    </div>
                    <div className="prc-top-middle prc-top-process">
                        <img
                            src={liucheng2}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                招新/培训
                            </div>
                            <div className="prc-top-h2">
                                9月中旬—12月中旬
                            </div>
                        </div>
                    </div>
                    <div className="prc-top-icon">
                        <i className="iconfont prc-top-icon-i">&#xe6d7;</i>
                    </div>
                    <div className="prc-top-right prc-top-process">
                        <img
                            src={liucheng3}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                offer/项目
                            </div>
                            <div className="prc-top-h2">
                                12月中旬—长期
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prc-middle-1">
                    <img
                        src=""
                        alt="图片"
                        className="prc-middle-1-img"
                    />
                </div>
                <div className="prc-middle-2">
                    <div className="prc-middle-2-title">
                        想和优秀的你&nbsp;&nbsp;&nbsp;&nbsp;一起改变世界
                    </div>
                </div>
                <div className="prc-bottom">
                    <div className="prc-bottom-left">
                        <span className="prc-bottom-text">报名投递</span>
                    </div>
                    <div className="prc-bottom-middle">
                        <span className="prc-bottom-text">学员系统</span>
                    </div>
                    <div className="prc-bottom-right">
                        <span className="prc-bottom-text">招新咨询</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
