import java.util.Scanner;

class Logical2 {
    public static void main(String[] args) {
        // Question 1 answer
        question1();

        // Question 2 answer
        question2();

        // Question 3 answer
        question3();

        // Question 4 answer
        question4();

        // Question 5 answer
        question5();

    }

    static void question1() {
        System.out.println("*********** Question 1 ***********");
        System.out.println();
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

    }

    static void question2() {
        System.out.println();
        System.out.println("*********** Question 2 ***********");
        System.out.println();
        for (int r = 1; r <= 6; r++) {
            for (int c = 1; c <= 6; c++) {
                if (r == 1 || r == 6 || c == 1 || c == 6) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println("");
        }
    }

    static void question3() {

        System.out.println();
        System.out.println("*********** Question 3 ***********");
        System.out.println();

        int temp = 1;
        for (int i = 5; i <= 50; i += 5) {
            for (int j = i; j <= i * 2; j += temp) {
                System.out.print(j + "\t");
            }
            System.out.println();
            temp++;
        }
    }

    static void question4() {

        System.out.println();
        System.out.println("*********** Question 4 ***********");
        System.out.println();

        for (int r = 1; r <= 5; r++) {
            for (int c = 1; c <= 5; c++) {
                if (c == 1 || c == 5 || (c == r)) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

    static void question5() {

        System.out.println();
        System.out.println("*********** Question 5 ***********");
        System.out.println();

        for (int r = 1; r <= 5; r++) {
            for (int c = 1; c <= 5; c++) {
                if (r == 1 || r == 5 || c == 1 || c == 5 || c == r) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

}