<template>
  <div id="app">
    <Header/>
    
    <Form
      :contacts="contacts"
      v-on:addContact="addContact($event)"
    />
    
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Phone</th><th>Address</th>
        </tr>
      </thead>
      <tbody>
        <Contact
          v-for="contact in contacts"
          :contact="contact"
          :key="contact.contact_id"
          v-on:removeContact="removeContact($event)"
        />
      </tbody>
    </table>
    
  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';
import Contact from './components/Contact';

export default {
  name: 'app',
  components: {
    Header,
    Form,
    Contact
  },
  data() {
    return {
      contacts: []
    };
  },
  mounted() {
    axios.get('/api/contacts')
      .then(response => this.contacts = response.data)
      .catch(e => console.log(e));
  },
  methods: {
    addContact: function(contact) {
      const body = contact;
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      axios.post('/api/contacts', body, options)
        .then(response => {
          if (response.status === 200) {
            this.contacts.push({ ...body, contact_id: response.data.insertId });
          }
        })
        .catch(e => console.log(e));
    },
    removeContact: function(id) {
      axios.delete(`/api/contacts/${id}`)
        .then(response => {
          if (response.status === 200) {
            const { deletedId } = response.data;
            this.contacts = this.contacts.filter(el => el.contact_id !== deletedId);
          }
        })
        .catch(e => console.log(e));
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  html {
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    text-align: center;
  }
  #app {
    margin: 0 auto;
    max-width: 1200px;
    box-shadow: 0 0 15px -5px #000;
    height: 100vh;
    position: relative;
    padding-top: 120px;
  }
  table {
    margin: 20px auto;
    text-align: left;
  }
  td {
    padding-right: 10px;
  }
</style>
