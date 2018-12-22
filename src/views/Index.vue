<template>
  <div class="wrapper">
        <header>
            <AppHeader/>
        </header>
        <main>
            <aside class="aside-right">
                <transition 
                    name="fade"
                    mode="out-in"
                    :css="true">
                    <router-view/>
                </transition>
            </aside>
        </main>
        <footer>
            <nav>
                <router-link to="/">home</router-link>
                <router-link to="/portfolio">portfolio</router-link>
            </nav>
        </footer>
    </div>
</template>
<script>
export default {
    components: {
       AppHeader 
    }
}
</script>

<style lang="stylus">
.wrapper
  display: grid
  height: 100vh;
  grid-template-rows: 15vh 85vh;
  grid-template-columns: 50vw 50vw;
  overflow: hidden;
  header 
    grid-row: 1;
    grid-column: "1 / 3";
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(0, 0, 0, 0.0);
  main 
    grid-row: 2;
    grid-column:  "1 / 3";
    .container > .left-bar
      height: 75vh;

.fade-enter-active,
.fade-leave-active
  transition opacity 0.5s
.fade-enter,
.fade-leave-to 
  opacity: 0;
</style>

