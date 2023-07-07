<template>
    <a-layout id="components-layout-demo-fixed-sider" style="min-height: 100vh">
        <a-layout-sider width='150' class="Sider_menu">
            <div class="logo">
                <img src="@/assets/images/headerImg.png" style="width:100%;height:100%;overflow:hidden"/>
            </div>
            <a-menu theme="dark" :default-selected-keys="['3']" mode="inline" :open-keys.sync="openKeys">
                <a-sub-menu key="sub1">
                <span slot="title"><span>协同办公</span></span>
                <a-menu-item key="3">
                    <a-icon type="wechat" />
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="team" />
                </a-menu-item>
                <a-menu-item key="5">
                    <a-icon type="line-chart" />
                </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                <span slot="title"><span>客服聊天</span></span>
                <a-menu-item key="6">
                    <a-icon type="aliwangwang" />
                </a-menu-item>
                <a-menu-item key="8">
                    <a-icon type="taobao" />
                </a-menu-item>
                <a-menu-item key="9">
                    <a-icon type="zhihu" />
                </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="10">
                <a-icon type="file" />
                <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background:'#EFF0F1', padding: 0 }">
                <Header />
            </a-layout-header>
            <a-layout-content :style="{overflow:'initial',flex: '1 1 0',background:'#FFFFFF'}">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
  </a-layout>
</template>
<script>
import Header from '../Header/index.vue'
export default {
    components:{
        Header,
    },
    data() {
        return {
        collapsed: false,
        openKeys: ['sub1'],
        };
    },
};
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 50px;
  width: 50px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 16px 16px 50px;
  border-radius: 50px;
  overflow: hidden;
}
.ant-menu,.ant-menu-sub,.ant-menu-inline{
  background-color: #1D3965 !important;
}
.ant-layout-sider{
    background-color: #1D3965 !important
}
.ant-menu-dark .ant-menu-dark .ant-menu-sub{
    background-color: #1D3965 !important;
}
.ant-menu-item .anticon{
    min-width: 28px !important;
    font-size: 28px !important;
    margin-left: 10px ;
}

</style>