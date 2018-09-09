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
- do this using the names() function
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
# Matrices

## What are they?
- In R, a matrix is a collection of elements of the same data type 
  - numeric, character, or logical
- they are arranged into a fixed number of rows and columns
- you create them with the matrix() function 

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>
>> matrix(1:9, byrow = TRUE, nrow = 3)
</code>
</div> 
</div>


- The first argument is the collection of elements that R will arrange into the rows and columns of the matrix.
  - Here, we use 1:9 which is a shortcut for c(1, 2, 3, 4, 5, 6, 7, 8, 9)
- The argument 'byrow' indicates that the matrix is filled by the rows. 
- If we want the matrix to be filled by the columns, we just place byrow = FALSE.
- The third argument, 'nrow' indicates that number of rows

## Naming rows and columns 
- you can't just use names() on matrices, you have to use rownames() and colnames()
- you can also use the shorthand dimnames() function
 - it takes a list, first with the row names, then the columns 

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>
# Box office Star Wars (in millions!)<br />
>> new_hope <- c(460.998, 314.4)<br />
>> empire_strikes <- c(290.475, 247.900)<br />
>> return_jedi <- c(309.306, 165.8)<br />
>> trilogy <- c(new_hope, empire_strikes, return_jedi)<br />
>> star_wars_matrix <- matrix(trilogy, nrow = 3, byrow = TRUE)<br />
>> region <- c("US", "non-US")<br />
>> titles <- c("A New Hope", "The Empire Strikes Back", "Return of the Jedi")<br />
>> rownames(star_wars_matrix) <- titles<br />
>> colnames(star_wars_matrix) <- region<br /><br />
# print it out<br />
>> star_wars_matrix<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; US &nbsp;&nbsp; non-US

A New Hope &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;460.998  314.4

The Empire Strikes Back&nbsp; 290.475  247.9

Return of the Jedi     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 309.306  165.8

\# here's the shorthand<br />
\>\> star_wars_matrix <- matrix(box_office, nrow = 3, byrow = TRUE,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dimnames = list(titles, region))

</code>
</div> 
</div>

## Adding colums and rows 
 - use cbind() to add columns and rbind() to add rows

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>
# add columns <br />
>> box_office <- c(460.998, 314.4, 290.475, 247.900, 309.306, 165.8)<br />
>> titles <- c("A New Hope", "The Empire Strikes Back", "Return of the Jedi")<br />
>> regions <- c("US", "non-US")<br />
>> star_wars_matrix <- matrix(box_office, nrow = 3, byrow = TRUE,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dimnames = list(titles, regions))<br />
>> worldwide_vector <- rowSums(star_wars_matrix)<br />
>> all_wars_matrix <- cbind(star_wars_matrix, worldwide_vector)<br />
>> all_wars_matrix <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;non-US &nbsp; worldwide_vector<br/>
A New Hope &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;460.998 &nbsp; 314.4         &nbsp;&nbsp; 775.398<br/>
The Empire Strikes Back &nbsp;290.475 &nbsp; 247.9          &nbsp;&nbsp;&nbsp;538.375<br/>
Return of the Jedi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 309.306 &nbsp; 165.8          &nbsp;&nbsp;&nbsp;475.106<br/>
</code>
</div> 
</div>

## Combining matrices 
- usinger rbind() and cbind(), you can add two matrices together
- use rbind() to keep the column number the same, but stack the rows 
- use cbind() to keep row numbers the same, but column numbers increase 
- if you have two 2X2 matrices: 

cbind: 

XX XX<br/>
XX XX

rbind: 

XX<br/>
XX<br/>
XX<br/>
XX<br/>

## Summing a matrix 

- use colSum() to get a vector of the sum of each columns,
- use rowSum() to get a vector of the sum of each row
- here's an example of colSum()

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>
# Total revenue for US and non-US<br/>
>>total_revenue_vector <- colSums(all_wars_matrix)<br /><br/>
>>total_revenue_vector<br />
&nbsp;&nbsp;&nbsp;&nbsp;US non-US<br /> 
2226.3 2087.8

</code>
</div> 
</div>

- sum() will sum all elements in a matrix 
- rowMeans()/colMeans() will return a vector of the averages of each row/col



## Selection of matrix elements
- live vectors, use [ ] to select elements inside matrixes 
 - it goes [row, column]
- you can select elements, rows, or sub-matrixes out of a matrix 
 - returning an element is just that element, 
 - returning a row or column is a vector
 - returning a matrix is...another matrix 

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>

\# select single cell, first row, second column<br />
\>> my_matrix[1,2]

\# select entire third row<br /> 
\>> my_matrix[3,]

\# select entire second column<br /> 
\>> my_matrix[,2]<br />
\# notice the comma is required in both cases

\# use ranges to create sub matrixes<br />
\# this will make one of the elements in the first three rows and columns 2-4<br />
\>> my_matrix[1:3,2:4]<br />
\>> my_matrix[c(1,2,3),my_vector] # this also works<br />

</code>
</div> 
</div>

## Matrix arithmetic 
- it's the same as vectors, just do the operation, and it will apply to all the 
  elements in the matrix 
- you can do multiple matrixes if they have the same number of elements 

</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>
# add 4 to each element in the matrix and storing them in a new matrix<br /> 
>> add_matrix <- 4 + matrix 

\# multiply each element in each matrix and store them in a new matrix <br />
\>> multiplication_matrix <- matrix_1 * matrix_2

</code>
</div> 
</div>
