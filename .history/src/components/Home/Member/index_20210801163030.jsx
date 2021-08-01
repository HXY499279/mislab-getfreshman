import React from 'react'
import {nanoid} from 'nanoid'
// 引入外部资源
import './index.css'
import youxiuxuezhang from '../../../assets/youxiuxuezhang.png'
import toLeftMember from '../../../static/toLeftMember.json'
import toRightMember from '../../../static/toRightMember.json'

export default function index() {
    return (
        <div className="member-bgc">
            <div className="member-wrap">
                <div className="member-top">
                    <span>
                        成员动态
                    </span>
                </div>
                <div className="member-middle">
                    <div className="member-middle-left">
                        <div className="member-middle-left-top">
                            <span>
                                优秀学长采访
                            </span>
                        </div>
                        <div className="member-middle-left-bottom">
                            <video
                                src={"http://qwu8f72zr.hn-bkt.clouddn.com/xuezhangcaifang.mp4"}
                                muted
                                autoPlay
                                loop
                                controls
                                className="member-middle-left-bottom-vedio"
                                poster={youxiuxuezhang}
                                webkit-playsinline="true"
                                playsinline="true"
                                x5-playsinline=""
                                x-webkit-airplay="allow"
                                x5-video-player-type="h5"
                                x5-video-player-fullscreen="false"
                            />
                        </div>
                    </div>
                    <div className="member-middle-right">
                        <div className="member-middle-right-toLeft">
                            {toLeftMember.map((item, index) => {
                                return (
                                    <span className={`member-middle-right-toLeft-member-${index}`} key={nanoid()}>
                                        {item.name}—{item.company}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="member-middle-right-toRight">
                            {toRightMember.map((item, index) => {
                                return (
                                    <span className={`member-middle-right-toRight-member-${index}`} key={nanoid()}>
                                        {item.name}—{item.company}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
