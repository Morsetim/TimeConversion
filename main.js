function twelveTo24Hours() {
  const time12hours = document.getElementById('12').value;
  let selectNum = document.getElementById('sel').options.selectedIndex;
  const amOrPm = document.getElementById('sel').options[selectNum].value;
  let time = time12hours.split(":");            //["12", "00", "00"]
  let answer;
  // validation for  wrong input 
  if (time.length != 3) {
    document.getElementById('output').innerHTML = "passed argument must be in this format --:--:-- ";
    return;
  }
  var isNotNumber = time.filter(i => isNaN(i));

  if (isNotNumber.length) {
    document.getElementById('output').innerHTML = "Please input must be numbers";
    return;
  }

  if ((time[0] > 12) || time[1] > 59 || time[2] > 59) {
    document.getElementById('output').innerHTML = "invalid argument";
    return;
  }
  //corect  input start

  if (time[0] == 12 && amOrPm === 'AM') {
    time[0] = parseInt(time[0]) - 12;
  } else if (time[0] > 12 && amOrPm == 'PM') {
    time[0] = parseInt(time[0] - 12);
  } else if (time[0] == 12 && amOrPm == 'PM') {
    time[0] = parseInt(time[0]) + 0;
  } else if (time[0] < 12 && amOrPm === 'AM') {
    time[0] = parseInt(time[0]) + 0;
  } else if (time[0] < 12 && amOrPm === 'PM') {
    time[0] = parseInt(time[0]) + 12;
  } else {
    answer = "No argument passed";
  }
  answer = time[0] + ':' + time[1] + ':' + time[2];

  document.getElementById('output').innerHTML = answer;
}

// conversion from 24hours to 12hours start



function twentyFourTo12() {
  var time24hours = document.getElementById('24').value;
  var time = time24hours.split(":");
  var isNotNumber = time.filter(i => isNaN(i));

  if (time24hours === undefined) {
    document.getElementById('output').innerHTML = "No argument passed";
    return;
  } else if (isNotNumber.length) {
    document.getElementById('output').innerHTML = "Please input must be numbers";
    return;
  } else if (time24hours instanceof Array) {
    document.getElementById('output').innerHTML = 'Passed argument must not be an array values';
    return;
  } else if (time.length != 3) {
    document.getElementById('output').innerHTML = "passed argument must be in this format --:--:-- ";
    return;
  } else {
    let meridian = 'AM';
    if (time[0] >= 12) {
      meridian = 'PM';
    }

    if (time[0] > 12) {
      time[0] = time[0] - 12;
    }

    let answer = time[0] + ':' + time[1] + ':' + time[2] + ' ' + meridian;

    document.getElementById('output').innerHTML = answer;

  }
}



