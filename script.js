function calculate(){
  const birthDate = document.getElementById('birthdate').value;
  const gender = document.getElementById('gender').value;
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  
  if (!isValidDate(birthDate)){
    alert("Please enter a valid date.");
    return;
  }

  const dayOfWeek = (Math.floor((CC / 4) - 2 * CC - 1) + Math.floor((5 * YY / 4)) + Math.floor((26 * (MM + 1) / 10)) + DD) % 7;

  let akanName;
  if (gender === 'male') {
    switch (dayOfWeek) {
      case 0:
        akanName = "Kwasi";        
        break;
      case 1:
        akanName = "Kwadwo";        
        break;
        case 2:
          akanName = "Kwabena";
          break;
      case 3:
          akanName = "Kwaku";
          break;
      case 4:
          akanName = "Yaw";
          break;
      case 5:
          akanName = "Kofi";
          break;
      case 6:
          akanName = "Kwame";
          break;  
    
      default:
        break;
    }
    
  } else {
    
  }
 
}