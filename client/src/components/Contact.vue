<template>
<tr>
  <td>{{contact.contact_name}}</td>
  <td>{{contact.contact_phone}}</td>
  <td>{{contact.contact_address}}</td>
  <td>
    <button
      type="button"
      v-on:click="handleRemoveContact"
    >
      X
    </button>
  </td>
</tr>
</template>

<script>
  export default {
    name: "Contact",
    props: ['contact'],
    methods: {
      handleRemoveContact: function() {
        const { contact_id } = this.$props.contact;
        
        this.$emit('removeContact', contact_id);
      }
    }
  }
</script>

<style scoped>

</style>
