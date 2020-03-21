<template>
    <div class="main-wrapper">
        <div>
            <h1>首页</h1>
            <van-button type="default">默认按钮</van-button>
            <van-button type="primary">主要按钮</van-button>
            <van-button type="info">信息按钮</van-button>
            <van-button type="warning">警告按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
            <div :class="$style.test">1</div>
            <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '',
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        };
    },
};
</script>

<style lang="less" module>
.test {
    width: 150px / 2;
    height: 75px / 2;
    background-color: greenyellow;
}
</style>
