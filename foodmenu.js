//  >>>>>>>>>>>>>>>>>>>>>>>>**food menu**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let a=require('prompt-sync')();

console.log("|>>>well-come-to-food_menue<<<|");

console.log("1).Breakfast \n2).Lunch \n3).Dinner\n4).Party🍾"); 
let B=a("enter_your_choice: -");
if(B==1){
    console.log("Breakfast;","🍞","🍎","🥭","🥛")
    console.log("1).Milk-🥛 Rs.50 Plate\n2).Bread-🍞 Rs.100 Plate\n3).Pizza-🍕 Rs.30 Plate\n4).Sandwish-🥪 Rs.20 Plate")
    let b=a("enter_your_choice:- ")
    if (b==1){
        console.log("Milk-🥛.");
    }if (b==2){
        console.log("Bread-🍞.");
    }if (b==3){
        console.log("Pizza-🍕.");
    
    }else{
        console.log("Sandwish-🥪" );
    };
}if (B==2){
    console.log("Lunch🍚");
    console.log("1).🍚rice-Broccly🥦Rs.300 ;\n2).🍚rice-potato🥔Rs.450\n3).🍚Curry-rice🍛Rs.500 "); 
    let l=a("enter_your_choice: -");
    if (l==1){
        console.log("🍚rice-Broccly🥦");
    }if (l==2){
        console.log("🍚rice-potato🥔");
    }else{ 
        console.log("🍚Curry-rice🍛")
    };
}if (B==3){
    console.log("Dinner-🍽 ");
    console.log("1).Roti-chicken🍗Rs.170\n2).Roti-vejeitable🍲Rs.240\n3).Roti-Chole🍝Rs.330 "); 
    let D=a("enter_the_choice: ");
    if (D==1){
        conosole.log("Roti-chicken🍗");
    }if (D==2){
        console.log("Roti-vejeitable🍲");  
        
    }else {
        console.log("Roti-Chole🍝");
    }

}if (B==4){
    console.log("Party-🍾")
    console.log("1).Wine-Glass🍷\n2).Tropical-Drink🍹\n3).Beer-Drink🍺  ");
    let P=a("enter_the_choice: ");
    if (P==1){
        console.log("Wine-Glass🍷");
    }if(P==2){
        console.log("Tropical-Drink🍹");
    }else{
        console.log("Beer-Drink🍺");
    }

}else if(B==5){
    console.log("some thing weong\nTHANK-YOU")
    
}

