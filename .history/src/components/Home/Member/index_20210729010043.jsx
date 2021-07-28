import React from 'react'
// 引入外部资源
import './index.css'

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
                        <marquee direction="right" style="z-index: 3;" scrollamount='22'>睡觉吧睡觉吧！</marquee>
                        {/* <marquee direction="left" style="z-index: 4;" scrollamount='27.5'>干嘛不睡觉呢？？</marquee>
                        <marquee direction="left" scrollamount='29'>早点睡！</marquee>
                        <marquee direction="right" scrollamount='27'>不然明天起得来吗？！</marquee>
                        <marquee behavior="alternate" scrollamount='21'>想不想漂亮了 (~ _ ~)</marquee>
                        <marquee behavior="scroll" scrollamount='22'>哈哈哈！睡觉觉</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount='20'>晚安！！晚安</marquee>
                        <marquee behavior="scroll" scrollamount='24'>睡觉吧！孩子</marquee>
                        <marquee behavior="scroll" direction="left" scrollamount='20'>几点了，你还不睡觉</marquee>
                        <marquee direction="left" scrollamount='28'>忙着美丽吗？？</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount='24.5' >说你呢！嘿嘿！睡觉吧！</marquee>
                        <marquee direction="left" scrollamount='18'>没啥可以说的了，哈哈哈</marquee>
                        <marquee behavior="alternate" scrollamount='23'>早点睡觉呀</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount='20'>你信我，早点睡会更加美丽的</marquee>
                        <marquee behavior="scroll" direction="left" scrollamount='32'>小兄弟肾虚吗？</marquee>
                        <marquee behavior="scroll" scrollamount='26'>睡觉睡觉睡觉睡觉</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount='20'>明天又是早自习！！</marquee>
                        <marquee direction="left" scrollamount='31'>行吧行吧睡了</marquee>
                        <marquee behavior="scroll" direction="left" scrollamount='30' >你不睡我睡行吧</marquee> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
