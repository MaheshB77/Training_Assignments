// Q.18 Write a program to remove duplicates from sorted array.
package assignment_3;

import java.util.Arrays;
import java.util.HashSet;

public class Question18 {
    public static void main(String[] args) {
        int sortedArray[] = { 0, 2, 3, 3, 4, 4, 6, 7, 7, 8 };
        HashSet<Integer> uniqueArray = new HashSet<Integer>();
        for (int number : sortedArray) {
            uniqueArray.add(number);
        }
        System.out.println("Sorted array with duplicate elements : " + Arrays.toString(sortedArray));
        System.out.println("Array after removing duplicates : " + uniqueArray);
    }
}

// Output
// Sorted array with duplicate elements : [0, 2, 3, 3, 4, 4, 6, 7, 7, 8]
// Array after removing duplicates : [0, 2, 3, 4, 6, 7, 8]