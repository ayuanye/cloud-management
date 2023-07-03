<template>
    <div class="login_app">
        <div class="backg">
            <img src="@/assets/images/login.png"
                style="width:470px;height:335px;margin-right:103px"/>
        </div>
        <div class="content_login" v-show="showContent == 'toLogin'">
            <p class="content_top">欢迎使用云管理</p>
            <a-input placeholder="请输入账号" v-model="userName" style="margin-bottom:30px">
                <template #prefix>
                    <a-icon type="user" :style="{fontSize:'20px'}"/>
                </template>
            </a-input>
            <a-input-password placeholder="请输入密码" v-model="passWord" style="margin-bottom:30px">
                <template #prefix>
                    <a-icon type="lock" :style="{fontSize:'20px'}"/>
                </template>
            </a-input-password>
            <div class="content_text">
                <a-button type="link" @click="register">注册</a-button>
                <a-button type="link" @click="forgetPassword">忘记密码?</a-button>
            </div>
            <a-button type="primary">登录</a-button>
        </div>
        <Uegister v-show="showContent == 'toRegister'" @toLogin='toLoginss'></Uegister>
    </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
// import { defineComponent} from 'vue';
import Uegister from '../register/index.vue'
    export default {
        components: {
            UserOutlined,
            Uegister
        },
        data() {
            return {
                message:'我是login组件',
                image:'../../assets/images/login.png',
                userName:'',
                passWord:'',
                showContent:'toLogin'
            }
        },
        methods:{
            toLoginss(event){
                this.showContent=event
            },
            register(){
                this.showContent="toRegister"
                console.log('去注册')
            },
            forgetPassword(){
                this.showContent="toForgetPassword"
                console.log('忘记密码')
            }
        }
    }
</script>
<style>
    .login_app{
        height: 100%;
        width: 100%;
        background-color: #F3F2F7;
        display: flex;
        align-items:center;
        justify-content:center
    }
    .content_login{
        width: 430px;
        height: 520px;
        background-color: white;
        padding: 31px 30px 54px 30px;
    }
    .content_login .content_top{
        left: 712px;
        width: 168px;
        height: 35px;
        color: rgba(16, 16, 16, 1);
        font-size: 24px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .content_login .ant-input{
        width: 370px;
        height: 60px;
        border-radius: 6px;
        text-align: left;
        border: 1px solid rgba(238, 238, 238, 1);
    }
    .content_login .ant-input-affix-wrapper .ant-input:not(:first-child){
        padding-left: 48px;
    }
    .content_login .ant-input-affix-wrapper .ant-input-prefix{
        left:20px
    }
    .content_login .content_text{
        margin-bottom: 94px;
        display: flex;
        justify-content: space-between;
    }
    .content_login .ant-btn-link:nth-child(2){
        color: black;
    }
    .content_login .ant-btn-link:hover{
        color: #1890ff;
    }
    .content_login .ant-btn-primary{
        width: 370px;
        height: 60px;
        line-height: 29px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        background-color: #1670FF ;
    }
    
</style>