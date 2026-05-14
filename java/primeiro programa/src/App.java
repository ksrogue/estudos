import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        // String name = scanner.next();
        // var age = scanner.nextInt();
        // // um comentário
        // System.out.printf("My name is %s and I am %s years old!", name,  age);



        System.out.println("Quanto é 2 + 2?");
        var result = scanner.nextInt();
        var isRight = result == 4;

        System.out.printf("O resultado é 4, você acertou? (%s)", isRight);

    }
}
