---
title: Intro to Visual Basic for Applications (VBA)
subtitle: Supercharging office apps
date: 2023-02-27T00:00:01-06:00
modified_date: ""
image: /img/blog/writing-on-laptop.jpg
authors: ["Brendan Smiley"]
tags:
  - vba
  - productivity
---
VBA is a programming language that was created by Microsoft to help program inside their office applications. These office applications have helped students, teachers, office workers, and many others complete tasks quickly. However, users will often find themselves doing redundant tasks or wishing there was a tool to do a unique task. VBA is the tool to use in those situations, you can program time-saving programs to remove redundancy from your work [^1].

It may be hard to grasp what kind of projects you can do with VBA. Below are some automation tools that I have built in the past which may help show VBA's capabilities:

- **Extracting selected data from a computer-generated excel file and populating it into a formal report.** This was an industry application, the client was manually grabbing the pipe corrosion data from the computer-generated report and pasting it into their formal report. However, there were easily hundreds of pipe sections that needed populating. After using VBA the task took seconds to complete.
- **Converting multiple Word Documents to PDF.** A School teacher I know needed to convert a bunch of separate word documents into individual pdf files. The quickest non-VBA way (I know of) to do this is to open each document and export it to pdf. Using VBA this task takes a few seconds.
- **Window Forms can be used to create UIs.** If you need a complex system you can create full-scale Windows Forms (similar to C# Windows Forms). I have used a Windows Form to help "mail merge" customer information inside a Word Document template. More specifically, most of the reports will be very similar for each client, but you may need to replace the report date, customer name, and repopulate a Bill of Materials table for each customer.

Below is a list of the office applications you can use VBA for [^1]:

- Excel
- Word
- Outlook
- PowerPoint
- Publisher
- Visio
- Project
- Office for Mac
- Access

## Getting Started

This blog series assumes you have an understanding of the basic concepts of programming. Concepts such as variables, conditions, loops, functions, and classes will be used in this series. This blog series will begin with the basics of VBA. Later in the series, the blog posts will focus on creating helpful tools for students and office employees. For this introduction tutorial, Microsoft Word will be used.

### Macro Enabled Files

An important thing to remember is that "Macros" also known as scripts or programs, need to be enabled by the user for security reasons. ***You should always be mindful of the macros you enable and allow to run on your computer. Only enable macros you trust.*** To be able to run VBA programs, you must have a macro-enabled version of the file. **To get a macro-enabled file select it from the save as dropdown.** Some examples of the regular file extensions vs. their macro-enabled file extensions are listed below:

- Excel Workbook (.xlsx) vs. Excel Macro-Enabled Workbook (.xlsm)
- Word Document (.docx) vs. Word Macro-Enabled Document (.docm)

### Using the Built-In Code Editor

First and foremost is to get the Developer tab on the ribbon. On the ribbon of any of the Microsoft applications, you can edit which tabs are available to you. To add the Developer tab do the following:

1. In a new document, go to File.
2. Select Options.
3. Select Customize Ribbon (On the sidebar).
4. Select Main Tabs from the dropdown.
5. Select developer.
6. Click Add.
7. Click Okay.

You can do lots of programming from the developer tab. Consider it your home base for coding inside a Microsoft application. **Click the Visual Basic button** to start coding.

![Visual Basic Button](/img/blog/vba/ribbonVisualBasic.jpg)

Once you've clicked the Visual Basic button, a new window should appear. Here are some additional steps to get started inside the code editor.

1. Click Insert and select Module.

2. Go to the newly created Module.

3. Use the following code:

```vb
Sub Main()
    Debug.Print ("Hello World!") ' This will be visible in the Immediate Window
    MsgBox ("Hello World!") ' This will make a pop-up window.
End Sub
```

4. Press the green run arrow or F5 to run the code.
   ![Visual Basic Button](/img/blog/vba/VisualBasic.jpg)

## Running the Code from a Button

The Visual Basic editor has the green run arrow which works well. However, it would be nice to just have a button you can press once you are done programming. This way you don't need to go to the developer tab, open up Visual Basic Code Editor, and then hit run.

**Making a Button:**

1. Ensure your code is wrapped inside a Sub statement like the above code.

2. Go to the developer tab on the Ribbon.

3. Inside the Controls Category, Enable Design Mode by clicking "Design Mode" (Buttons can only be edited inside design mode).
   ![Visual Basic Button](/img/blog/vba/ribbonButtonTools.jpg)

4. Inside the Controls Category, click the Legacy Tools dropdown and select a "Command Button (ActiveX Control)".

5. A simple button should appear in the Word Document. Right-click the button.

6. View Code.

7. Inside the Sub statement that appears, call the Main sub from Module 1.

```vb
Private Sub CommandButton1_Click()
    Module1.Main
End Sub
```

8. Disable Design Mode (Button editing is now disabled).

9. Click the button and see the program run!

## Conclusion

At this point, you should know what VBA is and how to start programming inside the Microsoft application of your choice. Additionally, you should have some basic knowledge of creating buttons to run the macros more cleanly. VBA syntax will be covered in the next post.

## References

[^1]: Microsoft Corporation, "Getting started with VBA in Office", 06/08/2022, https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office
