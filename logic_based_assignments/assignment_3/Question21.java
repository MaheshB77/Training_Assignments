// Q.21 Sort the array of strings by the number inside it.
package assignment_3;

import java.util.LinkedList;

public class Question21 {
    public static void main(String[] args) {

        String arr[] = { "201 nilesh khude", "203 vijay joshi", "501 rahul kakade", "50 binoy samuel" };
        String dupArray[] = arr.clone();
        LinkedList<Integer> list = new LinkedList<Integer>();
        for (int i = 0; i < arr.length; i++) {
            Integer num = Integer.parseInt(arr[i].split(" ")[0]);
            list.add(num);
        }
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (list.get(i) > list.get(j)) {
                    String temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Input : ");
        for (String s : dupArray) {
            System.out.println(s);
        }
        System.out.println();
        System.out.println("Output : ");
        for (String s : arr) {
            System.out.println(s);
        }
    }
}

// Output
// Input :
// 201 nilesh khude
// 203 vijay joshi
// 501 rahul kakade
// 50 binoy samuel

// Output :
// 50 binoy samuel
// 201 nilesh khude
// 203 vijay joshi
// 501 rahul kakade