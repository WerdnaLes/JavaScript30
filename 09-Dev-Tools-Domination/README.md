# 09-Dev-Tools-Domination

Some useful tricks with console

---

## Noteworthy points:

### Interpolate the string:

```javascript
console.log("Hello I am a %s string!", "some");
```

### Change the style of console output:

```javascript
console.log(
  "%c I am some great text",
  "font-size: 50px; background:red; text-shadow: 10px 10px 0 blue"
);
```

### Warning style:

```javascript
console.warn("OH NOOO!");
```

### Error style:

```javascript
console.error("Damn!");
```

### Grouping together:

```javascript
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
```

### Discover the timing of some process:

```javascript
console.time("fetching data");
fetch("https://api.github.com/users/WerdnaLes")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
```
