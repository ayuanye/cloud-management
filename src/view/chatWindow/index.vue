<template>
    <div class="Home_app">
        <div class="demo-split">
            <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    <a-input ref="userNameInput" v-model="userName" placeholder="搜索联系人/聊天记录">
                        <a-icon slot="prefix" type="search" />
                    </a-input>
                    <div>235134444</div>
                    <div>124444444</div>
                </div>
                <div slot="right" class="demo-split-pane">
                    Right Pane
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
</style>