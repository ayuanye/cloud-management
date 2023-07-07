<template>
    <div class="Header">
        <div class="Header_left">
            <div>
                <span style="margin-right:6px">全购网络有限公司</span>
                <span style="margin-top:10px">
                    <a-dropdown :trigger="['click']">
                        <a-button type="primary" shape="circle" icon="swap"/>
                        <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <a style="margin-left:10px">全购网络有限公司</a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="1">
                                <a style="margin-left:10px">全购网络有限公司</a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3">
                                <a-button type="link"><a-icon type="plus" />创建/加入企业</a-button>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </span>
            </div>
            <div class="Head_right">
                <span><a-icon type="apartment" /></span><span style="margin-right:70px"><Button type="text">组织架构</Button></span>
                <span><a-icon type="audit" /></span>&nbsp;<span style="margin-right:70px"><Button type="text">审批</Button></span>
                <span><a-icon type="notification" /></span>&nbsp;<span style="margin-right:70px"><Button type="text">公告</Button></span>
                <div class="Head_Icon">
                    <span style="margin-right:70px"><Button type="text"><a-icon type="minus" /></Button></span>
                    <span style="margin-right:70px"><Button type="text"><a-icon type="border" /></Button></span>
                    <span style="margin-right:0px"><Button type="text"><a-icon type="close" /></Button></span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.Header{
    padding: 15px 20px;
    width: 100%;
    height: 100%
}
.Header_left{
    line-height: 34px;
    color: rgba(16, 16, 16, 1);
    font-family: SourceHanSansSC-regular;
    display: flex;
    justify-content: space-between;
}
.ant-btn-circle, .ant-btn-circle-outline{
    min-width: 24px;
}
.ant-btn-icon-only{
    width: 24px; 
    height: 24px;
}
.Head_right{
    display: flex;
}
.Head_right .anticon{
    font-size: 20px;
    margin-top: 8px;
}
.ivu-btn:hover{
    background-color: #EFF0F1;
}
</style>