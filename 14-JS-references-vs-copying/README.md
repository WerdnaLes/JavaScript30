# 14-JS-references-vs-copying

Some useful tricks with arrays and objects

---

## Noteworthy points:

### Four ways to create an array copy to modify it without changing the original array:

```javascript
1. const team = players.slice();
2. const team = [].concat(players);
3. const team = [...players]; (preferable);
4. const team = Array.from(players);
```

### Two ways to create an object copy to modify it without changing the original object:

```javascript
1. const captain = Object.assign({}, person, { number: 99 });
2. const captain = { ...person }; (preferable)
```

---

## Creating such object or array copy will affect only 1 level deep, so when you decide to change nested property of a cloned object it will change original too.

---

## However, you can parse original object to JSON and parse it back to an object, so further changes of nested properties won't affect original object:

```javascript
const dev = JSON.parse(JSON.stringify(wes));
```
