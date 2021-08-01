import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Button, Image } from 'antd';
// 引入外部资源
import logo from '../../../assets/logo.png'
import './index.css'
import '../../../static/iconfont.css'
import "antd/dist/antd.css"

const playVideo = () =>  {
    document.getElementById('mask').style.display = 'none';
    var video = document.querySelector('#video');
    video.play();
  }

export default function index(funs) {
    const { switchPage } = funs.funs
    return (
        <Fragment>
            <div className="mislabVideoWrap">
                {/* <video
                    src={"http://qwu8f72zr.hn-bkt.clouddn.com/shouyeshipin.mp4"}
                    muted
                    preload="auto"
                    tabIndex="-1"
                    autoPlay
                    loop
                    id="video"
                    className="mislabVideo"
                    poster="https://lf3-cdn-tos.bytescm.com/obj/ttfe/ATSX/mainland/video-poster_1576231362701.png"
                    webkit-playsinline="true"
                    playsinline="true"
                /> */}
                <img
                 src="https://lf3-cdn-tos.bytescm.com/obj/ttfe/ATSX/mainland/video-poster_1576231362701.png" alt="" />
                <div className="cloth" />
                <div className="nav">
                    <div className="nav-left">
                        <Link to='/'>
                            <Image
                                src={logo}
                                preview={false}
                                className="nav-left-logo"
                            />
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div
                            className="nav-right-a"
                        >
                            <a href="#page1">关于我们</a>
                            <a href="#page2">部门介绍</a>
                            <a href="#page3">产品介绍</a>
                            <a href="#page4">成员动态</a>
                            <a href="#page5">招新流程</a>
                        </div>
                    </div>
                </div>
                <div className="mainTitle-wrap">
                    <div className="mainTitle">
                        <div>信管工作室&nbsp;·&nbsp;2021年度邀请函</div>
                        <div>想和优秀的你&nbsp;&nbsp;&nbsp;&nbsp;一起改变世界</div>
                        <div className="mainTitle-subtitle">
                            JOIN MISLAB
                        </div>
                        <Button size="large" className="mainTitle-button">
                            <a href="#page5"><span className="mainTitle-button-words">加入我们</span></a>
                        </Button>
                    </div>
                </div>
                <div className="sub-Icon" onClick={switchPage.bind(this, 810)}>
                    <span className="sub-Icon-iconfont">
                        <span className="iconfont">&#xe656;</span>
                    </span>
                </div>
                <div className="sub-xuxian" />
            </div>

        </Fragment>
    )
}
