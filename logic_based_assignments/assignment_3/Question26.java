// Q.26.Write a program to print this pattern:
// output 
// +                                                                                                                                  
// +  +                                                                                                                               
// +    +                                                                                                                             
// + $  $  +                                                                                                                         
//            + -  -   +                                                                                                                 
//              +      +                                                                                                                   
//                 +   +                                                                                                                   
//                     +
package assignment_3;

public class Question26 {
    public static void main(String[] args) {

        for (int r = 1; r <= 8; r++) {
            for (int c = 1; c <= 8; c++) {
                if (r == 4 && (c == 2 || c == 3)) {
                    System.out.print("$ ");
                } else if (r == 5 && (c == 6 || c == 7)) {
                    System.out.print("- ");
                } else if (c == 1 && r < 5) {
                    System.out.print("+ ");
                } else if (r == c) {
                    System.out.print("+ ");
                } else if (c == 8 && r > 4) {
                    System.out.print("+ ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

}
