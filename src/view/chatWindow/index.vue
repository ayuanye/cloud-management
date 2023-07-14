<template>
    <div class="Home_app">
        <div class="demo-split">
            <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    <a-input ref="userNameInput" v-model="userName" placeholder="搜索联系人/聊天记录" style="margin-bottom:10px">
                        <a-icon slot="prefix" type="search" />
                    </a-input>
                    <div>
                        <Menu :theme="theme" active-name="1">
                            <MenuItem name="1">
                                <List>
                                    <ListItem>
                                        <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="张三" description="我今天不回去吃晚饭，别等了" />
                                    </ListItem>
                                </List>
                            </MenuItem>
                            <MenuItem name="2">
                                <List>
                                    <ListItem>
                                        <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="李四" description="你是猪，哈哈哈" />
                                    </ListItem>
                                </List>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
                <div slot="right" class="demo-split-pane">
                    <p style="margin:14px 20px 0 20px;color:rgba(16, 16, 16, 1);font-family:SourceHanSansSC-regular;">张三</p>
                    <a-divider />
                    <div class="">
                        12435467i
                    </div>
                </div>
            </Split>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            split1: 0.23,
            mode: 'inline',
            theme: 'light',
            userName:'',
           
        }
    },
}
</script>
<style scoped>
.Home_app{
    background-color: #FFFFFF 100%;
    height: 100%;
}
.demo-split{
    height: 100%;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
}
.demo-split-pane .ivu-menu {
    width: auto !important;
}
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    padding: 14px 24px 14px 0px !important;
}
</style>