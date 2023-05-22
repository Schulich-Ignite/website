---
title: Datastructures in C++
subtitle: How to make your data make sense in C++
date: 2023-05-22T00:00:00-06:00
modified_date: 2023-05-22T00:00:00-06:00
image: https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
authors: 
  - Cole Pawliw
tags:
  - c++
  - optimization
  - theory
  - terminology
---

By now you should have a decent understanding of classes and objects. If not, go check out our [blog post](https://schulichignite.com/blog/c-plus-plus-classes/) on the topic to see what I'm talking about. Classes are a very useful tool for storing information that is related. Among the many applications of these classes is something known as data structures. These data structures are an extension of what we already know about classes, and allow storing information in a way that links similar objects together.


## Usage of Data Structures

Arrays are useful for storing a list of the same data type, where each element in the array is referenced by a unique index. This is fine when it comes to a single data type, but what happens if you need to store a series of information that need several variables? Well, the simple answer would be to create a class that holds the needed variables, then create an array of this class.

Now imagine you're creating an online video game that needs to keep track of all the active players at any one time. You make your Player class that holds all the information needed for a single player. Next, you declare and initialize an array that will be used to keep track of your players. What happens when more players join the server? Remember, arrays are not a dynamic variable type. This means if you ever need more space in the array than you have, you will need to create a brand new array and move every existing player over to this new one.

As you can imagine, this method of constantly changing and making new arrays is very inefficient. What if there was a way for an array to have both no length and infinite length as needed?


## Linked Lists

<pre class="mermaid">
flowchart LR
A[First node] --> B[Second node]
B --> C[...]
C --> D[Last node]
</pre>

Linked Lists are a very basic type of data structure and, similar to most data structures, have a dynamic size. Let's begin by defining what our player class looks like, so we know what will be stored. For the sake of convenience, we will make everything public. We'll also refrain from defining any functions. If you're unsure what any of this means, double check the classes and objects blog post mentioned above.

	class Player {
		public:
			string name;
			int health;
			string weapon;
			int ammo;
	};

This player is fairly simple, they have a name, health value, weapon, and ammo currently in that weapon. Now let's look at how we can place this player in a list with all the other players currently in the server:

	class Player {
		public:
			string name;
			int health;
			string weapon;
			int ammo;
			
			Player* nextPlayer = nullptr;
	};
	
	class LinkedList {
		public:
			Player* firstPlayer = nullptr;
			Player* lastPlayer = nullptr;
			
			void addPlayer(Player* toAdd) {
				if (firstPlayer == nullptr) {
					firstPlayer = lastPlayer = toAdd;
				} else {
					lastPlayer->nextPlayer = toAdd;
					lastPlayer = toAdd;
				}
			}
			
			void removePlayer(Player* toRemove) {
				Player* finder = firstPlayer;
				Player* prevFinder = nullptr;
				
				while (finder != nullptr) {
					if (finder == toRemove) {
						if (prevFinder == nullptr) {
							firstPlayer = finder->nextPlayer;
						} else {
							prevFinder->nextPlayer = finder->nextPlayer;
						}
						finder->nextPlayer = nullptr;
						break;
					}
					prevFinder = finder;
					finder = finder->nextPlayer;
				}
				
				// This next line should only be used if the calling function isn't meant to delete players.
				// delete finder;
			}
	};

As you can see, a new variable was added to the Player class, which is a pointer to a different Player. This functions as a link to the next player in the list. After the Player class, we see a new class named "LinkedList" that functions as a way to utilize this new variable in the Player class.

The first important thing in the LinkedList is some way to track the first and the last player in the list. This way, we can move from the beginning of the list to the end and look at each player, and there will be a way to make sure we aren't at the end of the list.

We then have two member functions that are meant to add and remove players from the list. When a new player joins the server, the addPlayer() function will be called with that Player's object. That new player will be added to the end of the list (and also to the front, if there are no other players online). The removePlayer() function will be used to find a player that matches a given object and remove that from the list. It is important to note the sequence that is used to remove a player. When removing an object from the middle of the list, you first find the object in the list, then connect the objects around it to each other, then remove it from the list. Finally, the while loop has a condition that makes sure the player we're looking for is connected to the server, and ends if we reach the end of the list.

When defining your LinkedList, the list can be made as simple, or as complicated as you want. For example, you could decide to include an index pointer that tracks a certain player, and add increment (++) and decrement (--) operator overrides to change the position of this index. An example of an operator override can be seen in the classes and objects post with the assignment operator (=).

There are variations of LinkedLists that can be used in place of this. The structure defined above is known as a Singly-Linked List, but it is also possible to have a Doubly-Linked List. This is done by adding a second pointer to the Player class that points to the previous Player in the list. This is useful, however it requires much more As you can see, a new variable was added to the Player class, which is a pointer to a different Player. This functions as a link to the next player in the list. After the Player class we see a new class named "LinkedList" that functions as a way to utilize this new variable in the Player class.

The first imporant thing in the LinkedList is some way to track the first and the last player in the list. This way, we can move from the beginning of the list to the end and look at each individual player, and there will be a way to make sure we aren't at the end of the list.

We then have two member functions that are meant to add and remove players from the list. When a new player joins the server, the addPlayer() function will be called with that Player's object. That new player will be added to the end of the list (and also to the front, if there are no other players online). The removePlayer() function will be used to find a player that matches a given object, and remove that from the list. It is important to note the sequence that is used to remove a player. When removing an object from the middle of the list, you first find the object in the list, then connect the objects around it to each other, then remove it from the list. Finally, the while loop has a condition that makes sure the player we're looking for is actually connected to the server, and ends if we reach the end of the list.

When defining your LinkedList, the list can be made as simple, or as complicated as you want. For example, you could decide to include an index pointer that tracks a certain player, and add increment (++) and decrement (--) operator overrides to change the position of this index. An example of an operator override can be seen in the classes and objects post with the assignment operator (=).

There are variations of LinkedLists that can be used in place of this. The structure defined above is known as a Singly-Linked List, but it is also possible to have a Doubly-Linked List. This is done by adding a second pointer to the Player class that points to the previous Player in the list. This is useful, however it requires much more maitenance in any member functions you may have. It is also possible to have the last item in a list point to the first item, essentially creating a linked loop, but this is not used very often. in any member functions you may have. It is also possible to have the last item in a list point to the first item, essentially creating a linked loop, but this is not used very often.


## Stacks and Queues

### Stacks

We will now see some different kinds of data structures. Before that, we'll quickly define a very simple class that will be used for these data structures. This class will store a number and nothing else, as it is just being used for demonstration. We will also have a single pointer to the next item in the lists.

	class Number {
		public:
			int num;
			
			Number* nextNum = nullptr;
	};

The first data structure we will look at is called a stack. The stack follows LIFO, which stands for Last-In-First-Out. To understand what LIFO means, imagine what a stack represents in real life. If you go to a buffet, there will be a stack of plates at the start of the buffet line for you to take one. Naturally, when you approach the buffet, you grab a plate from the top. Now let's think about what happens when plates are added: A waiter takes a dirty plate and cleans it, then returns the plate to the top of the stack. This is the basic principle behind LIFO, the last item to be added is the next item ready to be taken off the top. Here is a diagram to quickly show what a stack looks like, items are both added and removed from the top:

<pre class="mermaid">
flowchart BT
A[First added] --> B[Second added]
B --> C[...]
C --> D[Last added]
</pre>

The stack has some basic functions that need to be defined. These functions are push() and pop(). The push() function will add an item to the top of the stack, and pop() will remove the top value from the stack and return it. We will also store the size of the stack so we're aware of how many items are being stored.

	class Stack {
		public:
			Number* top = nullptr;
			int size = 0;
			
			void push(Number* num) {
				num->nextNum = top;		// Store the rest of the stack in the current numbers pointer
				top = num;				// The new number goes to the top of the stack
				size++;
				return;
			}
			
			Number* pop() {
				if (size == 0) {
					return nullptr;
				}
				
				Number* remove = top;	// Store the top value so it can be removed
				top = top->nextNum;		// Change the top value to the next in the stack
				size--;
				remove->nextNum = nullptr; // Remove the pointer to the next value since it is no longer in the stack
				return remove;			// Return the top value
			}
	};

Depending on your implementation, you may also want to overload the push() function to allow pushing simply a number. In this case, the push() function will make a new Number object using the provided int and store that in the stack. Similarly, you may want your pop() function to just return the value of the top of the stack instead of the object. This depends on how you plan to use your stack class.

The code above differs from the diagram shown before in one small way. The diagram shows the bottom pointing toward the top of the stack, however in our implementation, we instead have the top point to the bottom. This is done because we have no use for any of the values that aren't the top value, so it is much easier to add and remove values if you're only working with what is currently at the top of the stack.

### Queues

Moving on from stacks, let's take a look at a very similar data structure, the queue. While stacks are an implementation of LIFO, the queue makes use of FIFO (first-in-first-out). As the name suggests, FIFO involves adding items to your list, then removing them in the same order they were added. To better understand this, consider you are working at a grocery store and need to stock up the shelves. When you get new food, you always place it at the back of the shelves. This is because customers looking for an item are going to grab whatever is nearest the front, and if you put the new items at the front, the older food will expire before you are able to sell it. FIFO is used to keep food fresh for everyone. In the following diagram, imagine items are being added to the left of the list, and removed from the right:

<pre class="mermaid">
flowchart LR
A[Last added] --> B[Second last added]
B --> C[...]
C --> D[First added]
</pre>

Similar to the stack class, we will be defining two key functions to allow adding and removing of values. These functions are commonly called "enqueue" and "dequeue". The functions are very simple, enqueue adds an item to the end of the queue, and dequeue removes an item from the front. The following example will be implemented with integers being passed around instead of objects so we can see how that can be done:

	class Queue {
		public:
			Number* front = nullptr;
			Number* back = nullptr;
			int size = 0;
			
			void enqueue(int number) {
				Number* obj = new Number();
				obj->num = number;
				
				if (size == 0) {
					front = back = obj;
					size = 1;
					return;
				}
				
				back->nextNum = obj;		// Store the new number behind the back
				back = obj;					// The new number goes to the back of the queue
				size++;
				return;
			}
			
			int dequeue() {
				if (size == 0) {
					return 0;
				}
				
				Number* remove = front;		// Store the front value so it can be removed
				int value = remove->num;
				front = front->nextNum;		// Change the front value to the next in the queue
				size--;
				remove->nextNum = nullptr;	// Remove the pointer to the next value, as it is no longer in the queue
				
				return value;					// Return the front value
			}
	};

Just like with the stack class before, our points are going in the reverse direction as the diagram. Again, this is just to make the code easier, but in this case it can be easily done either way. One thing that differs from the stack class, is now we track both the beginning and the end of the queue. In the stack, everything is performed on the top, so we only need to know what the current top value is. When it comes to queues, we are performing operations at both ends of the queue, so it makes sense to store both of those values for easy access. It is possible to write a queue that doesn't store the back of the queue, however that would require traversing the length of the queue every time you wanted to add a new item.

Stacks and queues are very simple data structures, there is no need to traverse the list at all so it makes the functionality very easy to implement. Now let's take a look at a more complicated data structure.


## Trees

<pre class="mermaid">
flowchart TB
A[Root] -->|Left branch| B[Node]
A -->|Right branch| C[Node]
B --> D[Leaf]
B --> E[Node]
C --> F[Leaf]
C --> G[Leaf]
E --> H[Leaf]
</pre>

While the function of each of these data structures differs from the others, you might be noticing that the coding implementation is essentially the same. This trend is also true with trees. Data structures are all very similar: create a class to function as nodes, and create a controlling class that moves through those nodes. Now while the basic idea of data structures remains the same in the implementation, different types can have vastly different structure. In the case of trees, this structure is noticeably different than with the other data structures we've covered.

A tree functions with two core principles, the first node is called the "root node", and several nodes can attach to one node in what are called branches. Any node that has no branches is called a "leaf". It is worth noting that every node in the tree can be considered the root node of its own subtree. We will look at the simplest kind of tree, known as a binary tree. It is called a binary tree because each node can have only two branches that come off of it.

	class Node {
		public:
			int value;
			
			Node* left = nullptr;
			Node* right = nullptr;
	};

The above code shows the implementation of a tree. As you can see, it is very simple, a node stores a value, and pointers to two other nodes. In the case of trees, there is no standard way to create a controlling class, so the "tree" is simply stored as the root node. A node can have one or none of its branches filled. Typically when filling out a tree, you move from left to right until the current level is completely full, then begin filling the next level. As mentioned before, a node can have any number of branches and the result will still be a valid tree, so long as none of the branches produce a loop or connect to another branch in any way (e.g. if two different nodes have pointers to the same node).

We will end off trees there, however there is much that can still be said about the use of trees. In a future article, we will look into sorting algorithms and their use with different data structures. In that article, we will discuss what is known as a "binary search tree" to see the value that trees provide in storing data.


## Predefined Data Structures

While it is important to know how to create data structures and how they work behind the scenes, it is often unnecessary to actually make them. This is because many libraries already exist that can serve the purpose of data structures for you. Various kinds of linked lists exist for different use cases. The Vector library in C++ (as well as many other languages) can be used as a dynamic array that can store any data type, similar to a Python list. Stacks and queues, like what we covered earlier in this article, will also have defined libraries for you to make use of. Some of the more complex data structures, like trees, will not have easy to find libraries, so they will require being manually created for whatever purpose you may have.

If you are curious about any of these libraries, a simple google search including the language you are writing in, and the data structure you want to look at will give you documentation that shows the different functions that are available for you to use with the library.


## Final Notes

No matter what you may want to do, there is likely a data structure that can serve that purpose. Other common data structures exist that we were not able to cover here, such as hash tables and graphs. Probably the most commonly used data structure is graphs. Graphs allow the connection of any node to any other node in the structure, so they are the perfect tool for many applications, such as showing the roads between cities. Hash tables are good for storing a key to a specific value, however they are too complicated for the purposes of this post.

Data structures can be used for many different things, and allow the storage of large amounts of data in complex ways. It is important for any aspiring programmer to understand the function of data structures, as they are a useful tool for anybody to use.