export const checkLoginForm = (email: string, password: string) => {
   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

   const isValidPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
   if (!isValidEmail) return "Email is not valid";
   if (!isValidPassword) return "Password is not valid.";
   return null;
};

export const checkSignUpForm = (
   email: string,
   password: string,
   name: string
) => {
   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
   const isValidPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
   const isNameValid = name?.length > 0;
   if (!isNameValid) return "Name should not be empty.";
   if (!isValidEmail) return "Email is not valid.";
   if (!isValidPassword) return "Password is not valid.";
   return null;
};
