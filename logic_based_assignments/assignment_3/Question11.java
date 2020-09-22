// Q.11 Write a program to check the given number is a prime number or not?
package assignment_3;

public class Question11 {
    public static void main(String[] args) {
        int givenNumber = 23;
        boolean isPrime = true;
        for (int i = 2; i < givenNumber; i++) {
            if (givenNumber % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            System.out.println(givenNumber + " is a prime number!!");
        } else {
            System.out.println(givenNumber + " is not a prime number!!");
        }
    }
}
// Output
// 23 is a prime number!!