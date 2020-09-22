// Q.22 .Write a program to accept 3 numbers n1, n2 and n3. Check these numbers are between 259 to 599 and print "All present"
//  if all present in the range otherwise status of each start from n1 to n3 like this:
//  n1 present
//  n2 not present
//  n3 present
package assignment_3;

import java.util.Scanner;

public class Question22 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three numbers : ");
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int n3 = sc.nextInt();
        String n1Result = (n1 > 259 && n1 < 599) ? "n1 present" : "n1 not present";
        String n2Result = (n2 > 259 && n2 < 599) ? "n2 present" : "n2 not present";
        String n3Result = (n3 > 259 && n3 < 599) ? "n3 present" : "n3 not present";
        if (n1Result.equals("n1 present") && n2Result.equals("n2 present") && n3Result.equals("n3 present")) {
            System.out.println("All present");
        } else {
            System.out.println(n1Result);
            System.out.println(n2Result);
            System.out.println(n3Result);
        }
        sc.close();
    }
}
// Output
// Enter three numbers :
// 300
// 400
// 700
// n1 present
// n2 present
// n3 not present