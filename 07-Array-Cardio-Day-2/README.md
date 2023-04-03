# 07-Array-Cardio-Day-2

Practice with some Array functions

---

## Noteworthy points:

### Array.some() will return boolean value if there is at least one needed element:

```javascript
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
```

### Array.every() will return boolean value if every element meets the condition:

```javascript
const is19 = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
```

### Array.find() will return an element that meets the condition:

```javascript
const theID = comments.find((comment) => comment.id === 823423);
```

### Array.findIndex() will return an index of the first seeking element:

```javascript
const index = comments.findIndex((comment) => comment.id === 823423);
```

## You can remove an element from an array in two ways:

### Array.splice(_from_, _howMany_) (alters the original array):

```javascript
comments.splice(index, 1);
```

### Array.slice(_from_, _to_) - slices elements from the array, but doesn't alter it:

```javascript
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
```
