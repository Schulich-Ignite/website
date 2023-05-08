---
title: Using User Interfaces in VBA
subtitle: Supercharging office apps
date: 2023-05-08T00:00:01-06:00
modified_date: ""
image: /img/blog/writing-on-laptop.jpg
authors: ["Brendan Smiley"]
tags:
  - vba
  - productivity
---
<a class="btn btn-secondary" href="https://schulichignite.com/blog/vba-syntax">See previous post</a>

## Overview
User Interfaces (UIs) are important to communicate the program to the user. UIs are the gap between the program and the user. UIs are easy to create in VBA, the process is very similar to creating WinForms in C#. The objective of this blog post is to show how to create UIs in VBAs built-in code editor. 

## Getting Started

1. Open the VBA Code Editor
2. Insert &#8594; UserForm
3. A new window should appear with a customizable window.
    
    ![UserForm](/img/blog/vba/userform.jpg)
   
4. Ensure the toolbox is visible 
   
   * View &#8594; Toolbox
   * The toolbox gives you lots of different UI features that you can just *drag and drop* onto the user form. This toolbox helps speed up the user interface development process. 
   * Here is what the toolbox looks like:
  
      ![Tool Box](/img/blog/vba/toolbox.jpg)

5. From here you should be able to lay out all the different controls your user interface needs.
  
## Control Properties
Every control you create will have a set of properties that you can change and use for your application. Below is a list of some of the properties I find myself using the most.

  * (Name) : How to access the control in other functions. It is the identification name (variable name) for the control. I often put the type of control on the end of the name so that I don't get confused with the UI features available. Some name examples may be:
   
    * customerNameTextBox
    * submitButton
    * userSettingsListBox
  
  * Caption : The caption is what the user will see. For instance, you can change the caption of the user form to what you want your application's name to be. 
  * Enabled : If a control is NOT enabled then the user cannot use it. This tends to be helpful if the user is supposed to enter the required information.
  * Value : The value of the control is what is stored in the control. A great example of this is the text box. The user will type information into the text box and then if you want to retrieve this information you can use the value property to read that information.
  * Column Count (List Box) : List Boxes can have *hidden columns*. Hidden columns are nice to have because they allow you to store additional information on each list item while not displaying it to the user. The next blog post will make use of this.

## User Form Events
  Events will be triggered when the user does something to one of the UI's controls. There are many different kinds of Events, which allows developers to make very complex UIs.

### How to make events
  You can code events by viewing the User Forms code. To do this [^1] 
  1. Right-Click the UserForm
  2. Click View Code
   
  Alternatively you can double click the UserForm or any controls to create a new private sub in the code.

  There will be 2 dropdowns that will help you select the correct event for your needs.
  ![Tool Box](/img/blog/vba/events.jpg)

  
### How events can be used
  Events can be used to link actions the user takes. For instance, you can have an event that will trigger a function from module 1. 
  ```vb
Private Sub checkButton_Click()
    ' Run the credential check function
    Module1.checkCreds
End Sub
  ```

## A simple login page
As a demonstration of how to set up a UI we will now make a login page UI.

  First start by laying out all the required controls:

<iframe width="80%" height="500" src="https://www.youtube.com/embed/Vdrz31d7AvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  Then create events to add functionality (Note: I double clicked to create a new event for the command button):

<iframe width="80%" height="500" src="https://www.youtube.com/embed/q-9KuG8eRWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Conclusion

You should now know how to set up a UserForm in VBA and how to add different controls to get your desired User Interface. Additionally, you should see that there is much flexibility available to these UserForms due to the "events" that you can make.

In the next blog post, all the previous posts from this series will be used together to create a cover letter generating application that is aimed at saving time for job applicants.


<a class="btn btn-secondary" href="https://schulichignite.com/blog/VBA-CoverLetterVBA">See next post</a>

## References
[^1]: Super Excel VBA, "UserForm Event
", https://www.superexcelvba.com/en/tutorial/027-userform-event