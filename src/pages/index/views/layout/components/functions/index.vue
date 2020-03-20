<template>
    <div id="functions" :class="$style.main">
        <x-server />

        <!-- 通知 -->
        <notification :effect="tooltip.effect" :placement="tooltip.placement" />

        <!-- 用户功能 -->
        <user />
    </div>
</template>

<script>
import Notification from './notification.vue';
import User from './user.vue';
import XServer from './server.vue';

export default {
    components: {
        Notification,
        User,
        XServer,
    },
    data() {
        return {
            tooltip: {
                effect: 'dark',
                placement: 'bottom',
            },
        };
    },
};
</script>

<style lang="less" module>
.main {
    display: flex;
    flex-direction: row;

    > * + * {
        margin-left: 30px;
    }

    > * {
        display: flex;
        align-items: center;
    }
}
</style>
