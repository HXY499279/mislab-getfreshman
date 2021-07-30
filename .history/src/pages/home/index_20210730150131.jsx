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
const switchPage = (d) => {
    let timer = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop + 10;
        if (document.documentElement.scrollTop >= d) clearInterval(timer);
    }, 0);
}

export default function Home() {
    // 设置距离的状态
    const [stateD, setDState] = useState(false)
    // 设置关于我们页面动画的状态
    const [stateAbusB, setAbusBState] = useState(false)
    const [stateAbusM, setAbusMState] = useState(false)
    const [stateAbusS, setAbusSState] = useState(false)
    // 设置产品介绍页面动画的状态
    const [stateCpTop, setCpTopState] = useState(false)
    const [stateCpBottom, setCpBottomState] = useState(false)


    const ref = useRef()

    // window.onscroll = () => {
    //     // console.log(document.documentElement.scrollTop)
    //     // 回到顶部案件
    //     if (document.documentElement.scrollTop >= 960) {
    //         setDState(true)
    //     } else {
    //         setDState(false)
    //     }
    //     // 关于我们页面
    //     if (document.documentElement.scrollTop >= 316) {
    //         setAbusBState(true)
    //     }
    //     if (document.documentElement.scrollTop >= 593) {
    //         setAbusMState(true)
    //     }
    //     if (document.documentElement.scrollTop >= 690) {
    //         setAbusSState(true)
    //     }
    //     if (document.documentElement.scrollTop >= 690) {
    //         setAbusSState(true)
    //     }
    //     //产品介绍页面
    //     if (document.documentElement.scrollTop >= 1739) {
    //         setCpTopState(true)
    //         setCpBottomState(true)
    //     }
    // }

    window.onscroll = () => {
        console.log(window.scrollY,document.documentElement.clientHeight,window.scrollY+document.documentElement.clientHeight)
    }

    const abusCpAnimationShow = () => {
        // 关于我们页面
        setAbusBState(true)
        setAbusMState(true)
        setAbusSState(true)
        setAbusSState(true)
        //产品介绍页面
        setCpTopState(true)
        setCpBottomState(true)
    }


    const Timer = setTimeout(() => {
        abusCpAnimationShow()
        console.log("动画自动启动")
        clearTimeout(Timer)
    }, 10000);


    // 汇总状态,ref,fun
    const abusState = {
        stateAbusB,
        stateAbusM,
        stateAbusS
    }
    const prdState = {
        stateCpTop,
        stateCpBottom
    }

    const funs = {
        switchPage
    }

    // console.log(stateD)
    return (
        <div id="bd">
            <Invatation funs={funs} />
            <a id="page1" /><AboutUs abusState={abusState} ref={ref} />
            <a id="page2" /><Department />
            <a id="page3" /><Product prdState={prdState} />
            <a id="page4" /><Member />
            <a id="page5" /><Process />
            <Footer />
            <div
                className={stateD ? "back-to-top-icon " : "back-to-top-icon back-to-top-icon-hidden "}
                onClick={back}
            >
                <i className="iconfont icon">&#xe65c;</i>
            </div>
        </div>
    )
}