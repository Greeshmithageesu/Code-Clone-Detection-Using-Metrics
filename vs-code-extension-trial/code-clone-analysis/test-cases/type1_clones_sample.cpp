/* This sample will test type-1 clones
Type-1: Clones with just additional comments and spaces */

#include <stdio.h>

/* Test for multi-line comments */
int cp_main()
{
	int a = 1;
	int b = 2;
	int c = a + b;

	printf("%d", c);
	return 0;
}

int add(int a, int b)
{
	// This function adds two integers and returns the result
	return a + b;
}

int cp_add(int a, int b)
{
	return a + b;
}

// Test for single line comments
int main()
{
	int a = 1;
	int b = 2;
	int c = a + b;
	printf("%d", c);
	return 0;
}