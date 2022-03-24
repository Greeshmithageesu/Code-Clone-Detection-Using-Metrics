# Cross_Language_Code_Clone_Detection

1. Commands to get Java Intermediate Code Generation
   ```
      lex lex1.l
      yacc -d java-yacc.y
      gcc lex.yy.c y.tab.c -lfl -ll 
      ./a.out < ex.java > icg.txt
    ```
  
2. Commands to get C Intermediate Code Generation
    ```
      yacc -d -v parser.y
      lex lexer.l
      gcc y.tab.c -ll -w
      ./a.out < input1.c
    ```
