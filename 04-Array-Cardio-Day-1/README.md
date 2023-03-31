# 04-Array-Cardio-Day-1

---

Practice with some Array functions

## Noteworthy points:

### Array.filter() returns a new array if condition is truthy:

```javascript
function filterBornIn1500(people) {
  return people.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
}
```

### Array.map() returns a new array based on the results of the calling array:

```javascript
function firstLastNames(people) {
  return people.map((inventor) => `${inventor.first} ${inventor.last}`);
}
```

### Array.sort() returns a sorted array based on provided condition (this example is pretty similar with Bubble sorting):

```javascript
function sortByAge(people) {
  return people.sort((a, b) => (a.year > b.year ? 1 : -1));
}

function bubbleSort(people) {
  for (let i = 0; i < people.length; i++) {
    for (let y = i + 1; y < people.length; y++) {
      if (people[i].year > people[y].year) {
        let temp = people[i];
        people[i] = people[y];
        people[y] = temp;
      }
    }
  }
  return people;
}
```

### Array.reduce() takes two arguments (anonymous function and initial value) and returns a computed result of anonymous function:

```javascript
function sumYearsOfLiving(people) {
  return people.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0); // set initial value (total) of 0
}
```
