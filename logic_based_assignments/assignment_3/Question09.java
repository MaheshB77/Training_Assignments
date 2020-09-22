// Q.9 Write a program to print fibonacci series.
package assignment_3;

public class Question09 {
    public static void main(String[] args) {
        int fiboUpto = 10;
        int num1 = 0, num2 = 1, next = 1;

        System.out.print("First " + fiboUpto + " fibonacci numbers are : ");
        while (fiboUpto != 0) {
            System.out.print(num1 + " ");
            next = num1 + num2;
            num1 = num2;
            num2 = next;

            fiboUpto--;
        }
    }

}

// Output
// First 10 fibonacci numbers are : 0 1 1 2 3 5 8 13 21 34
