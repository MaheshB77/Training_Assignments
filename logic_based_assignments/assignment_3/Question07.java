// Q.7 Write a program to find common elements between two arrays.
package assignment_3;

import java.util.HashSet;

public class Question07 {
    public static void findCommon(int[] arr1, int[] arr2) {
        HashSet<Integer> commonValues = new HashSet<Integer>();
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    commonValues.add(arr1[i]);
                }
            }
        }
        System.out.println("Common elements are : ");
        System.out.println(commonValues.toString());
    }

    public static void main(String[] args) {
        findCommon(new int[] { 4, 5, 1, 2, 7 }, new int[] { 7, 1, 3, 0, 8 });
    }
}

// Output
// Common elements are :
// [1, 7]