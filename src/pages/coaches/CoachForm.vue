<template>
  <form @submit.prevent='submitForm'>
    <div class='form-control' :class='{invalid: !input.firstName.valid}'>
      <label for='firstName'>First Name</label>
      <input name='firstName' id='firstName' type='text' v-model='input.firstName.value' @blur='validateFirstName' />
      <p v-if='!input.firstName.valid'>{{input.firstName.validationMessage}}</p>
    </div>
    <div class='form-control' :class='{invalid: !input.lastName.valid}'>
      <label for='lastName'>Last Name</label>
      <input name='lastName' id='lastName' type='text' v-model='input.lastName.value' @blur='validateLastName'/>
      <p v-if='!input.lastName.valid'>{{input.lastName.validationMessage}}</p>
    </div>
    <div class='form-control'>
      <label for='email'>Email</label>
      <input name='email' id='email' type='email' v-model='input.email.value'/>
    </div>
    <div class='form-control'>
      <label for='age'>Age</label>
      <input name='age' id='age' type='number' v-model='input.age.value'/>
    </div>
    <label>Form of expertise</label>
    <div v-for='expertiseType in expertiseTypes' :key='expertiseType.id'>
      <input :id='expertiseType.id' :name='expertiseType.name' type='checkbox' :value='expertiseType.value'
             v-model='input.expertise.value' />
      <label :for='expertiseType.id'>{{ expertiseType.name }}</label>
    </div>
    <label>
      Whats your sex?
    </label>
    <div v-for='sexType in sexTypes' :key='sexType.id'>
      <input :id='sexType.id' :name="sexType.name" type="radio" :value="sexType.value"  v-model="input.sexType.value"/>
      <label :for="sexType.id">{{ sexType.name }}</label>
    </div>
    <CustomButton>Register</CustomButton>
  </form>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton';

export default {
  components: {
    CustomButton
  },
  name: 'CoachForm',
  data() {
    return {
      input: {
        firstName: {
          value: 'Pepa',
          valid: true,
          validationMessage: 'Invalid first name'
        },
        lastName: {
          value: '',
          valid: true,
          validationMessage: 'Invalid last name'
        },
        email: {
          value: '',
          valid: true,
          validationMessage: 'Invalid email'
        },
        age: {
          value: null,
          valid: true,
          validationMessage: 'Invalid Age'
        },
        expertise: {
          value: [],
          valid: true,
          validationMessage: 'Invalid expertise'
        },
        sexType: {
          value: 'MALE',
          valid: true,
          validationMessage: 'Invalid sex'
        }
      },
      sexTypes: [
        {
          name: 'Male',
          value: 'MALE',
          id: 'male'
        },
        {
          name: 'Female',
          value: 'FEMALE',
          id: 'female'
        },
        {
          name: 'Other',
          value: 'OTHER',
          id: 'other'
        },
      ],
      expertiseTypes: [
        {
          name: 'Backend',
          value: 'BACKEND',
          id: 'backend'
        },
        {
          name: 'Frontend',
          value: 'FRONTEND',
          id: 'frontend'
        },
        {
          name: 'Soft Skills',
          value: 'SOFT_SKILLS',
          id: 'soft-skills'
        },
        {
          name: 'Math',
          value: 'MATH',
          id: 'math'
        },
        {
          name: 'Science',
          value: 'SCIENCE',
          id: 'science'
        }
      ]
    };
  },
  methods: {
    submitForm() {
      console.log(this.input);
      let payload = {
        firstName: this.input.firstName.value,
        lastName: this.input.lastName.value,
        email: this.input.email.value,
        age: this.input.age.value,
        sexType: this.input.sexType.value,
        expertiseList: this.input.expertise.value,
      };
      console.log(payload);
      this.$store.dispatch('coaches/createCoach', payload)
    },
    validateFirstName(){
      if(this.input.firstName.value === ''){
        this.input.firstName.valid = false;
        this.input.firstName.validationMessage = 'First name is empty, try again'
      }
    },
    validateLastName(){
      if(this.input.lastName.value === ''){
        this.input.lastName.valid = false;
        this.input.lastName.validationMessage = 'Last name is empty, try again'
      }
    }
  }
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

input {
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