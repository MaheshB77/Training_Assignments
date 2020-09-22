// Q.16 Write a program for Insertion Sort in c.
package assignment_3;

import java.util.Arrays;

public class Question16 {
    public static void main(String[] args) {
        int intArr[] = { 2, 4, 0, 1, 4, 7, 1, 8 };
        int temp = 0, j = 0;

        System.out.print("Array before sorting : ");
        System.out.print(Arrays.toString(intArr));
        System.out.println();
        for (int i = 1; i < intArr.length; i++) {
            temp = intArr[i];
            j = i - 1;

            while (j >= 0 && intArr[j] > temp) {
                intArr[j + 1] = intArr[j];
                j = j - 1;
            }
            intArr[j + 1] = temp;
        }
        System.out.print("Array after sorting : ");
        System.out.print(Arrays.toString(intArr));
    }
}

// Output
// Array before sorting : [2, 4, 0, 1, 4, 7, 1, 8]
// Array after sorting : [0, 1, 1, 2, 4, 4, 7, 8]
