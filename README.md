# Cross_Language_Code_Clone_Detection

1. Commands to get Java Intermediate Code Generation
    <code>
      lex lex1.l <br>
      yacc -d java-yacc.y <br>
      gcc lex.yy.c y.tab.c -ly -ll <br>
      ./a.out < ex.java > icg.txt <br>
    </code>
  
2. Commands to get C Intermediate Code Generation
    <code>
      yacc -d -v lexer.y <br>
      lex parser.l <br>
      gcc -ll -w y.tab.c <br>
      ./a.out<input1.c <br>
    </code>
