# Factors 

## What are they? 
- Factors are data types that are used to store *categorical variables*
   - categorical variables are limited to a specific number of categories, 
   - unlike *continuous variables* that can be an infinite number of variables
- For deeper analysis R needs to know whether or not variables are continuous or categorical
- An example of a categorical variable for types of pets 
   - a user can only have one of a select number of values, a categorical variable
   - but names would be stored in a continuous variable

## Making a factor
 - use the factor() function

</ul>
<br/>
<div class='overflow'>
<div class="console">
<code>

\# Pet vector<br />
\>> pet_vector <- c("cat", "dog", "fish", "cat", "cat")<br />

\# Convert pet_vector to a factor<br />
\>> factor_pet_vector <-factor(pet_vector)<br />

\# Print out factor_sex_vector<br />
\>> factor_sex_vector<br />


[1] cat dog fish cat cat <br /> 
Levels: cat dog fish<br />
</code>
</div> 
</div> 


## Factor levels 
- factors categorical options are called *Factor Levels* 
- you can see a factors levels by using the levels() function 
 
</ul>
 <br/>
<div class='overflow'>
<div class="console">
<code>

\>> levels(factor_pet_vector)<br />
[1] "cat"  "dog"  "fish"

\# it just returns a regular vector of the factor's categories<br />
\# it's got indexes and everything<br />
\>> levels(factor_pet_vector)[2]<br />
[1] "dog" 
 
</code>
</div> 
</div>  

- R will auto generate the levels given a vector, however, you can also specify what 
  levels you want 
- if a value is in a 

http://faculty.nps.edu/sebuttre/home/R/factors.html

https://www.dummies.com/programming/r/how-to-work-with-ordered-factors-in-r/

http://monashbioinformaticsplatform.github.io/2015-09-28-rbioinformatics-intro-r/01-supp-factors.html

https://www.statmethods.net/interface/workspace.html