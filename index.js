function scuberGreetingForFeet(distance){
let result 
if (distance <= 400) {
  result = "This one is on me!"
}
else if (distance <= 2000 && distance > 400) {
  result = "That will be twenty bucks."
}
else if (distance > 2000 && distance <= 2500) {
  result = "I will gladly take your thirty bucks."
}
else if (distance > 2500) {
  result = "No can do."
}
return result
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let say
  switch (tip) {
    case "generous" :
    say = "Thank you so much."
    break
    case "not as generous" :
      say = "Thank you."
      break
      default: 
      say = "Bye."
      break

  }
  return say
}