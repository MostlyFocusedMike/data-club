# Intro to R: The Basics 

## How R deals with arithmetic 
Here are all the basic operations carried out in R:

#### code ------------------------
\# addition

5 + 5 

\# subtraction

5 - 5 

\# multiplication

3 * 5

\# division

(5 + 5) / 2 

\# Exponentiation

2^5

\# Modulo

28 %% 6
#### ------------------------ code

## Comments and variable assignments 
- Comments are simple hashes  
- To assign a variable use '<-' or '=', however most people use '<-', since '=' is 
  used a lot with math
- R uses snake casing for naming variables 
- Variables are sometimes referred to as objects 

#### code ------------------------
>\>\> my_x <- 42

>\>\> my_x 

>\>\> \# when you just enter a variable, it will print the value to the console

#### ------------------------ code

## No type coercion
- Like most languages, you can't add strings and numbers for instance

#### code ------------------------

>\>\> my_apples <- 5

>\>\> my_oranges <- "six" 

>\>\> my_apples + my_oranges 

>\>\> \# Error: non-numeric argument to binary operator

#### ------------------------ code

## Basic Data Types
- **Decimal values** like 4.5 are called numerics.
- **Natural numbers** like 4 are called integers. Integers are also numerics.
- **Boolean values** (TRUE or FALSE) are called logical.
- **Text** (or string) values are called characters.
  - single vs double quotes don't seem to actually make a difference in function
- **Vectors** A collection of numerics, text, or booleans 
- **Lists** an UNORDERED list of objects, not an array


>### Checking data types
- to check an objects data type use the class() function: 

#### code ------------------------

>\>\> \# Declare variables of different types

>\>\> my_numeric <- 42

>\>\> my_character <- "universe"

>\>\> my_logical <- FALSE 



>\>\> class(my_numeric)

>\>\> [1] "numeric"

>\>\> class(my_character)

>\>\> [1] "character"

>\>\> class(my_logical)

>\>\> [1] "logical"



>\>\> \# R is 1 indexed, not 0 like most languages 

#### ------------------------ code

- By the way, that [1] is an R thing, it refers to the index of the 
of the thing right next to it, this is useful for wrapped collections

-------------------
-------------------

# Vectors

## What are vectors?
- Vectors are one-dimension arrays that can hold numeric data, character data, or logical data.
- build them using the combine function, c() 

#### code ------------------------

>\>\> numeric_vector <- c(1, 10, 49)

>\>\> character_vector <- c("a", "b", "c")

>\>\> boolean_vector <-c(TRUE, FALSE, TRUE)

>\>\> numeric_vector

> [1] 1 2 3 4

>\>\> character_vector

> [1] "a" "b" "c" 

>\>\> boolean_vector

>[1] TRUE FALSE  TRUE
#### ------------------------ code


## Naming a vector
- the obvious parallel to vectors are arrays (which are different things in R) 
- however, in addition to having indexes, vectors can also have names 
- do this using the name() function
- the name function can take a named variable or literal vector 

#### code ------------------------

>\>\> poker_vector <- c(140, -50, 20, -120, 240)

>\>\> names(poker_vector) <- c("Mon", "Tue", "Wed", "Thu", "Fri")

>\>\> poker_vector 

>>   Monday   Tuesday Wednesday  Thursday    Friday 

>>  140       -50     20      -120       240

> \# forgive the formatting, it would look clearer in an R console


> \# you can use variables as well 

>\>\> days <- c("Mon", "Tue", "Wed", "Thu", "Fri")

>\>\> names(poker_vector) <- days 
#### ------------------------ code

## Accessing vector values 
- you can access the value of a vector with the index, name
- you can also use other vectors or ranges 

#### code ------------------------

>\>\> poker_vector[1]

>> Mon

>> 140

>\>\> poker_vector["Tue"]

>> Tue

>> -50

>\>\> poker_vector[c(2,3,4)]

>> Tue Wed Thu

>> -50 20 -120

>\>\> poker_vector[2:4]

>> Tue Wed Thu

>> -50 20 -120

> \# you can supply a vecotr of out of order indexes

>\>\> poker_vector[c(2,5,3)]

>> Tue Fri Wed

>> -50 240 20

>\>\> poker_vector[c("Tue","Fri","Wed")]

>> Tue Fri Wed

>> -50 240 20

> \# you can also use variables 

>\>\> foo <- c(1,2,3)

>\>\> poker_vector[foo]

>> Monday Tuesday Wednesday 

>> -24       -50       100


#### ------------------------ code



## Calculations with vectors 

- vectors can be added/subtractec/mult...
- each index is operated against it's pair in the other vector 
- the vectors should have the same number of items 

#### code ------------------------

>\>\> v_1 <- c(1, 10, 9)

>\>\> v_2 <- c(12, 7, 2)

>\>\> foo <- v_1 * v_2

> [1] 12 70 18


#### ------------------------ code

- you can also use sum(), mean(), median(), mode() on vectors 


#### code ------------------------

>\>\> v_1 <- c(1, 10, 9)

>\>\> v_2 <- c(12, 7, 2)

>\>\> foo <- sum(v_1)

> [1] 20

> \# you can also combine vectors and whatnot in these functions 

>\>\> foo <- median(v_1 + v_2)

> [1] 13

#### ------------------------ code

# Selection by comparison
- you can also use comparison operators to filter out vectors
  - the comparisons are <, >, <=, >=, == 

#### code ------------------------

>\>\> c(4, 5, 6) > 5

>[1] FALSE FALSE TRUE


#### ------------------------ code


- this selection vector returns a vector of logical operators 
- use this new logical vector to select only elements that came 
back true: 

#### code ------------------------
>\>\> v_1 <- c(4, 5, 6)

>\>\> selects <- v_1 > 5

>\>\> final_v <- v_1[selects]

>\>\> final_v

> [1] 6

> \# this can be streamlined a bit as well

>\>\> final_v <- v_1[v_1 > 5]

>\>\> final_v

> [1] 6

#### ------------------------ code


-------------------------------------
