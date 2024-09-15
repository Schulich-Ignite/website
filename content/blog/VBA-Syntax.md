---
title: General Syntax Visual Basic for Applications (VBA)
subtitle: Supercharging office apps
date: 2023-03-27T00:00:01-06:00
modified_date: ""
image: /img/blog/writing-on-laptop.jpg
authors: ["Brendan Smiley"]
tags:
  - vba
  - productivity
---
<a class="btn btn-secondary" href="https://schulichignite.com/blog/intro-to-vba">See previous post</a>

The goal of this blog post is to give an overview of VBA syntax and show some features of VBA's built-in code editor. Furthermore, this post will give a reference to use when programming in VBA. A list of boilerplates for different basic programming concepts is below.

## Print Statements
Print statements are one of the easiest ways to debug code and ensure certain sections of code are running. To use print statements in the built-in VBA code editor, the immediate window must be open to view the printing. To display the immediate window go to "View" > "Immediate Window", alternatively press "CTRL + G". To clear the immediate window, click on it and select everything (CTRL+A) and then press delete [^1]. To print to the immediate window use Debug.Print(). Alternatively, to display something in a pop-up window use MsgBox instead.
```vb
Sub Main()
    Debug.Print ("Hello World!") ' This will be visible in the Immediate Window
    MsgBox ("Hello World!") ' This will make a pop-up window.
End Sub
```

## Comments
To comment out multiple lines, the comment block button is required as there is only single-line comments^2. **To get the comment block button,  **the edit **toolbar** must be open.**** Right-click on the VBA ribbon, and check off edit. A new toolbar should now be floating, grab the toolbar a move it to the side like the following:

![Visual Basic Button](/img/blog/vba/EditToolBar.jpg)

Highlight all the lines to comment or uncomment and press the code block button in the edit toolbar.

```vb
Sub Main()
  '   Single Line Comment
    
  '   Multi-Line Comments
  '    Can be achieved
  '    Through the comment block button.
End Sub
```

## Variables and Variable Declaration
In VBA, it is required to declare variables. To declare a variable the keyword dim, a variable name and the variable type are required. Variable declaration for all the available data types looks like the following[^3] [^4]. 
```vb
'User-defined data type is declared differently
Type MyType
    CustomerName As String
    PaymentDue As Double
End Type

Sub Main()

  Dim myVariableName1 As Boolean
  Dim myVariableName2 As String ' For varible length strings
  Dim myVariableName3 As String * 10 'For a fixed-length strings
                                     ' (replace the 10 with the number of characters)
  Dim myVariableName4 As Integer
  Dim myVariableName5 As Double
  Dim myVariableName6 As Long
  Dim myVariableName7 As Byte
  Dim myVariableName8 As Date
  Dim myVariableName9 As Currency
  Dim myVariableName10 As Object
  Dim myVariableName11 As Variant ' If you dont assign the data type it will be variant.
  Dim VariantArray(99,99) ' 100 rows, 100 columns

End Sub

```
It should be noted that Dim declares the variable at the module level when declared in the module, and at a function level when declared inside a function.

To make a variable available to all procedures use the Public statement instead[^3].
```vb
Public myVariableName As Boolean
```
For more information on the available data types visit Microsoft's documentation page on [data types](https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/data-type-summary).

## Comparisons Operators

```vb
Sub Main()
  ' Declaring Variables
  Dim Var1 As Integer
  Dim Var2 As Integer

  ' Assigning Values
  Var1 = 10
  Var2 = 1000

  ' Printing the Boolean outputs from the Comparison Operators
  Debug.Print "Less Than Operator:   "; Var1 < Var2
  Debug.Print "Less Than or Equal To Operator:   "; Var1 <= Var2
  Debug.Print "Greater Than Operator:   "; Var1 > Var2
  Debug.Print "Greater Than or Equal To Operator:   "; Var1 >= Var2
  Debug.Print "Equal To Operator:   "; Var1 = Var2
  Debug.Print "Not Equal To Operator:   "; Var1 <> Var2

End Sub

' Immediate Window Output -------------------
' Less Than Operator:   True
' Less Than or Equal To Operator:   True
' Greater Than Operator:   False
' Greater Than or Equal To Operator:   False
' Equal To Operator:   False
' Not Equal To Operator:   True

```


A more detailed description of comparison operations in VBA can be found in Microsoft's Documentation page [Comparison operators](https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/comparison-operators) [^5].

## Logic Operators
[Operator Precedence](https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/operator-precedence) does matter in VBA and is very similar to Python's Operator Precedence. Pay extra attention to the Like logic operator as it is very powerful in both Word and Excel.

The following example is not exhaustive but shows some of the basic logic operators [^6]:
```vb
Sub Main()
  ' Declaring Variables
  Dim Var1 As Integer
  Dim Var2 As Integer

  ' Assigning Values
  Var1 = 10
  Var2 = 1000

  ' The Basic Operators
  Debug.Print "And Operator       "; Var1 < Var2 And Var1 = 10
  Debug.Print "Or Operator        "; Var1 > Var2 Or Var1 = 10
  Debug.Print "Not Operator       "; Not (Var1 > Var2)

  ' The Like Operator gets used often in Excel and Word VBA Applications. There are many different ways to compare strings, here are a few examples.
  Debug.Print "Like Operator Ex 1      "; "A" Like "[A-Z]"
  Debug.Print "Like Operator Ex 2      "; "Bob" Like "BobTheBuilder" & "*" ' The & "*" part will check for Zero or more characters
  Debug.Print "Like Operator Ex 2      "; "BobTheBuilder" Like "Bob" & "*"
End Sub

' Immediate Window Output -------------------
' And Operator       True
' Or Operator        True
' Not Operator       True
' Like Operator Ex 1      True
' Like Operator Ex 2      False
' Like Operator Ex 2      True

```

## If Statements
The standard If, Else If, and Else statements behave as they would in most languages. An example of the syntax is below
```vb
Sub Main()
  ' Declaring Variables
  Dim Var1 As Integer
  Dim Var2 As Integer

  ' Assigning Values
  Var1 = 10
  Var2 = 1000

  If Var1 > Var2 Then
      Var1 = Var1 * 3
    
  ElseIf Var1 < Var2 Then
      Var1 = Var1 + 3
      
  Else
      Var1 = Var2 / 5
  End If ' This is how you tell VBA the to end the If statement

  Debug.Print (Var1) 

End Sub

  ' Immediate Window Output -------------------
  ' 13
```

## While Loops
Microsoft's Documentation page gives a great example of a while loop, it accounts for the need to declare and use a control loop variable, the syntax of the while loop, and how to properly close a while loop. Here is Microsoft's example[^7]:
```vb
  Dim Counter 
  Counter = 0 ' Initialize variable. 
  While Counter < 20 ' Test value of Counter. 
  Counter = Counter + 1 ' Increment Counter. 
  Wend ' End While loop when Counter > 19. 
  Debug.Print Counter ' Prints 20 in the Immediate window.
```

## For Loops
### For Each Loop

Used to loop through each item [^8]. 
```vb
Dim Found, MyObject, MyCollection 

For Each MyObject In MyCollection    ' Iterate through each element.  
      Debug.Print(MyObject.Text)
    Exit For    ' Exit loop. 
Next
```
### For Next Loop

Used to loop through a specified number of times [^9]. These can be nested like below:
```vb
Sub Main()

For I = 0 To 5
    For J = 20 To 21
        Debug.Print I; J
    Next J
Next I

End Sub

' Immediate Window Output -------------------
' 0  20 
' 0  21 
' 1  20 
' 1  21 
' 2  20 
' 2  21 
' 3  20 
' 3  21 
' 4  20 
' 4  21 
' 5  20 
' 5  21 
```

## Functions
When placing functions inside the VBA code editor,  horizontal lines appear, visually separating the function code from the Sub Main () code. **The function name itself will act as a return variable if  a return variable is wanted.** If a void function is wanted do not add a variable declaration to the function. 

Below are some examples of how to use functions inside the Sub Main () code block.
```vb
Sub Main()
    ExportToPDF ' Calling a Function
                ' with no return value or inputs.
    
    Dim name As String
    name = ExtractName() ' Calling a Function
                         ' with no parameters but returns a value.
    Debug.Print (name)
    
    Dim fullName As String
    fullName = makeFullName("Nikola", "Tesla") ' Calling a Function
                                               ' with parameters and a return value.
    Debug.Print (fullName)
    
End Sub

Function ExportToPDF()
    Debug.Print ("The PDF has been exported.")
End Function

Function ExtractName() As String
    ExtractName = "Individual's Name"
End Function

Function makeFullName(firstName As String, lastName As String) As String
    makeFullName = firstName + " " + lastName
    
End Function

' Immediate Window Output -------------------
' The PDF has been exported.
' Individual's Name
' Nikola Tesla
```
## Conclusion
This blog post acts as a reference for VBA programmers to refer to when they are programming. Additionally, this blog post showed that the Microsoft documentation has a detailed description of VBA and can be referred to as well. After reading this post, programmers should have enough knowledge to start programming VBA applications.

## References

[^1]:  Stack Overflow, "Does VBA contain a comment block syntax?", 2015, https://stackoverflow.com/questions/10203349/use-vba-to-clear-immediate-window#:~:text=For%20those%20wondering%2C%20the%20shortcut,Del%20(to%20clear%20it). 

[^2]:  Stack Overflow, "Does VBA contain a comment block syntax?", 2015, https://stackoverflow.com/questions/24001501/does-vba-contain-a-comment-block-syntax

[^3]: Microsoft Corporation, "Declaring variables", 2021, https://learn.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables

[^4]: Microsoft Corporation, "User-defined data type", 2021, https://learn.microsoft.com/en-us/office/vba/language/how-to/user-defined-data-type

[^5]: Microsoft Corporation, "Comparison operators", 2022, https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/comparison-operators

[^6]: Microsoft Corporation, "Like operator", 2022, https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/like-operator

[^7]: Microsoft Corporation, "While...Wend statement", 2022, https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/whilewend-statement

[^8]: Microsoft Corporation, "For Each...Next statement", 2022, https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/for-eachnext-statement

[^9]: Microsoft Corporation, "For...Next statement", 2022, https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/fornext-statement