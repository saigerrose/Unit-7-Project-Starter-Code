$("button").click(function(){
    let name = $(".name").val();
    let clothing = $(".clothingType").val();
    let money = $(".moneyOnClothes").val();
    console.log();
    let moneySpent = (money * 403);
    $(".fortuneDisplay").append(name + ", you will spend $" + moneySpent + " on clothes by 2030.");
});