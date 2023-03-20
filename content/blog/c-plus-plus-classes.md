---
title: Classes and Objects (C++)
subtitle: Structuring your data!
date: 2023-03-20T00:00:00-06:00
modified_date: 2023-01-19T00:00:00-06:00
image: /img/blog/cookie-cutter.jpg
authors: 
- Cole Pawliw
tags:
  - c++
  - c
  - low-level
---


## What is a Class?

At this point, you should have a good understanding of the basic variables in programming, as well as how to use loops and functions effectively. For the most part, that's all you need to make effective programs. Sometimes however, you may have difficulties when trying to create programs. Perhaps you need to make 10 versions of the same thing, where each version has multiple variables you need to keep track of. For example when looking at Super Mario, each individual block in the game has it's own specific coordinates, as well as information on if it holds a coin or not. Or maybe you just want to wrap several variables under one name to keep things less confusing. This is where classes come in.

All of the variables you have worked with at this point have been defined by someone else for you to use. They are simple concepts of storing information and telling the program how to interpret that information. What classes allow you to do is to create your own variables that work how you want them to. When you define a class, you give it a name that can be used to create an instance of it, and you define variables that are part of the class. Think of classes like a box filled with variables. This box can be accessed whenever you need, and it acts as its own large area in memory to store other things.

There are many classes that have been defined in libraries that you might be using and not even realize. Strings, vectors, arraylists, as well as many other variables are all examples of classes.

To get a better understanding of what a class will look like, let's look at a simple definition for a class that I will call "Student":

```c++
class Student {
    public:
        string name;
        int age;
        int grade;
        
        Student() {
            name = "";
            age = 6;
            grade = 1;
        }
        Student(string n, int old, int school_year) {
            name = n;
            age = old;
            grade = school_year;
        }
};
```

Let's break down what everything in this code means: In our new Student class, we keep track of the student's name, age, and what grade they're in. This allows us to keep all this information in one place where it is easy to access.

After all the variables are defined, we have what looks like function definitions, this is because they are! The two functions shown here are special functions called "constructors." A constructor allows us to define what values our variables will have when we create an instance of the class. As you can see, there are two constructors here. The second one defines the variables as the given values, but what does the first one do? Well, the first constructor is very important, it is called the "default constructor." A default constructor is important to have in all of your classes, it allows you to create a standard instance of the class in case you don't know what your variables will be yet.

Take note of the syntax of creating a class, as it will save you a lot of hair-pulling if you remember. The curly brackets are used the indicate the scope of the class, as with everything in C++. The big difference here is the class is ended with a semicolon. To be honest, I don't know why this is the case, but C++ is an old language so I have just come to accept this.

Constructors aren't the only kinds of functions that a class can have. In fact, a class can have any kind of function you want! Just like normal functions, a class function will allow you to perform algorithms or otherwise just modify variables. It is important to note however, member functions of a class cannot access your global variables, but they do have access to all the variables defined in the class, as well as the usual parameters you send in. We'll see some examples of functions later.


## Access Modifiers

You may be wondering what the "public" section means in the above class. When you create a class, there are three different kinds of "access modifiers" that everything can be assigned to. These three are "public," "protected," and "private." Other languages, such as Java, have another access modifier called "default". For the purposes of this article, we will only discuss public and private.

### Public Access

Variables and functions labelled public are accessible by any code that has access to the instance of the class. If you create an instance of a class, you will be able to call all of the public functions, and access and change all the public variables. Some languages like python **only** have public variables.

Leaving everything public is easy enough, and is useful when writing simple classes for your own code, however it is generally not good practice to do so. This is where private comes in.

### Private Access

When you create an instance of a class, you may not know how somebody else's code is going to use it. Because of this, it is best practice to keep your variables private, and have functions whose purpose is to assign and return the values. Next we'll see an example that shows this.

```c++
class Employee {
    private:
        int id;
        string name;
    public:
        Employee();
        
        void set_id(int num) {id = num;}
        int get_id() {return num;}
        
        void set_name(string s) {name = s;}
        string get_name() {return name;}
};
```

Now, we can see in the above example that the variables are kept private. It is still easy enough to access and change the values, however how it is done through a function instead of directly. This is mostly useful when there are constraints on a variable. If this happens, somebody using your code might change a variable to an illegal value, so having a function that can check the validity of the value protects from this.

Unrelated to the getters and setters, the constructor in this example has no definition. This is possible in C++, where a class may be defined in one file, but the functions are defined in another file. For this example we have assumed this to be the case, since the result of the constructor is not important to us right now. This is another generally good practice to follow, however it is not necessary, so we will ignore that for now.


## Objects

So far throughout this post, we have discussed classes and what we have referred to as "instances" of those classes. However, "instance" is not the proper term. When creating an instance of class, you are making what is called an "object." Objects are just the name that programmers have given to class variables, meaning an object belongs to a class.

Now that we understand classes a little better, we can look at a longer example that shows an object in action. We will revisit the student class for this example:
```c++
class Student {
    public:
        string name;
        int age;
        int grade;
        
        Student() {
            name = "";
            age = 6;
            grade = 1;
        }
        
        Student(string n, int old, int school_year) {
            name = n;
            age = old;
            grade = school_year;
        }
        
        void print_info() {
            std::cout << name << " is a " << age << " year old student in grade " << grade << std::endl;
        }
};

int main() {
    Student jeff("Jeff", 17, 12);
    jeff.print_info();
    
    jeff.grade = 9;
    jeff.age = 14;
    
    jeff.print_info();
    
    return 0;
}
```
By running the above code, you will see two lines get printed to the console. The first will claim that Jeff is 17 and in grade 12, and the second will say he is 14 and in grade 9. The syntax of using parenthesis () after naming the variable tells your computer to call the constructor. If we were to leave the parenthesis empty, the default constructor would be called instead.

Accessing both functions and variables of an object can be done the same way by using the dot (.) operator. Make sure to keep in mind when you are calling a function, you need brackets, but variables don't need any brackets.

There are a couple of problems that can arise when working with classes in C++. For example, if you were add a new line in the example above like this: `Student jeff2 = jeff;` your program would have an error and crash. Next we will get into some special functions that need to be written for classes in C++.


## The Big Three

Whenever you write a class, there are three very important functions that must always be written. These functions are a copy constructor, an assignment operator, and a destructor. Let's go into a little more detail about each of these and see an example to understand them better.

The copy constructor is important so that a new object can be created using an existing object as reference. The copy constructor will take an object as a parameter and assign its values to be the same as the parameter's values.

The assignment operator is necessary in C++ because of the way memory works. If you read the article on pointers and references before, you will understand that variables hold a specific place in memory. Normally, when you have two ints and you want them to have the same value, you can simply write `x = y;` to change the value of x. When you use the = operator on an object, your computer will just assign both variables to the same object. By redefining the assignment operator for your class, you can change this so that using the = operator acts more like the copy constructor.

Finally, a destructor is necessary in C++ because there is no concept of a "garbage collector" in this language. When you create variables in languages such as Java or Python, as soon as those variables go out of scope, a garbage collector is called to delete the variables and free up that space in memory. This does not exist in C++, so when something like an object goes out of scope, it will continue to exist until the program ends unless it is destroyed.

Now we will see what each of these three looks like with another example:

```c++
class Car {
    public:
        string model;
        string brand;
        int year;
        int mileage;
        
        Car() {
            model = "SUV";
            brand = "Toyundes";
            year = 2016;
            mileage = 60000;
        }
        
        Car(Car& src) {
            model = src.model;
            brand = src.brand;
            year = src.year;
            mileage = src.mileage;
        }
        
        Car& operator=(Car& rhs) {
            Car car;
            car.model = rhs.model;
            car.brand = rhs.brand;
            car.year = rhs.year;
            car.mileage = rhs.mileage;
            
            return car;
        }
        
        ~Car() {
            delete model;
            delete brand;
        }
};
	
int main() {
    Car myCar();
    
    std::cout << myCar.year << std::endl;
    
    Car myNewCar(myCar);
    Car copyCar = myCar;
    delete myCar;
    
    myNewCar.year = 2020;
    
    std::cout << myNewCar.year << std::endl;
    std::cout << copyCar.year << std::endl;
    
    return 0;
}
```

While the above code doesn't look too fancy, if the big three were to be excluded from the code, weird things would start to happen. Similarly to `operator=` in the assignment operator, it is also possible to write functions for all other operators that can be done on a variable. For example, `operator+` could be written to define what gets returned when two objects are added together. The distinction between a copy constructor and assignment operator should also be noted, where the copy constructor is essentially a constructor, the assignment operator needs to return a value that will be assigned to the calling variable. The destructor is the more confusing one, but as long as you remember that ~ defines a destructor you'll be fine.


## Final Notes

Writing classes is not a very difficult process, however it can take a long time if you have many variables. Assuming you want to do everything right, you'll need getter and setter methods for each of the variables, as well as properly defined constructors and the big three. The reality however, is if you're writing code for just yourself, you can usually get away with skipping most of these.

If you want to start writing classes in other languages, life is also going to be much simpler. Getters and setters should always be used, but the big three are not usually necessary in newer languages, as assignment operators and garbage collectors are more advanced.

Now you should be ready to go on and make your own classes! Classes can be a very useful tool for many areas of programming, so feel free to try them out in your own code.