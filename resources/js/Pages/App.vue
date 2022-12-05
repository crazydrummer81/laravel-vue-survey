<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import { mapState } from "vuex";

export default {
  props: {
    page: String,
    lang: String,
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
  components: { Head, Link },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<template>
  <Head title="Welcome" />

  <router-view></router-view>

</template>
