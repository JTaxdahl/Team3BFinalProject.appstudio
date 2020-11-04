hmbList.onclick=function(s){
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

var couponList = ['McDonalds - Free McChicken with $5 purchase','Hyvee - 30% off Frozen Dinners','Popeyes - Free Biscuit and Drink',
                  'Subway - Two for One Six Inch Subs']
var address1 = ""

listView.onshow=function(){
    drpCoupons.clear()   
  for (i = 0; i <= couponList.length -1; i++)
    drpCoupons.addItem(couponList[i])
}

drpCoupons.onclick=function(s){
   // this 'if' kicks user out if they just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  
if (drpCoupons.selection=="McDonalds - Free McChicken with $5 purchase"){
    address1 = "2410 Cuming St, Omaha, NE 68131";
  } else if (drpCoupons.selection=="Hyvee - 30% off Frozen Dinners") {
    address1 = "5150 Center St, Omaha, NE 68106";
  } else if (drpCoupons.selection=="Popeyes - Free Biscuit and Drink") {
    address1 = "4524 Dodge St, Omaha, NE 68132";
  } else {
    address1 = "901 N 24th St, Omaha, NE 68102";
  }
  
  if (drpCoupons.selection=="McDonalds - Free McChicken with $5 purchase"){
    QRCodeMcD.show();
  } else if (drpCoupons.selection=="Hyvee - 30% off Frozen Dinners") {
    QRCodeHyv.show();
  } else if (drpCoupons.selection=="Popeyes - Free Biscuit and Drink") {
    QRCodePop.show();
  } else {
    QRCodeSW.show();
  }
        drpCoupons.value = s
        lblCoupon.value = `${drpCoupons.selection} - that is located at ${address1}`
    }
}



