package assignment_3;

public class Question14 {
    public static void isBinary(int number) {
        int reminder = 0, duplicateNumber = number;
        boolean isBinary = true;
        while (number != 0) {
            reminder = number % 10;
            number /= 10;
            if (reminder != 1 && reminder != 0) {
                isBinary = false;
                break;
            }
        }
        if (isBinary) {
            System.out.println(duplicateNumber + " is a binary number!!");
        } else {
            System.out.println(duplicateNumber + " is not a binary number!!");
        }
    }

    public static void main(String[] args) {
        isBinary(10901);
        isBinary(10101);
    }
}

// Output
// 10901 is not a binary number!!
// 10101 is a binary number!!