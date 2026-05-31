
//1
function reverse(s)
{
    var reversed = 0;
    while (s != 0) {
        var digit = s % 10;
        reversed = reversed * 10 + digit;
        s = Math.floor(s / 10);
    }
    return reversed;

}

console.log("1 -> " + reverse(32243))

//2
function isPalindrome(s){
    var reversed = s.split('').reverse().join('');
    return s === reversed;
}

console.log("2 -> " + isPalindrome("nurse"));

//3
function allCombinations(s){

    var combinations = [];
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            combinations.push(s.slice(i, j));
        }
    }

    return combinations;
}

console.log("3 -> " + JSON.stringify(allCombinations("dog")));

//4
function stringSort(s){
    return s.split('').sort().join('');
} 

console.log("4 -> " + stringSort("webmaster"));

//5
function upperFirstLetter(s){

    for(let i = 1; i <=s.length; i++){

        if(s[i-1] === " "){
            s[i] = s[i].toUpperCase();
        }
    }

    return s;
}

console.log("5 -> " + upperFirstLetter("the quick brown fox"));

//6
function longestWord(s){

    var current = "";
    var longest = "";
    for(let i = 0; i < s.length; i++){

        if(s[i] === " "){
            if(current.length > longest.length){
                longest = current;
            }
            
            current = "";
        }
        else{
            current += s[i];
        }
    }

    if(current.length > longest.length){
        longest = current;
    }

    return longest;
}

console.log("6 -> " + longestWord("Web Development Tutorial"));

//7
function vowelCount(s){

    var count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
            count++;
        }
    }

    return count;
}

console.log("7 -> " + vowelCount("The quick brown fox"));

//8
function isPrime(n){

    if(n <= 1){
        return false;
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;
}

console.log("8 -> " + isPrime(13));

//9
function typeOf(value){

    return typeof value;
}

console.log("9 -> " + typeOf(true));

//10
function identityMatrix(n){

    var matrix = [];
    for(let i = 0; i < n; i++){
        matrix[i] = [];
        for(let j = 0; j < n; j++){
            if(i === j){
                matrix[i][j] = 1;
            }
            else{
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

console.log("10 -> " + JSON.stringify(identityMatrix(4)));

//11
function secondLowestAndGreatest(arr){

    arr.sort(function(a, b){return a - b});
    var secondLowest = arr[1];
    var secondGreatest = arr[arr.length - 2];

    return [secondLowest, secondGreatest];
}

console.log("11 -> " + JSON.stringify(secondLowestAndGreatest([1, 2, 3, 4, 5])));


//12
function perfectNumber(n){

    var sum = 0;
    for(let i = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        }
    }

    return sum === n;
}

console.log("12 -> " + perfectNumber(28));

//13
function factors(n){

    var factors = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }

    return factors;
}

console.log("13 -> " + JSON.stringify(factors(28)));

//14
function amountToCoins(amount, coins){

    var result = [];
    for(let i = 0; i < coins.length; i++){
        while(amount >= coins[i]){
            result.push(coins[i]);
            amount -= coins[i];
        }
    }

    return result;
}

console.log("14 -> " + JSON.stringify(amountToCoins(46, [25, 10, 5, 2, 1])));

//15
function power(base, exponent){

    var result = 1;
    for(let i = 0; i < exponent; i++){
        result *= base;
    }

    return result;
}

console.log("15 -> " + power(2, 3));


//16
function uniqueCharacters(s){

    var unique = "";
    let charSet = new Set();

    for(let i = 0; i < s.length; i++){
        if(!charSet.has(s[i])){
            unique += s[i];
            charSet.add(s[i]);
        }
    }

    return unique;
}

console.log("16 -> " + uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

//17
function charFrequency(s){

    var frequency = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            continue;
        }
        else if(frequency[s[i]]){
            frequency[s[i]]++;
        }
        else{
            frequency[s[i]] = 1;
        }
    }

    return frequency;
}


console.log("17 -> " + JSON.stringify(charFrequency("hello world")));


//18
function binarySearch(arr, target){

    var left = 0;
    var right = arr.length - 1;

    while(left <= right){
        var mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return -1;
}

console.log("18 -> " + binarySearch([1, 2, 3, 4, 5], 3));

//19
function largerNumbers(arr,num){

    var larger = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            larger.push(arr[i]);
        }
    }

    return larger;
}

console.log("19 -> " + JSON.stringify(largerNumbers([1, 3, 5, 7, 9], 4)));


//20
function randomString(length){  
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log("20 -> " + randomString(10));

//21
function getSubsets(arr, subsetLength) {
    const result = [];
  
    function add(start, combo) {
      if (combo.length === subsetLength) {
        result.push([...combo]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        combo.push(arr[i]);
        add(i + 1, combo);
        combo.pop();
      }
    }
  
    add(0, []);
    return result;
  }
  
console.log("21->" + JSON.stringify(getSubsets([1, 2, 3], 2)));
  


//22
function countOccurrences(s, value){

    var count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === value){
            count++;
        }
    }

    return count;
}

console.log("22 -> " + countOccurrences("microsoft.com", 'm'));

//23
function firstNonRepeatedCharacter(s){

    var charCount = {};
    for(let i = 0; i < s.length; i++){
        if(charCount[s[i]]){
            charCount[s[i]]++;
        }
        else{
            charCount[s[i]] = 1;
        }
    }

    for(let i = 0; i < s.length; i++){
        if(charCount[s[i]] === 1){
            return s[i];
        }
    }

    return null;
}

console.log("23 -> " + firstNonRepeatedCharacter("abacddbec"));

//24
function bubbleSort(arr){

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log("24 -> " + JSON.stringify(bubbleSort([64, 34, 25, 12, 22, 11, 90])));

//25
function longestCountryName(countries){

    var longest = "";
    for(let i = 0; i < countries.length; i++){
        if(countries[i].length > longest.length){
            longest = countries[i];
        }
    }

    return longest;
}

console.log("25 -> " + longestCountryName(["Australia", "Germany", "United States of America"]));

//26
function LongestWithoutRepeatingCharacters(s){

    var longest = "";
    var current = "";
    let charSet = new Set();

    for(let i = 0; i < s.length; i++){
        if(!charSet.has(s[i])){
            current += s[i];
            charSet.add(s[i]);
        }
        else{
            if(current.length > longest.length){
                longest = current;
            }
            current = s[i];
            charSet.clear();
            charSet.add(s[i]);
        }
    }

    if(current.length > longest.length){
        longest = current;
    }

    return longest;

 
}

console.log("26 -> " + LongestWithoutRepeatingCharacters("Mosaad Ahmed"));

//27
function longestPalindrome(s){
    
    var longest = "";   
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            var substring = s.slice(i, j);
            if(isPalindrome(substring) && substring.length > longest.length){
                longest = substring;
            }
        }
    }

    return longest;
}

console.log("27 -> " + longestPalindrome("babad"));

//28
function javascriptFunctionAsParameter(){
    function greet(name){
        return "Hello, " + name + "!";
    }

    function processUserInput(callback){
        var name = "Mosaad";
        return callback(name);
    }

    return processUserInput(greet);
}

console.log("28 -> " + javascriptFunctionAsParameter());

//29
function functionNameAsString(func){
    return func.name;
}

function exampleFunction(){}

console.log("29 -> " + functionNameAsString(exampleFunction));
