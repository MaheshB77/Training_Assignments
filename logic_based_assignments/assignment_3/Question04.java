// Q.4 Write a program to find perfect number or not.

package assignment_3;

public class Question04 {
    public static void isPerfectNumber(int number) {
        int sum = 0;
        for (int i = 1; i < number; i++) {
            if (number % i == 0) {
                sum += i;
            }

        }
        if (sum == number) {
            System.out.println(number + " Is a perfect number");
        } else {
            System.out.println(number + " Is not a perfect number");
        }

    }

    public static void main(String[] args) {
        isPerfectNumber(28);
        isPerfectNumber(10);
    }
}

// Output
// 28 Is a perfect number
// 10 Is not a perfect number