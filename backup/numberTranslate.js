var fs = require('fs');
var _ = require("lodash")


function toNumberName(number, numberSystemType) {
    //Check if its really a number
    if (isFinite(number)) {
        var type = numberSystemType || 'en-IN';
        if ((number.toString().length < 10 && type == 'en-IN') || (number.toString().length < 13 && type == 'en-US')) {
            var tens = {
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
            var ones = {
                1: "One",
                2: "Two",
                3: "Three",
                4: "Four",
                5: "Five",
                6: "Six",
                7: "Seven",
                8: "Eight",
                9: "Nine"
            };
            var indianPlaceValues = ["", " thousand", " lakh", " crore"];
            var internationalPlaceValues = ["", " thousand", " million", " billion"];
            var type = numberSystemType || 'en-IN';
            var number = Number(number).toLocaleString(type);
            var placeValues = type == 'en-IN' ? indianPlaceValues : internationalPlaceValues;
            var tokens = number.split(',').reverse();
            var convertedWords = [];
            //Handle zero
            if (tokens.length == 1 && Number(tokens[0] == 0))
                return "Zero";
            else {
                for (var i = 0; i < tokens.length; i++) {
                    // converting to number removes any leading zeros.
                    var token = Number(tokens[i]).toString();
                    var word = "";

                    if (token.length == 0)
                        word = String.Empty;
                    else if (token.length == 1)
                        word = ones[token];
                    else if (token.length == 2) {
                        word = tens[token];
                        if (!word) {
                            var digit = token;
                            if (Number(token) > 0) {
                                word = ((tens[digit.toString().substring(0, 1) + "0"]) || "") + " " + ones[digit.toString().substring(1)];
                            } else
                                word = "";
                        }
                    } else {
                        var tensPlace = tens[token.substring(1, 3)];
                        if (!tensPlace) {
                            var digit = token.substring(1, 3);
                            if (Number(token.substring(1, 3)) > 0) {
                                tensPlace = ((tens[digit.toString().substring(0, 1) + "0"]) || "") + " " + ones[digit.toString().substring(1)];
                            } else
                                tensPlace = "";
                        }
                        word = ones[token.substring(0, 1)] + " hundred " + tensPlace;
                    }
                    if (word)
                        convertedWords.push(word + placeValues[i]);
                }
                convertedWords = convertedWords.reverse().join(" ");
                console.log(convertedWords);
                return convertedWords;
            }
        } else
            throw "Number not in range - Please provide a number within 99 crores or 999 billion"
    } else
        throw "Not a number - Please provide number"
}

fs.readFile('numberTranslate.json', function(err,data){
    var data = JSON.parse(data);
    var translated  = [];
    _.each(data.numbers, function(number){
        translated.push({[number]:toNumberNameTe(Number(number))})
    })

    // fs.writeFile('numberTranslateTranslated.json', JSON.stringify({'numbers':translated}), function(err){
    //     console.log(err)
    // })
})

function toNumberNameTe (number){
    var numberSystemType = "te";
    var tens = {
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
    var ones = {
        "0":{
            1: "ఒకటి",
            2: "రెండు",
            3: "మూడు",
            4: "నాలుగు",
            5: "అయిదు",
            6: "ఆరు",
            7: "ఏడు",
            8: "ఎనిమిది",
            9: "తొమ్మిది"
        },
        "1":{
            1: "ఒకటి",
            2: "రెండు",
            3: "మూడు",
            4: "నాలుగు",
            5: "అయిదు",
            6: "ఆరు",
            7: "ఏడు",
            8: "ఎనిమిది",
            9: "తొమ్మిది"
        }
        
    };
    var placeValues = {
        "0":{
            "1P":"", 
            "E1_P":"",
            "1P*":"",
            "E1_P":"" 
        },
        "1":{
            "1P":"వెయ్యి", //[P => Place (Here p mentions Thousand)]   When Exactly 1000
            "E1_P":"వేలు", //[Except 1] Except 1000, for 2000, 3000 ...,
            "1P*":"వెయ్యి", //[One Thousand And] 1***  
            "E1_P*":"వేల" //[Except 1, For Thousand And] Like 2***, 3*** ...
        },"2":{
            "1P":"లక్షలు", //[P => Place (Here p mentions Lack)]   When Exactly 100000
            "E1_P":"లక్షలు", //[Except 1] 
            "1P*":"లక్షలు", //[One Lack And] 
            "E1_P*":"లక్షల" //[Except 1, For Lack And] 
        },"3":{
            "1P":"కోట్లు", //[P => Place (Here p mentions Crore)]
            "E1_P":"ఒకకోట్లు", //[Except 1] 
            "1P*":"కోట్లు", //[One Crere And] 1
            "E1_P*":"కోట్ల" //[Except 1, For Crore And]
        },
    }

    var tokens = number.split(',').reverse();
    var convertedWords = [];
    //Handle zero
    if (tokens.length == 1 && Number(tokens[0] == 0))
        return "సున్న";
    else {
        for (var i = 0; i < tokens.length; i++) {
            // converting to number removes any leading zeros.
            var token = Number(tokens[i]).toString();
            var word = "";

            if (token.length == 0)
                word = String.Empty;
            else if (token.length == 1)
                word = ones[token];
            else if (token.length == 2) {
                word = tens[token];
                if (!word) {
                    var digit = token;
                    if (Number(token) > 0) {
                        word = ((tens[digit.toString().substring(0, 1) + "0"]) || "") +  ones[digit.toString().substring(1)];
                    } else
                        word = "";
                }
            } else {
                var tensPlace = tens[token.substring(1, 3)];
                if (!tensPlace) {
                    var digit = token.substring(1, 3);
                    if (Number(token.substring(1, 3)) > 0) {
                        //In English Twenty Three [has space between spaces] //In Telugu it is TwentyThree
                        tensPlace = ((tens[digit.toString().substring(0, 1) + "0"]) || "")  + ones[digit.toString().substring(1)];
                    } else
                        tensPlace = "";
                }
                var hundredsPlace;
                //The hundred Place Varies if tensPlace is empty (00) and 
                if(tensPlace == ""){
                    if(token.substring(0, 1) == "1")//hundred Place varies for [100] and [200, 300, 400 ...900]
                        hundredsPlace = "నూరు ";
                    else
                        hundredsPlace = ones[token.substring(0, 1)] + "వందలు ";
                }else{
                    if(token.substring(0, 1) == "1") //hundred Place varies for [1**] and [2**, 3**, 4** ...9**
                        hundredsPlace = "నూట ";
                    else
                        hundredsPlace = ones[token.substring(0, 1)] + "వందల ";
                }
                word = hundredsPlace + tensPlace;
            }

            if (word){
                //If there is already item in converted Word Then can assume it will not 1000 OR 100000 OR 100000
                if(convertedWords.length > 0){
                    if(Number(token) == 1){
                        convertedWords.push(placeValues[i]['1P*']);////Word Need not to be added here as it 1*** OR 1******, OR 1********
                    }else{
                        convertedWords.push(word + placeValues[i]['E1_P*']);
                    }
                }else{
                    if(Number(token) == 1){
                        if(i > 0){
                            convertedWords.push(placeValues[i]['1P']);//Word Need not to be added here as it exactly 1000 OR 100000, OR 10000000
                        }else{
                            convertedWords.push(word);
                        }
                        
                    }else{
                        convertedWords.push(word + placeValues[i]['E1_P']);
                    }
                }
            }
        }
        convertedWords = convertedWords.reverse().join(" ");
        return convertedWords;
    }
}