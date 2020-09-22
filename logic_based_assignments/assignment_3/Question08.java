// Q.8 How to swap two numbers without using temporary variable?
package assignment_3;

public class Question08 {
    public static void main(String[] args) {
        int num1 = 90, num2 = 10;
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
        System.out.println("Swapped numbers are : ");
        System.out.println(num1 + " " + num2);
    }

}

// Output :
// Swapped numbers are :
// 10 90