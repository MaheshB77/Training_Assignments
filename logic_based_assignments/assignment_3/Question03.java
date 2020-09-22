// Q.3 Write a program to convert decimal number to binary format.
package assignment_3;

public class Question03 {

    public static StringBuffer decimalToBinary(int decimalNumber) {
        StringBuffer toBinary = new StringBuffer("");
        while (decimalNumber != 0) {
            if (decimalNumber % 2 == 0) {
                toBinary.append("0");
            } else {
                toBinary.append("1");
            }
            decimalNumber /= 2;
        }

        return toBinary.reverse();
    }

    public static void main(String[] args) {
        System.out.println(decimalToBinary(17));
    }
}
/*
 * Output : 10001
 */