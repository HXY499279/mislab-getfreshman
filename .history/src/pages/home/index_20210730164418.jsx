import React, { useState, useRef } from 'react'
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

    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {         //移动终端浏览器版本信息

                trident: u.indexOf('Trident') > -1, //IE内核

                presto: u.indexOf('Presto') > -1, //opera内核

                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核

                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核

                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端

                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端

                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器

                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器

                iPad: u.indexOf('iPad') > -1, //是否iPad

                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部

            };

        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            abusCpAnimationShow();
        }
        if (ua.match(/WeiBo/i) == "weibo") {
            //在新浪微博客户端打开
            abusCpAnimationShow();

        }
        if (ua.match(/QQ/i) == "qq") {
            //在QQ空间打开
            abusCpAnimationShow();

        }
        if (browser.versions.ios) {
            //是否在IOS浏览器打开
            window.onscroll = () => {
                // console.log(document.documentElement.scrollTop)
                // 回到顶部案件
                if (document.documentElement.scrollTop >= 960) {
                    setDState(true)
                } else {
                    setDState(false)
                }
                // 关于我们页面
                if (document.documentElement.scrollTop >= 316) {
                    setAbusBState(true)
                }
                if (document.documentElement.scrollTop >= 593) {
                    setAbusMState(true)
                }
                if (document.documentElement.scrollTop >= 690) {
                    setAbusSState(true)
                }
                if (document.documentElement.scrollTop >= 690) {
                    setAbusSState(true)
                }
                //产品介绍页面
                if (document.documentElement.scrollTop >= 1739) {
                    setCpTopState(true)
                    setCpBottomState(true)
                }
            }

        }
        if (browser.versions.android) {
            //是否在安卓浏览器打开
            abusCpAnimationShow();

        }
    } else {
        //否则就是PC浏览器打开
        // abusCpAnimationShow();
        console.log(1)
    }

    abusCpAnimationShow()
    // window.onload = abusCpAnimationShow

    // const Timer = setTimeout(() => {
    //     abusCpAnimationShow()
    //     console.log("动画自动启动")
    //     clearTimeout(Timer)
    // }, 10000);


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
            <a id="page1" /><AboutUs abusState={abusState} />
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