import PasswordValidator from "password-validator";

// Create a schema
var passwordschema = new PasswordValidator();

// Add properties to it
passwordschema
  .is()
  .min(8, "Password must be minimum of eight characters") // Minimum length 8
  .is()
  .max(100, "Password is too long") // Maximum length 100
  .has()
  .uppercase(1, "Password must have an uppercase alphabet") // Must have uppercase letters
  .has()
  .lowercase(1, "Password must have a lowercase alphabet") // Must have lowercase letters
  .has()
  .digits(1, "Password must have a lowercase alphabet") // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);

  export default passwordschema;