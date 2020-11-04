hmbCal.onclick=function(s){
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