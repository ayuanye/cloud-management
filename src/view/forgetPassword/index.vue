<template>
    <div>
        <div class="content_register" v-show="showContent == 'toRegister'">
            <p class="content_top">忘记密码</p>
            <a-input placeholder="请输入手机号" v-model="telNumber" style="margin-bottom:30px"></a-input>
            <a-input placeholder="请输入验证码" v-model="code" style="margin-bottom:30px">
                <a-tooltip slot="suffix" title="发送验证码">
                    <a-button >发送验证码</a-button>
                </a-tooltip>
            </a-input>
            <a-input-password placeholder="请设置新密码，不少于6位数" v-model="passWord" :visibilityToggle="false" style="margin-bottom:60px"></a-input-password>
            <a-button type="primary" style="margin-bottom:15px" @click="toLogin">确认</a-button>
            <div class="content_foot">
                <p>已有账号，<a-button type="link" @click="toLogin">立即登录</a-button></p>
            </div>
        </div>
    </div>
</template>
<script>
import Authentication from '../authentication/index.vue'
    export default {
        components: {
            Authentication
        },
        data() {
            return {
                showContent:'toRegister',
                telNumber:'',
                code:'',
                passWord:'',
                login:'toLogin',
                value:'true'
            }
        },
        methods:{
            toLogin(){
                this.$emit('toLogin',this.login)
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