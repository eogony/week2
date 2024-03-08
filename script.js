function compute(){
  const birthDate = document.getElementById('birthdate').value;
  const gender = document.getElementById('gender').value;
  const date = new Date(birthDate);
  let day = getDay();
  let month = getMonth();
  let year = getYear();
  let century = parseInt(year.substring(0,2));
  year = parseInt(year);

  
  if (!isValidDate(birthDate)){
    alert("Please enter a valid date.");
    return;
  }

  //let dayOfTheWeek = (Math.floor((CC / 4) - 2 * CC - 1) + Math.floor((5 * YY / 4)) + Math.floor((26 * (MM + 1) / 10)) + DD) % 7;
  let dayOfTheWeek = Math.round((((century/4)-2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
  
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
    
  } else if (gender === 'female') {
    switch(dayOfWeek) {
      case 0:
        akanName = "Akosua";
        break;
      case 1:
          akanName = "Adwoa";
          break;
      case 2:
          akanName = "Abenaa";
          break;
      case 3:
          akanName = "Akua";
          break;
      case 4:
          akanName = "Yaa";
          break;
      case 5:
          akanName = "Afua";
          break;
      case 6:
          akanName = "Ama";
          break;

    }
    
  }
 
}