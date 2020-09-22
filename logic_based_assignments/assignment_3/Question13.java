// Q.13 Write a program to convert binary to decimal number.
package assignment_3;

public class Question13 {

    public static void binaryToDecimal(int binaryNumber) {
        int reminder = 0, decimalNumber = 0, base = 1, binaryCopy = binaryNumber;
        while (binaryNumber != 0) {
            reminder = binaryNumber % 10;
            decimalNumber += reminder * base;
            base *= 2;
            binaryNumber /= 10;
        }
        System.out.println(binaryCopy + " is converted into decimal " + decimalNumber);

    }

    public static void main(String[] args) {
        binaryToDecimal(1101);
    }
}
// Output
// 1101 is converted into decimal 13