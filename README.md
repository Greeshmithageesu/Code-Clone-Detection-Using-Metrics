# Cross_Language_Code_Clone_Detection

1. Commands to get Java Intermediate Code Generation
    <code>
      lex lex1.l
      yacc -d java-yacc.y
      gcc lex.yy.c y.tab.c -ly -ll
      ./a.out < ex.java > icg.txt
    </code>
  
2. Commands to get C Intermediate Code Generation
    <code>
      yacc -d -v lexer.y
      lex parser.l
      gcc -ll -w y.tab.c
      ./a.out<input1.c
    </code>
