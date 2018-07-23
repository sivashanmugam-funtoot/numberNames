var allConditions =[
    {
        "condition":"num == 0",
        "apply" : "String('zero')"
    },
    {

        "condition":"num >= 1 && num <= 9",
        "apply":"map[num]"
    },
    {
        "condition":"num >= 10 && num <= 20",
        "apply":"map[num]"
    },
    {
        "condition":"totalDigits == 2 && num % 10 == 0",
        "apply":"map[num]"
    },
    {
        "condition":"totalDigits == 2",
        "apply":"map[partNum(num, 2)*10] + ' ' + map[partNum(num,1)]"
    },
    {
        "condition":"totalDigits == 3 && partNum(num,1,2) != 0 ",
        "apply":"map[partNum(num, 3)] + ' Hundred and ' + toNumberName(partNum(num,1,2))"
    },
    {
        "condition":"totalDigits == 3",
        "apply":"map[partNum(num, 3)] + ' Hundred'"
    },
    {
        "condition":"(totalDigits == 4 || totalDigits == 5) && partNum(num,1,3) != 0 ",
        "apply":"toNumberName(partNum(num, 4,5)) + ' Thousand and ' + toNumberName(partNum(num,1,3))"
    },
    {
        "condition":"totalDigits == 4 || totalDigits == 5",
        "apply":"toNumberName(partNum(num, 4,5)) + ' Thousand'"
    },
    {
        "condition":"(totalDigits == 6 || totalDigits == 7) && partNum(num,1,5) != 0 ",
        "apply":"toNumberName(partNum(num, 6,7)) + ' lakh ' + toNumberName(partNum(num,1,5))"
    },
    {
        "condition":"totalDigits == 6 || totalDigits == 7",
        "apply":"toNumberName(partNum(num, 6,7)) + ' lakh'"
    },
    {
        "condition":"(totalDigits == 8 || totalDigits == 9) && partNum(num,1,7) != 0 ",
        "apply":"toNumberName(partNum(num, 8,9)) + ' Crore ' + toNumberName(partNum(num,1,7))"
    },
    {
        "condition":"totalDigits == 8 || totalDigits == 9",
        "apply":"toNumberName(partNum(num, 8,9)) + ' Crore'"
    }
];  



var map = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety"
};

//partNum(987,1) => 7
//partNum(987,2) => 8
//partNum(987,3) => 9
//partNum(987, 1,2) => 87 //same result for partNum(987,2,1)
//partNum(987, 2,3) => 98
//partNum(987,1,3) => 987
function partNum(num, startDigit, endDigit){
    var numStr = num.toString();
    var numDigits = numStr.length;
    if(endDigit == undefined){
        return Number(numStr[numDigits - startDigit]);
    }else{

        if(startDigit > endDigit){
            var temp = endDigit;
            endDigit = startDigit;
            startDigit = temp;
        }

        var retStrArr = [];
        for(var i = startDigit; i <= endDigit; i++){
            retStrArr.push(numStr[numDigits - i])
        }
        return Number(retStrArr.reverse().join(""));
    }
}

var result = toNumberName(12398359);
console.log("\n\n\nConvertion Successful\n" + result);

function toNumberName(num){
    num = Number(num);//omitting pre zeros 0123 => 123
    var totalDigits = num.toString().length;
    for(var i = 0;i < allConditions.length; i++){
        console.log('--- Condition '+ i +  ' ---');
        console.log("Evaluation : " + allConditions[i].condition);
        console.log("Result : " + eval(allConditions[i].condition));
        if(eval(allConditions[i].condition)){
            return eval(allConditions[i].apply)
        }
        console.log('\n\n');
    }
}




