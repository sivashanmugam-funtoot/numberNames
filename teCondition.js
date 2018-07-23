var allConditions =[
    {
        "condition":"num == 0",
        "apply" : "String('సున్న')"
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
        "condition":"totalDigits == 2 && num % 10 == 0", //30,40..90
        "apply":"map[num]"
    },
    {
        "condition":"totalDigits == 2",//21 TO 99
        "apply":"map[partNum(num, 2)*10] + map[partNum(num,1)]"
    },
    {
        "condition":"totalDigits == 3 && partNum(num,1,2) != 0 && partNum(num,3) != 1",//2**, 3**
        "apply":"map[partNum(num, 3)] + 'వందల ' + numToWords(partNum(num,1,2))"
    },
    {
        "condition":"totalDigits == 3 && partNum(num,1,2) != 0 && partNum(num,3) == 1",//1**
        "apply":"'నూట ' + numToWords(partNum(num,1,2))"
    },
    {
        "condition":"totalDigits == 3 && partNum(num,3) != 1",//200, 300 ..
        "apply":"map[partNum(num, 3)] + 'వందలు'"
    },
    {
        "condition":"num == 100",
        "apply":"'నూరు'"
    },
    {
        "condition":"num == 1000",
        "apply":"'వెయ్యి'"
    },
    {
        "condition":"num > 1000 && num < 1999",
        "apply":"'వెయ్యి ' + numToWords(partNum(num, 1,3))"
    },
    //en-US
    {
        "condition":"numSysType == 'en-US' && (num >=2000  && num <= 999999) && partNum(num, 4) == 1 && partNum(num, 5) > 1  && partNum(num,1,3) == 0 ", //51000, 31000 .. 551000
        "apply":"numToWords(partNum(num, 5,6) * 10) + 'ఒక' + 'వేలు'"  
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000  && num <= 999999) && partNum(num,1,3) == 0 ", //2000, 3000 .. except 51000, 61000, 561000
        "apply":"numToWords(partNum(num, 4,6)) + 'వేలు'"
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000  && num <= 999999) && partNum(num, 4) == 1 && partNum(num, 5) > 1", //51***, 671***
        "apply":"numToWords(partNum(num, 5,6) * 10) + 'ఒక' + 'వేల ' + numToWords(partNum(num, 1,3))"
    },
    {
        "condition":"numSysType == 'en-US' && num >=2000  && num <= 999999", //2***, 45***, 543***
        "apply":"numToWords(partNum(num, 4,6)) + 'వేల ' + numToWords(partNum(num, 1,3))"
    },
    // en-IN
    {
        "condition":"(num >=2000  && num <= 99999) && partNum(num, 4) == 1 && partNum(num, 5) > 1  && partNum(num,1,3) == 0 ", //51000, 31000 ..
        "apply":"numToWords(partNum(num, 5) * 10) + 'ఒక' + 'వేలు'"  
    },
    {
        "condition":"(num >=2000  && num <= 99999) && partNum(num,1,3) == 0 ", //2000, 3000 ..
        "apply":"numToWords(partNum(num, 4,5)) + 'వేలు'"
    },
    {
        "condition":"(num >=2000  && num <= 99999) && partNum(num, 4) == 1 && partNum(num, 5) > 1",
        "apply":"numToWords(partNum(num, 5) * 10) + 'ఒక' + 'వేల ' + numToWords(partNum(num, 1,3))"
    },
    {
        "condition":"num >=2000  && num <= 99999",
        "apply":"numToWords(partNum(num, 4,5)) + 'వేల ' + numToWords(partNum(num, 1,3))"
    },
    //en-US
    {
        "condition":"numSysType == 'en-US' && num == 1000000",//million
        "apply":"'మిలియన్'"
    },
    {
        "condition":"numSysType == 'en-US' && num > 1000000 && num < 1999999",
        "apply":"'మిలియన్ ' + numToWords(partNum(num, 1,6))"
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000000  && num <= 999999999) && partNum(num, 7) == 1 && partNum(num, 8) > 1  && partNum(num,1,6) == 0 ", //521MILLION, 61MILLION .. 
        "apply":"numToWords(partNum(num, 8,9) * 10) + 'ఒక' + 'మిలియన్'"  
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000000  && num <= 999999999) && partNum(num, 7) == 1 && partNum(num, 8) > 1", //521MILLION <<something>>, 61MILLION<<something>> .. 
        "apply":"numToWords(partNum(num, 8,9) * 10) + 'ఒక' + 'మిలియన్ ' + numToWords(partNum(num,1,6))"  
    },
    {
        "condition":"numSysType == 'en-US' && (num >= 2000000  && num <= 999999999) && partNum(num,1,6) == 0 ", //200000, 300000 ..
        "apply":"numToWords(partNum(num, 7,9)) + 'మిలియన్లు'"
    },
    {
        "condition":"numSysType == 'en-US' && num >= 2000000  && num <= 999999999",
        "apply":"numToWords(partNum(num, 7,9)) + 'మిలియన్ల ' + numToWords(partNum(num, 1,6))"
    },
    //en-IN
    {
        "condition":"num == 100000",
        "apply":"'లక్ష'"
    },
    {
        "condition":"num > 100000 && num < 199999",
        "apply":"'లక్ష ' + numToWords(partNum(num, 1,5))"
    },
    {
        "condition":"(num >=200000  && num <= 9999999) && partNum(num,1,5) == 0 ", //200000, 300000 ..
        "apply":"numToWords(partNum(num, 6,7)) + 'లక్షలు'"
    },
    {
        "condition":"num >=200000  && num <= 9999999",
        "apply":"numToWords(partNum(num, 6,7)) + 'లక్షల ' + numToWords(partNum(num, 1,5))"
    },
    //en-US
    {
        "condition":"numSysType == 'en-US' && num == 1000000000",
        "apply":"'బిలియన్'"
    },
    {
        "condition":"numSysType == 'en-US' && num > 1000000000 && num < 1999999999",
        "apply":"'బిలియన్ ' + numToWords(partNum(num, 1,9))"
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000000000  && num <= 999999999999) && partNum(num, 10) == 1 && partNum(num, 11) > 1  &&  partNum(num,1,9) == 0 ", //521MILLION, 61MILLION .. 
        "apply":"numToWords(partNum(num, 11,12) * 10) + 'ఒక' + 'బిలియన్'"  
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000000000  && num <= 999999999999) && partNum(num, 10) == 1 && partNum(num, 11) > 1", //521MILLION <<something>>, 61MILLION<<something>> .. 
        "apply":"numToWords(partNum(num, 11,12) * 10) + 'ఒక' + 'బిలియన్ ' + numToWords(partNum(num,1,9))"  
    },
    {
        "condition":"numSysType == 'en-US' && (num >=2000000000  && num <= 999999999999) && partNum(num,1,9) == 0 ", 
        "apply":"numToWords(partNum(num, 10,12)) + 'బిలియన్లు'"
    },
    {
        "condition":"numSysType == 'en-US' && num >= 2000000000  && num <= 999999999999",
        "apply":"numToWords(partNum(num, 10,12)) + 'బిలియన్ల ' + numToWords(partNum(num, 1,9))"
    },
    //en-IN
    {
        "condition":"num == 10000000",
        "apply":"'కోటి'"
    },
    {
        "condition":"num > 10000000 && num < 19999999",
        "apply":"'కోటి ' + numToWords(partNum(num, 1,7))"
    },
    {
        "condition":"(num >=20000000  && num <= 999999999) && partNum(num,1,7) == 0 ", //200000, 300000 ..
        "apply":"numToWords(partNum(num, 8,9)) + 'కోట్లు'"
    },
    {
        "condition":"num >=20000000  && num <= 999999999",
        "apply":"numToWords(partNum(num, 8,9)) + 'కోట్ల ' + numToWords(partNum(num, 1,7))"
    },
];  


var map = {
    1: "ఒకటి",
    2: "రెండు",
    3: "మూడు",
    4: "నాలుగు",
    5: "అయిదు",
    6: "ఆరు",
    7: "ఏడు",
    8: "ఎనిమిది",
    9: "తొమ్మిది",
    10: "పది",
    11: "పదకొండు",
    12: "పన్నెండు",
    13: "పదమూడు",
    14: "పద్నాలుగు",
    15: "పదిహేను",
    16: "పదహారు",
    17: "పదిహేడు",
    18: "పద్దెనిమిది",
    19: "పందొమ్మిది",
    20: "ఇరవై",
    30: "ముప్పై",
    40: "నలభై",
    50: "యాభై",
    60: "అరవై",
    70: "డెబ్బై",
    80: "ఎనభై",
    90: "తొంబై"
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
var unique = 1;
var result = numToWords(1000);
var numSysType = 'en-US';
console.log("\n\n\nConvertion Successful\n" + result);



function numToWords(num){
    num = Number(num);//omitting pre zeros 0123 => 123
    var totalDigits = num.toString().length;
    for(var i = 0;i < allConditions.length; i++){
        // console.log('--- Condition '+ i +  ' ---');
        // console.log("Evaluation : " + allConditions[i].condition);
        // console.log("Result : " + eval(allConditions[i].condition));
        if(eval(allConditions[i].condition)){
            return eval(allConditions[i].apply)
        }
        // console.log('\n\n');
    }
}


var input = ["100",
"25",
"45",
"51",
"99",
"101",
"111",
"191",
"211",
"67",
"123",
"150",
"200",
"300",
"345",
"301",
"310",
"390",
"500",
"1000",
"999",
"1001",
"1010",
"1011",
"1051",
"9999",
"1100",
"1013",
"1310",
"200",
"1300",
"1200",
"1301",
"1310",
"1390",
"1500",
"2000",
"2301",
"2310",
"2390",
"2500",
"9000",
"10000",
"10100",
"10010",
"11000",
"11456",
"11034",
"50000",
"50100",
"50010",
"51000",
"51456",
"51034",
"70890",
"100000",
"100010",
"100004",
"100013",
"100100",
"100033",
"100203",
"100210",
"1000000",
"1000006",
"1000016",
"1000024",
"1000200",
"1000203",
"1000100",
"1000256",
"1001256",
"10000000",
"10000001",
"10000010",
"11000203",
"11000100",
"11000256",
"11001256",
"10000000",
"10000001",
"10000010",
"10001000",
"10010000",
"67230443"];

var result = [];
for(var ind = 0; ind < input.length;ind++){

	    result.push({[input[ind]] : numToWords(input[ind])})
}
console.log(result)