export default function Validations(values) {

    // console.log(values);
      let errors = {};
      
      if (!values.email || values.email==="") {
        errors.email = 'Email required';
      
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.phonenumber || values.phonenumber==="" || values.phonenumber.length>10 ) {
        errors.phonenumber = 'Phone number is required';
        
      } else if (values.phonenumber.length < 10) {
        errors.phonenumber = 'phonenumber needs to be 6 characters or more';
      }
      if (!values.firstName || values.firstName==="") {
        errors.firstName = 'Name is required';
      } else if (values.phonenumber.length < 10) {
        errors.phonenumber = 'phonenumber needs to be 6 characters or more';
      }
     
      return errors;
    }