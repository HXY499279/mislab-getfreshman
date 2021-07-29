import React from 'react'
// 外部资源的引用
import './index.css'
import logo from '../../../assets/logo1.png'
import qrcode from '../../../assets/qrcode.png'

export default function index() {
    return (
        <div className="footer-bgc">
            <div className="footer-wrap">
                <div className="footer-middle">
                    <div className="footer-middle-left">
                        <img
                            src={logo}
                            alt="logo"
                            className="footer-middle-left-logo"
                        />
                    </div>
                    <div className="footer-middle-line" />
                    <div className="footer-middle-middle"></div>
                    <div className="footer-middle-line" />
                    <div className="footer-middle-right">
                        <img
                         src={qrcode} alt="二维码" />
                        <span>QQ扫码咨询</span>
                    </div>
                </div>
                <div className="footer-footer">
                    <span>
                        地址：重庆市南岸区崇文路2号重庆邮电大学经济管理学院2907
                    </span>
                    <span>
                        邮箱：hr@mislab.team
                    </span>
                </div>
            </div>
        </div>
    )
}
