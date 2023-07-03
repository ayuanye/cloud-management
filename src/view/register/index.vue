<template>
    <div>
        <div class="content_register">
            <p class="content_top">注册</p>
            <a-input placeholder="请输入手机号" v-model="telNumber" style="margin-bottom:30px"></a-input>
            <a-input placeholder="请输入验证码" v-model="code" style="margin-bottom:30px">
                <a-tooltip slot="suffix" title="发送验证码">
                    <a-button >发送验证码</a-button>
                </a-tooltip>
            </a-input>
            <a-input-password placeholder="请设置密码，不少于6位数" v-model="passWord" :visibilityToggle="false" style="margin-bottom:20px"></a-input-password>
            <a-radio size="small" style="margin-bottom:10px" v-model="value" @change="onChange">
                同意指点地球村
                <a-button type="link" @click="userAgreement">用户协议</a-button>和
                <a-button type="link" @click="userAgreement">隐私政策</a-button>
            </a-radio>
            <a-button type="primary" style="margin-bottom:19px">下一步</a-button>
            <div class="content_foot">
                <p>已有账号，<a-button type="link" @click="toLogin">立即登录</a-button></p>
            </div>
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
                value:''
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
                    // content: h('div', {}, [
                    //     h('p', 'some messages...some messages...'),
                    //     h('p', 'some messages...some messages...'),
                    // ]),
                    content:'用户协议用户协议用户协议用户协议用户协议用户协议',
                });
            },
            onChange(e) {
                this.value = ''
                console.log('radio checked', e.target.value);
            },
            forgetPassword(){
                console.log('忘记密码')
            }
        }
    }
</script>
<style>
    .content_register{
        width: 430px;
        height: 520px;
        background-color: white;
        padding: 31px 30px 54px 30px;
    }
    .content_register .content_top{
        left: 712px;
        width: 168px;
        height: 35px;
        color: rgba(16, 16, 16, 1);
        font-size: 24px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .content_register .ant-input{
        width: 370px;
        height: 60px;
        border-radius: 6px;
        text-align: left;
        border: 1px solid rgba(238, 238, 238, 1);
    }
    .content_register .ant-input-affix-wrapper .ant-input:not(:first-child){
        padding-left: 48px;
    }
    .content_register .ant-input-affix-wrapper .ant-input-prefix{
        left:20px
    }
    .content_register .content_text{
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
    }
    .content_register .ant-btn{
        padding: 0;
    }
    .content_register .ant-btn-primary{
        width: 370px;
        height: 60px;
        line-height: 29px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        background-color: #1670FF ;
    }
    .content_register .content_foot{
        text-align: center;
    }
    
</style>