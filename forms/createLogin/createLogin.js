
hmbLogin.onclick=function(s){
  if (typeof(s) == "object") {   
    return
  } else {
  switch(s) {
case "List":
  ChangeForm(listView)
  break;
case "Calendar":
  ChangeForm(Calendar)
  break;
case "Map":
  ChangeForm(Map2)
  break;
case "Add Your Phone Number":
  ChangeForm(createLogin)
  break;
}
}
}

req = ""
query = ""
results = ""

btnAdd.onclick = function() {
  query = "INSERT INTO users VALUES = "+ '"' + userName + '"' + '"' + userPN + '"'
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)

  if (req.status == 200) { 
    if (req.responseText == 500) { 
      console.log("You have successfully added to the text list!")
    } else
      console.log("There was a problem with adding your name and number")
  } else {
    console.log("Error: " + req.status);
  }

  query = `SELECT name from customer ORDER BY customer_id DESC`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jat82519&pass=" + pw + "&database=jat82519&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
  } else {
    console.log(`Error: ${req.status}`);
  }
  let userName = ""
  for (i = 0; i <= results.length - 1; i++)
    userName = userName + results[i] + "\n"
  txtName.value = userName
  
  let userPN = ""
  for (i = 0; i <= results.length - 1; i++)
    userPN = userPN + results[i] + "\n"
  txtPN.value = userPN
}





