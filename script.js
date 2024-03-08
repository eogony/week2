function compute(){
  let birthDate = document.getElementById('birthdate').value;
  let gender = document.getElementById('gender').value;

  let date = new Date(birthDate);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear().toString().slice(-2);
  
  let century = parseInt(year.slice(0, 2));
  let yr = parseInt(year);
  let mth = month;
  let dy = day;


  
  if (!isValidDate(birthDate)){
    alert("Please enter a valid date.");
    return;
  }

  let dayOfTheWeek = (Math.floor((century / 4) - 2 * century - 1) + Math.floor((5 * yr / 4)) + Math.floor((26 * (mth + 1) / 10)) + dy) % 7;
  //let dayOfTheWeek = Math.round((((century/4)-2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
  
  let akanName;

  if (gender === 'male') {
    switch (dayOfTheWeek) {
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
    switch(dayOfTheWeek) {
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

let outcome = document.getElementById('outcome');
outcome.innerHTML = `Your Akan name is ${akanName}.`; 
 
}