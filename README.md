# Algorithm Tracer

**Description**

This tool allows you to trace the execution of popular/interesting algorithms (such as the two pointer approach for the Two Sum problem) on entered input.

**How to try it out**

Go to this link. The landing page should look similar to the screenshot below. To run either 1) click _Run Demo_ or 2) enter an array for nums (an array starts with '[' and ends with ']' and is seperated by commas) and an integer (no decimals) for target and click _Run Input_.

![alt text](https://github.com/nguy3286/Algo_Simulator/blob/main/files/loadView.PNG?raw=true)  

While the tracer is executing, it will resemble the screenshot below. The red array element highlighted is where the left pointer _l_ is currently pointing, and the green array element highlighted is where the right pointer _r_ is currently pointing.

![alt text](https://github.com/nguy3286/Algo_Simulator/blob/main/files/runView.PNG?raw=true)

The program terminates when no lines of code are highlighted anymore as pictured below. If a solution exists the two elements highlighted red and green should sum to target.

![alt text](https://github.com/nguy3286/Algo_Simulator/blob/main/files/finishView.PNG?raw=true)

**Features to add**

* A debugger style variable tracker

* Buttons to speedup, slowdown, and pause execution

* A text display of the output

* Additional algorithms problems (Island Count, Maximum Subarray Sum, etc.)

**Bugs**

* An interrupt needs to occurr when _Run Input_ or _Run Demo_ is clicked to halt execution of any uncompleted _Run Input_ or _Run Demo_ events
