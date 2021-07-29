import React, { useState } from 'react'
import {
    Invatation,
    AboutUs,
    Product,
    Department,
    Member,
    Process,
    Footer
}
    from '../../components/Home/index'
import { UpCircleOutlined } from '@ant-design/icons'
import './index.css'

// 定义功能函数
// 回到顶部
const back = () => {
    if (document.documentElement.scrollTop >= 0) {
        let timer = setInterval(function () {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 40;
            if (document.documentElement.scrollTop === 0) clearInterval(timer);
        }, 6);
    }
}
// 下滑，页面切换
const switchPage = (d, n) => {
    let timer = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop + n;
        if (document.documentElement.scrollTop >= d) clearInterval(timer);
    }, 0);
}

export default function Home() {
    // 设置距离的状态
    const [stateD, setDState] = useState(false)
    // 设置关于我们页面动画的状态
    const [stateAbusB, setAbusBState] = useState(true)
    const [stateAbusM, setAbusMState] = useState(true)
    const [stateAbusS, setAbusSState] = useState(true)

    window.onscroll = () => {
        console.log(document.documentElement.scrollTop)
        // 回到顶部案件
        if (document.documentElement.scrollTop >= 960) {
            setDState(true)
        } else {
            setDState(false)
        }
        // 关于我们页面
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop >= 232) {
            setAbusBState(false)
            setAbusSState(false)
        }
        if (document.documentElement.scrollTop >= 700) {
            setAbusMState(false)
        }
    }

    // 汇总状态,ref,fun
    const abusState = {
        stateAbusB,
        stateAbusM,
        stateAbusS
    }

    const funs = {
        switchPage
    }

    console.log(stateD)
    return (
        <div id="bd">
            <Invatation />
            <a id="page1" /><AboutUs abusState={abusState} />
            <a id="page2" /><Department />
            <a id="page3" /><Product />
            <a id="page4" /><Member />
            <a id="page5" /><Process />
            <Footer />
            <div
                className={stateD ? "back-to-top-icon " : "back-to-top-icon back-to-top-icon-hidden "}
                onClick={back}
            >
               <i className="iconfont">&#xe65c;</i> 
            </div>
        </div>
    )
}