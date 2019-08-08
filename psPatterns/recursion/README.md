## Recursion

Recursion is when function invokes itself with different input.
Two main condition for valid recursion:
* Base case, a condition when recursion should be ended
* Changable data for inner function invoke

Examples:

1. Problem: [Write function power, which accepts the base and the exponent.](#problem-1)
2. Problem: [Write a fuctorial function](#problem-2)
3. Problem: [Write a function which accepts a number and sum up all numbers from 0 to number](#problem-3)

#### Problem 1
1. Write function power, which accepts the base and the exponent.

```javascript
Input/Output:

power(2, 2); // 4
power(2, 0); // 1
power(2, 4); // 16
```

```javascript
Solution:

function power(base, exp) {
    if (!exp) return 1;
    if (exp === 1) return base;
    return base * power(base, --exp);
}
```


#### Problem 2
2. Write a factorial function

```javascript
Input/Output:

factorial(4); // 24
factorial(0); // 1
factorial(10); // 1
```

```javascript
Solution:

function factorial(num) {
    if (!num) return 1;
    if (num === 1) return 1;
    return num * factorial(--num);
}
```

#### Problem 1
1. Write function power, which accepts the base and the exponent.

```javascript
Input/Output:

power(2, 2); // 4
power(2, 0); // 1
power(2, 4); // 16
```

```javascript
Solution:

function sumUp(num) {
    if (num === 1) return 1;
    return num + sumUp(--num);
}
```

