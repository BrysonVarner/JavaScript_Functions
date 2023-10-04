console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    if (count == null || count <= 0)
    return 0;

    for (i = 0; i < count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}

printOdds(65);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    if (userName === undefined)
    {
        var userName = "Hooman";
    }
    
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
    if (age < 16)
    {
        console.log(belowSixteen);
    }
    else if (age > 16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(`${userName}, If you don't tell me your age, I can't let you in!`);
    }
}

checkAge("Bob", 14);
checkAge("Jed", 30);
checkAge();
checkAge("Bob");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y)
{
    if (x > 0 && y > 0)
    {
        console.log(`The point is in Quadrant 1.`);
    }
    else if (x < 0 && y > 0)
    {
        console.log(`The point is in Quadrant 2.`);
    }
    else if (x > 0 && y < 0)
    {
        console.log(`The point is in Quadrant 3.`);
    }
    else if (x < 0 && y < 0)
    {
        console.log(`The point is in Quadrant 4.`);
    }
    else if (x == 0)
    {
        console.log(`The point is on the x axis.`);
    }
    else if (y == 0)
    {
        console.log(`The point is on the y axis.`);
    }
    else if (x === undefined || y === undefined) 
    {
        console.log(`please enter 2 valid numbers`);
    }
}

whichQuadrant(2, 4);
whichQuadrant(-4, 4);
whichQuadrant(2, -7);
whichQuadrant(-2, -4);
whichQuadrant(0, 6);
whichQuadrant(2, 0);
whichQuadrant( 4);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function makesTriangle(s1,s2,s3)
{
    if (s1 + s2 > s3 || s1 == s2 == s3)
    {
        if (s1 == s2 && s2 == s3 && s1 == s3)
        {           
            console.log(`this can make a equilateral triangle`);
                        
        }
        else if (s1 == s2 || s2 == s3 || s1 == s3)
        {
            console.log(`this can make an isosceles triangle`);
        }
        else 
        {
            console.log(`this can make a scalene triangle`);
        }
    }
    else
    {
        console.log(`these numbers cannot make a triangle.`);
    }
}

makesTriangle(2,3,4);
makesTriangle(2,2,2);
makesTriangle(3,3,4);
makesTriangle(2,3,4);
makesTriangle(2,2,12);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function planUsageCalc(planLimit, day, usage)
{
    let planCycle = 30;
    let remainDays = planCycle - day;
    let remainData = planLimit - usage;
    let safeUsage = remainData / remainDays;
    let currentUseAvg = usage / day;
    let contdUsage = currentUseAvg * remainDays;
    let avgSafeUse = planLimit / planCycle;
    

    if (remainData <= 0)
    {
        console.log(`Sorry, you have run out of data!`);
    }
    else
    {
        console.log(`${day} days used, ${remainDays} days remaining.`);
        console.log(`Average daily use: ${(usage / day).toFixed(2)} GB/day.`);

        if (currentUseAvg > avgSafeUse)
        {
            console.log(`You are EXCEEDING your average daily estimated use of ${avgSafeUse.toFixed(2)},`);
            console.log(`if you continue using data at this rate, you will exceed your plan by ${(contdUsage - remainData)} GB.`);
            console.log(`To avoid additional charges, please keep usage below ${(remainData / remainDays).toFixed(2)} GB/Day.`);
        }
        else 
        {
            console.log(`Your data usage looks great! Keep it up! At this rate you are estimated to use ${contdUsage} of ${planLimit} GB.`);
        }
    }

    
}

planUsageCalc(100, 2, 40);
console.log("\n==========\n");
planUsageCalc(1000, 5, 10);
console.log("\n==========\n");
planUsageCalc(100, 15, 65);
console.log("\n==========\n");
planUsageCalc(100, 25, 140);
console.log("\n==========\n");