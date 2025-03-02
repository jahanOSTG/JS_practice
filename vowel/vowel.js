var letter= prompt("Enter the Letter :");
letter= letter. toLowerCase()

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("The letter is vowel");
        break;

    default:
            document.write("The letter is consonant");
    }