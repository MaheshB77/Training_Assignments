// Q.15 Write a program for Bubble Sort.
package assignment_3;

import java.util.Arrays;

public class Question15 {
    public static void main(String[] args) {
        int arr[] = { 3, 7, 1, 3, 9, 0, 3 };
        int temp = 0;
        System.out.print("Array before sorting : ");
        System.out.print(Arrays.toString(arr));
        System.out.println();
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.print("Sorted array is : ");
        System.out.print(Arrays.toString(arr));
    }
}
// Output
// Array before sorting : [3, 7, 1, 3, 9, 0, 3]
// Sorted array is : [0, 1, 3, 3, 3, 7, 9]