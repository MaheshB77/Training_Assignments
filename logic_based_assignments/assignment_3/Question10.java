// Q.10 Write a program to find sum of each digit in the given number using recursion.
package assignment_3;

public class Question10 {
    public static int result = 0;
    public int reminder = 0;

    public void sum(int num) {
        if (num != 0) {
            reminder = num % 10;
            result += reminder;
            num /= 10;
            sum(num);
        } else {
            System.out.println("Sum is : " + result);
        }

    }

    public static void main(String[] args) {
        new Question10().sum(123);
    }
}

// Output
// Sum is : 6