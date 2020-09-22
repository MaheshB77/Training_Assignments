// Q.25.Write a program to print this pattern:
//  if n = 6
//  *  *  *  *  *  *
//  *  *           *
//  *     *        *
//  *        *     *
//  *           *  *
//  *  *  *  *  *  *

package assignment_3;

import java.util.Scanner;

public class Question25 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value of n : ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n || i == j) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        sc.close();
    }
}
