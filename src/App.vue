<template>
  <div id="app" :class="{ dark: show }">
    <transition name="slide-fade">
      <router-view />
    </transition>

   
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
   
  },
  computed: {
    ...mapState(['show'])
  },
  created() {
    this.$store.dispatch("horizontalAllDate")
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}



.footer_navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer_navigation li {
  width: 20%;
}


.van-tabbar {
  height: 100px;
}

.footer_navigation li a {
  color: black;
  border-radius: 50%;
  width: 12vw;
  display: block;
  height: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.van-tabbar-item__icon {
  position: relative;
  height: 22px;
  width: 22px;
}



.van-tabbar-item__icon svg {
  width: 1em;
  height: 1em;
  font-size: 22px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.router-link-exact-active {
  background-color: red;
  color: white !important;
}

.slide-fade-enter-active {
  transition: all 0.5s;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
