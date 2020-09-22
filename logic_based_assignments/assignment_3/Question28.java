// Q.28 Write a program to print this number pattern:
// 1
// 2   12  
// .     .    23 
// .     .     .
// .     .     .       .
// .      .     .      .    99
// 10  20   30  .   .  .      100
package assignment_3;

public class Question28 {
    public static void main(String[] args) {
        int temp = 0;
        for (int r = 1; r <= 10; r++) {
            temp = r;
            for (int c = 1; c <= r; c++) {
                System.out.print(temp + "\t");
                temp += 10;
            }
            System.out.println();
            System.out.println();
        }

    }

}

// Output
// 1

// 2 12

// 3 13 23

// 4 14 24 34

// 5 15 25 35 45

// 6 16 26 36 46 56

// 7 17 27 37 47 57 67

// 8 18 28 38 48 58 68 78

// 9 19 29 39 49 59 69 79 89

// 10 20 30 40 50 60 70 80 90 100