// Q.20 Write given number in words
package assignment_3;

public class Question20 {
    public static void main(String[] args) {
        Integer givenNumber = 1914;
        String output = "";
        String numberString = givenNumber.toString();
        for (int i = 0; i < numberString.length(); i++) {
            Character currChar = numberString.charAt(i);
            String currStringChar = currChar.toString();
            if (currStringChar.equals("1") && i < numberString.length() - 2) {
                output += "one ";
            } else if (currStringChar.equals("2") && i < numberString.length() - 2) {
                output += "two ";
            } else if (currStringChar.equals("3") && i < numberString.length() - 2) {
                output += "three ";
            } else if (currStringChar.equals("4") && i < numberString.length() - 2) {
                output += "four ";
            } else if (currStringChar.equals("5") && i < numberString.length() - 2) {
                output += "five ";
            } else if (currStringChar.equals("6") && i < numberString.length() - 2) {
                output += "six ";
            } else if (currStringChar.equals("7") && i < numberString.length() - 2) {
                output += "seven ";
            } else if (currStringChar.equals("8") && i < numberString.length() - 2) {
                output += "eight ";
            } else if (currStringChar.equals("9") && i < numberString.length() - 2) {
                output += "nine ";
            } else if (i == numberString.length() - 2) {

                Character nextChar = numberString.charAt(i + 1);
                String nextStringChar = nextChar.toString();

                if (currStringChar.equals("1")) {
                    if (nextStringChar.equals("1")) {
                        output += "eleven ";
                        break;
                    } else if (nextStringChar.equals("2")) {
                        output += "twelve ";
                        break;
                    } else if (nextStringChar.equals("3")) {
                        output += "therteen ";
                        break;
                    } else if (nextStringChar.equals("4")) {
                        output += "fourteen ";
                        break;
                    } else if (nextStringChar.equals("5")) {
                        output += "fifteen ";
                        break;
                    } else if (nextStringChar.equals("6")) {
                        output += "sixteen ";
                        break;
                    } else if (nextStringChar.equals("7")) {
                        output += "seventeen ";
                        break;
                    } else if (nextStringChar.equals("8")) {
                        output += "eighteen ";
                        break;
                    } else if (nextStringChar.equals("9")) {
                        output += "nighteen ";
                        break;
                    }
                } else if (currStringChar.equals("2")) {
                    output += "twenty ";
                } else if (currStringChar.equals("3")) {
                    output += "thirty ";
                } else if (currStringChar.equals("4")) {
                    output += "fourty ";
                } else if (currStringChar.equals("5")) {
                    output += "fifty ";
                } else if (currStringChar.equals("6")) {
                    output += "sixty ";
                } else if (currStringChar.equals("7")) {
                    output += "seventy ";
                } else if (currStringChar.equals("8")) {
                    output += "eighty ";
                } else if (currStringChar.equals("9")) {
                    output += "nighty ";
                }
            }
            if (i == 0) {
                output += "thousand ";
            } else if (i == 1) {
                output += "hundred ";
            }

            if (i == numberString.length() - 1) {
                if (currStringChar.equals("1")) {
                    output += "one ";
                } else if (currStringChar.equals("2")) {
                    output += "two ";
                } else if (currStringChar.equals("3")) {
                    output += "three ";
                } else if (currStringChar.equals("4")) {
                    output += "four ";
                } else if (currStringChar.equals("5")) {
                    output += "five ";
                } else if (currStringChar.equals("6")) {
                    output += "six ";
                } else if (currStringChar.equals("7")) {
                    output += "seven ";
                } else if (currStringChar.equals("8")) {
                    output += "eight ";
                } else if (currStringChar.equals("9")) {
                    output += "nine ";
                }

            }
        }
        System.out.println(output);

    }
}
// Output
// one thousand nine hundred fourteen

// Note : this program is valid only for 4 digit numbers