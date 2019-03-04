<template>
<tr>
  <td>{{contact.contact_name}}</td>
  <td>{{contact.contact_phone}}</td>
  <td>{{contact.contact_address}}</td>
</tr>
</template>

<script>
  export default {
    name: "Contact",
    props: ['contact']
  }
</script>

<style scoped>

</style>
