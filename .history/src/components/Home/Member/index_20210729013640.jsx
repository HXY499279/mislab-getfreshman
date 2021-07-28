import React from 'react'
// 引入外部资源
import './index.css'
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
                            />
                        </div>
                    </div>
                    <div className="member-middle-right">

                    </div>
                </div>
            </div>

        </div>
    )
}
