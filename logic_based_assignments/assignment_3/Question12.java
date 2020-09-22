// Q.12 Write a program to find the given number is Armstrong number or not?
package assignment_3;

public class Question12 {
    public static void main(String[] args) {
        int givenNumber = 370;
        int temp = givenNumber;
        int reminder = 0, result = 0;
        while (givenNumber != 0) {
            reminder = givenNumber % 10;
            result += (reminder * reminder * reminder);
            givenNumber /= 10;
        }
        if (temp == result) {
            System.out.println(temp + " is an Armstrong number!!");
        } else {
            System.out.println(temp + " is not an Armstrong number!!");
        }
    }

}
// Output :
// 370 is an Armstrong number!!