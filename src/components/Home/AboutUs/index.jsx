import React, { useState } from 'react'
import { Image } from 'antd'
//引入外部资源
import us from '../../../assets/us.png'
import members from '../../../assets/us/members.png'
import members1 from '../../../assets/us/1.JPG'
import members2 from '../../../assets/us/2.JPG'
import members3 from '../../../assets/us/3.JPG'
import members4 from '../../../assets/us/4.JPG'
import members5 from '../../../assets/us/5.JPG'
import members6 from '../../../assets/us/6.JPG'
import members7 from '../../../assets/us/7.JPG'
import members8 from '../../../assets/us/8.JPG'
import members9 from '../../../assets/us/9.JPG'
import members10 from '../../../assets/us/10.JPG'
import members11 from '../../../assets/us/11.JPG'
import members12 from '../../../assets/us/12.JPG'
import members13 from '../../../assets/us/13.JPG'
import './index.css'

const introducing = `信管工作室成立于2008年
是一个以发展内部成员专业技能与专业素养、提升信管专业
技术氛围的学生组织。不断探索、实践新的技术体系，在十余年
的成长过程当中，逐渐完善自身技术体系，扩大团队规模。
我们希望并也一直在努力将一些成功经验和有趣的团队文化
传播出去影响更多的人。`

const des = `信管工作室永远都是一个温暖积极的大家庭
这里承载着勤奋、进步、友爱、关怀、和谐与温馨
这里汇聚了优秀的学长学姐，在学习和生活上伴你同行
这里诞生了卓越的技术，新颖的产品和以学习至上的优秀理念`
// 我们不怕困难，勇敢直上，无惧挑战，勇于绽放，追逐最完美的自己
// 因为这里，是希望撒下的地方，是种子发芽成长的地方，是我们向往的地方

export default function Aboutus(props) {
    const [visible, setVisible] = useState(false)

    // 得到关于我们页面动画的状态
    let { stateAbusB, stateAbusM, stateAbusS } = props.abusState
    return (
        <div className="abus-bgc">
            <div className="abus-wrap">
                <div className="abus-middle">
                    <div className="abus-middle-left">
                        <div className="abus-middle-left-title">
                            <div className={stateAbusB ? "abus-middle-left-suptitle abus-middle-left-suptitle-show" : "abus-middle-left-suptitle"}>
                                关于我们
                            </div>
                            <pre className={stateAbusB ? "abus-middle-left-subtitle abus-middle-left-subtitle-show" : "abus-middle-left-subtitle"}>
                                {introducing}
                            </pre>
                        </div>
                        <div className="abus-middle-left-subtitle-label">
                            <img src={us} alt="us" className="abus-middle-left-us" />
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little bm-show" : "abus-middle-left-subtitle-label-little bm"}>百名工程师</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little cx-show" : "abus-middle-left-subtitle-label-little cx"}>创新</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little rc-show" : "abus-middle-left-subtitle-label-little rc"}>人才培养</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little js-show" : "abus-middle-left-subtitle-label-little js"}>技术应用</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little nq-show" : "abus-middle-left-subtitle-label-little nq"}>年轻</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little fx-show" : "abus-middle-left-subtitle-label-little fx"}>分享日</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little hk-show" : "abus-middle-left-subtitle-label-little hk"}>黑客马拉松文化周</span>
                            <span className={stateAbusS ? "abus-middle-left-subtitle-label-little zh-show" : "abus-middle-left-subtitle-label-little zh"}>周会</span>
                        </div>
                    </div>
                    <div className="abus-middle-right">
                        <pre className={stateAbusB ? "abus-middle-right-suptitle abus-middle-right-suptitle-show" : "abus-middle-right-suptitle"}>
                            {des}
                        </pre>
                        <div className={stateAbusM ? "abus-middle-right-bgpic-wrap abus-middle-right-bgpic-wrap-show" : "abus-middle-right-bgpic-wrap"}>
                            <Image
                                src={members}
                                preview={{ visible: false }}
                                className="abus-middle-right-bgpic"
                                alt="     如果图片没有加载出来，请同学们把学长学姐脑补好看一点！拜托了！"
                                style={{ height: 313 }}
                                onClick={() => setVisible(true)}
                            />
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                    <Image src={members} />
                                    <Image src={members6} />
                                    <Image src={members7} />
                                    <Image src={members9} />
                                    <Image src={members8} />
                                    <Image src={members10} />
                                    <Image src={members11} />
                                    <Image src={members12} />
                                    <Image src={members4} />
                                    <Image src={members5} />
                                    <Image src={members13} />
                                    <Image src={members1} />
                                    <Image src={members2} />
                                    <Image src={members3} />
                                </Image.PreviewGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
