<template>
  <form v-on:submit="formSubmit">
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
  import axios from 'axios';
  
  export default {
    name: "Form",
    props: ['contacts'],
    methods: {
      formSubmit: function (event) {
        event.preventDefault();
        
        const body = {
          contact_name: event.target.contact_name.value,
          contact_phone: event.target.contact_phone.value,
          contact_address: event.target.contact_address.value
        };
        const options = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        
        axios.post('/api/contacts', body, options)
             .then(response => {
               if (response.status === 200) {
                 this.contacts.push({ ...body, contact_id: response.data.insertId });
                 event.target.reset();
               }
             });
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
