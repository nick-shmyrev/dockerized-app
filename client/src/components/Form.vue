<template>
  <form v-on:submit.prevent="handleFormSubmit">
    <h3>Contact Form</h3>
    
    <label>
      Name:
      <input type="text" name="contact_name">
    </label>
    
    <label>
      Phone:
      <input type="text" name="contact_phone">
    </label>
    
    <label>
      Address:
      <input type="text" name="contact_address">
    </label>
    
    <button type="submit">Submit</button>
  </form>
</template>

<script>
  export default {
    name: "Form",
    props: ['contacts'],
    methods: {
      handleFormSubmit: function (event) {
        const contact = {
          contact_name: event.target.contact_name.value,
          contact_phone: event.target.contact_phone.value,
          contact_address: event.target.contact_address.value
        };
        
        this.$emit('addContact', contact);
        event.target.reset();
      }
    }
  }
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 20px;
}
</style>
