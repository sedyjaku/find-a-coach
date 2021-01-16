<template>
  <div>
    <form @submit.prevent='sendRequest'>
      <h2>Contact a coach</h2>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input name='title' id='title' type='text' v-model='title'/>
      </div>
      <div class='form-control'>
        <label for='message'>Message</label>
        <textarea name='message' id='message'  rows='5' v-model='message'/>
      </div>
      <CustomButton>Contact Coach</CustomButton>
    </form>
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton';
import { mapActions } from 'vuex';

export default {
  components: {
    CustomButton
  },
  props: {
    id:{
      type: String
    }
  },
  data() {
    return {
      title: '',
      message: ''
    }
  },
  methods: {
    ...mapActions('userMessages', {createRequest: 'createMessage'}),
    sendRequest(){
      this.createRequest({
        title: this.title,
        message: this.message,
        coachId: this.id,
        userId: 'userId'
      })
    }
  },
  name: 'CoachContact'
};
</script>

<style scoped>
form {
  margin: 3% 30% 3% auto;
  max-width: 40%;
  border-radius: 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5%;
  background-color: #ffffff
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

input, textarea {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}


input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}



.form-control.invalid input {
  border-color: red
}

.form-control.invalid label {
  color: red
}
</style>