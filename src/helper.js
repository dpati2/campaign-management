export const getEventOccurnce = (timeSpan) => {
  let occurnace = 'LIVE';
  let days = 0;
  let today = new Date().setHours(0,0,0,0);
  console.log("====>",today);
  if(today + 86400000 <= timeSpan) {
    occurnace = 'UPCOMING';
    days = Math.floor((timeSpan -today)/86400000)
  } else if(timeSpan < today ) {
    occurnace = 'PAST';
    days = Math.floor((today - timeSpan)/86400000)
  } else {
    occurnace = 'TODAY';
    days = 0;
  }
  return {
    event: occurnace,
    days: days
  }
}

