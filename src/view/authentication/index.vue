<template>
    <div>
        <div class="content_authentication">
            <a-tabs default-active-key="1" size="large">
                <a-tab-pane key="1" tab="扫码认证">
                    <div class="content_scanCode">
                        <div>
                            <img src="@/assets/images/appDowload.png" style="width:100px;height:100px;"/>
                            <p class="content_text">苹果端下载</p>
                        </div>
                        <div>
                            <img src="@/assets/images/anzhuoDowload.png" style="width:100px;height:100px;"/>
                            <p class="content_text">安卓端下载</p>
                        </div>
                        <div>
                            <img src="@/assets/images/H5.png" style="width:100px;height:100px;"/>
                            <p class="content_text" style="margin-left:20px">H5认证</p>
                        </div>
                    </div>
                    <a-button type="primary" style="margin-bottom:19px" @click="nextStep">我已完成认证</a-button>
                    <div class="content_foot">
                        <p>已有账号，<a-button type="link" @click="toLogin">立即登录</a-button></p>
                    </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="短信认证" force-render class="content_btn">
                    <div class="content_info">
                        <span>【全购云管理】你好，你手机号100***884将收到以下带有认证链接的短信，请您在2小时内认证。</span>
                    </div>
                    <a-button type="primary" style="margin-bottom:19px" @click="nextStep" ghost>已发送短信</a-button>
                    <div class="content_foot">
                        <p>已有账号，<a-button type="link" @click="toLogin">立即登录</a-button></p>
                    </div>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                telNumber:'',
                code:'',
                passWord:'',
                login:'toLogin',
                value:'true',
                toRegister:'toRegister'
            }
        },
        methods:{
            toLogin(){
                this.$emit('toLogin',this.login)
            },
            userAgreement(){
                // const h = this.$createElement;
                this.$warning({
                    title: '用户协议/隐私政策',
                    content:'用户协议用户协议用户协议用户协议用户协议用户协议',
                });
            },
            onChange(e) {
                this.value = 'false'
                console.log('radio checked', e.target.value);
            },
            nextStep(){
                this.$emit('toRegister',this.toRegister)
            },
            forgetPassword(){
                console.log('忘记密码')
            }
        }
    }
</script>
<style>
    .content_authentication{
        width: 430px;
        height: 520px;
        background-color: white;
        padding: 11px 30px 44px 30px;
    }
    .ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container{
        font-size: 24px;
        color: rgba(16, 16, 16, 1);
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .content_scanCode{
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        margin-bottom: 60px;
    }
    .content_authentication .content_text{
        width: 100px;
        height: 24px;
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        text-align: center;
        margin-top: 8px;
        margin-left: 10px;
        font-family: SourceHanSansSC-regular;
    }
    .content_authentication .content_info{
        width: 370px;
        height: 110px;
        padding: 30px 11px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        background-color: rgba(250, 250, 250, 1);
        text-align: center;
        font-family: SourceHanSansSC-regular;
        margin-bottom: 30px;
        margin-top: 60px;
    }
    .content_authentication .ant-input-affix-wrapper .ant-input:not(:first-child){
        padding-left: 48px;
    }
    .content_authentication .ant-input-affix-wrapper .ant-input-prefix{
        left:20px
    }
    .content_authentication .content_text{
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
    }
    .content_authentication .ant-btn{
        padding: 0;
    }
    .content_authentication .ant-btn-primary{
        width: 370px;
        height: 60px;
        line-height: 29px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        background-color: #1670FF ;
    }
    .content_authentication .content_btn .ant-btn-primary{
        width: 114px;
        height: 40px;
        line-height: 20px;
        border-radius: 6px;
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        margin-left: 120px;
    }
    .content_authentication .content_foot{
        /* margin-top: 50px; */
        text-align: center;
    }
    .content_authentication .content_btn .content_foot{
        margin-top: 90px;
        text-align: center;
    }
    
</style>