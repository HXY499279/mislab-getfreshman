import React from 'react'
import { Image } from 'antd'
// 引入外部资源
import erp from '../../../assets/erp.png'
import youwen from '../../../assets/youwen.png'
import './index.css'

export default function index(props) {
    const
    return (
        <div className="product-bgc">
            <div className="prd-wrap">
                <div className="prd-left">
                    <div className="prd-left-h1">
                        ERP虚拟运营系统
                    </div>
                    <div className="prd-left-h2">
                        系统在信管必修课上长期使用
                    </div>
                    <div className="prd-left-text">
                        通过构建一个虚拟的市场环境，
                        让受训者充当企业的CEO，进行企业的模拟运营。
                        通过此虚拟过程，让受训者体会到如何管理企业
                        中的物资流动、资金流动和信息流动，以及相互
                        之间的制约与转换关系
                    </div>
                    <div className="prd-left-bottom">
                        <Image
                            src={erp}
                            preview={false}
                            className="prd-left-erp"
                            alt="图片" 
                        />
                    </div>
                </div>
                <div className="prd-right">
                    <div className="prd-right-top">
                        <div className="prd-right-top-left">
                            <span className="prd-right-top-left-cpjs-title">
                                产品介绍
                            </span>
                        </div>
                        <div className="prd-right-top-right">
                            <span className="prd-right-top-right-cpjs-detail">
                                工作室目前主要有六个项目。<br />分别是ERP虚拟运营系统，邮问必答，基于大数据的骨质质量评估系统，路径规划系统，智能广告识别项目，作业系统，以及其他小项目，用于保证工作室同学手里都可以利用项目进行实战学习。
                            </span>
                        </div>
                    </div>
                    <div className="prd-right-bottom">
                        <div className="prd-right-bottom-left">
                            <Image
                                src={youwen}
                                preview={false}
                                className="prd-right-bottom-left-youwen"
                                alt="图片" 
                            />
                        </div>
                        <div className="prd-right-bottom-right">
                            <div className="prd-right-bottom-right-h1">
                                邮问必答
                            </div>
                            <div className="prd-right-bottom-right-h2">
                                服务于重庆邮电大学学生处学业辅导中心
                            </div>
                            <div className="prd-right-bottom-right-text">
                                项目招募学业优秀、乐于助人的志愿者，针对数理类基础课程、<br />
                                英语公共课程和专业课程面向全校同学提供答疑服务，解决同学学习中的
                                具体学业问题，搭建学习讨论交流平台，构建人人好学和人人学好的良好氛围。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
