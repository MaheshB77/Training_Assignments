// Write a program to find top two maximum numbers in a array.
package assignment_3;

import java.util.Arrays;

public class Question06 {
    public static void findMaxTwo(int[] arr) {
        Arrays.sort(arr);
        System.out.printf("Max two numbers are : %d and %d", arr[arr.length - 1], arr[arr.length - 2]);
    }

    public static void main(String[] args) {
        findMaxTwo(new int[] { 2, 6, 1, 0, 3, 9 });

    }
}

// Output :
// Max two numbers are : 9 and 6
