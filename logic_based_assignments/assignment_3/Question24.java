// Q.24 Print numbers from 1 to 500, print numbers in rows like this
//  For odd row print (5 + row number) numbers
//  For even row print 4 number
//  Ex.:
//  1 2 3 4 5 6
//  7 8 9 10
//  11 12 13 14 151 16 17 18
//  19 20 21 22
package assignment_3;

public class Question24 {
    public static void main(String[] args) {
        int row = 1;
        int count = 1;
        for (int i = 1; i <= 500; i++) {
            if (row % 2 == 0) {
                for (int j = 1; j <= 4; j++) {
                    System.out.print(count + " ");
                    i++;
                    count++;
                }
                row++;
                System.out.println();
            } else {
                for (int j = 1; j <= (5 + row); j++) {
                    System.out.print(count + " ");
                    i++;
                    count++;
                }
                row++;
                System.out.println();
            }
        }

    }

}