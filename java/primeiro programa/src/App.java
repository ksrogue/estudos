import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        // String name = scanner.next();
        // var age = scanner.nextInt();
        // // um comentário
        // System.out.printf("My name is %s and I am %s years old!", name,  age);



        // System.out.println("Quanto é 2 + 2?");
        // var result = scanner.nextInt();
        // var isRight = result == 4;

        // System.out.printf("O resultado é 4, você acertou? (%s)", isRight);

        // System.out.println("Informe seu nome:");
        // var name = scanner.next();
        // System.out.println("Informe sua idade:");
        // var age = scanner.nextInt();

        // if (age >= 18) {
        //     System.out.printf("%s, você é de maior!", name);
        // } else {
        //     System.out.printf("%s, você é de menor!", name);
        // }

        // System.out.println("Informe um numero de 1 a 5");
        // var option = scanner.nextInt();

        // switch (option) {
        //     case 1:
        //         System.out.println("numero 1");
        //         break;
        //     case 2:
        //         System.out.println("numero 2");
        //         break;
        //     case 3:
        //         System.out.println("numero 3");
        //         break;
        //     case 4:
        //         System.out.println("numero 4");
        //         break;
        //     case 5:
        //         System.out.println("numero 5");
        //         break;
        //         case 6:
        //         System.out.println("numero inválido!");
        //         break;
        //     default:
        //         break;
        // }

        // for(var i = 0; i < 5; i++) {
        //     if(i % 2 == 0) {
        //         System.out.println(i + " Numero PAR");
        //     } else {
        //         System.out.println(i + " Numero IMPAR");
        //     }
            
        // }
        // var numero = 0;
        // var nome = "";

        // // while(numero <= 5) {
        // //     System.out.println(numero);
        // //     numero++;
        // // }
        // while(!nome.equalsIgnoreCase("david")) {
        //     System.out.println("Informe seu nome:");
        //     nome = scanner.next();
        //     System.out.println(nome);
        // }
        var numero = 0;
        System.out.println("Informe um numero de 0 a 10");
        numero = scanner.nextInt();

        if(numero < 0 || numero > 10) {
            System.out.println("Numero inválido.");
        } else {
            for(var i = 1; i <= 10; i++) {
                System.out.println(numero * i);
            }
        }


    }
}
