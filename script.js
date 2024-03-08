function calculate(){
  const birthDate = document.getElementById('birthdate').value;
  const gender = document.getElementById('gender').value;
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  const dayOfWeek = (Math.floor((CC / 4) - 2 * CC - 1) + Math.floor((5 * YY / 4)) + Math.floor((26 * (MM + 1) / 10)) + DD) % 7;

}