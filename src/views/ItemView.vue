<template>
    <div>
        <section>
            <user-profile :info="fetchedItem">
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
            </user-profile>
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: { UserProfile },
  
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemID = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemID); // payload는 하나만 넘길 수 있어서 여러개면 객체형태로 전달해야함
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;

}
.time {
    font-size: 0.7rem;
}
</style>