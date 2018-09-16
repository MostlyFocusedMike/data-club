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
<br/><br/><br/><br/>