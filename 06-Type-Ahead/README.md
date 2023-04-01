# 06-Type-Ahead

descr...

---

### Preview:

img...

## Noteworthy points:

### Fetch a JSON data and spread it into an array:

```javascript
const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
```

### Make a regEx from an input value and check if they match:

```javascript
const regEx = new RegExp(wordToMatch, "gi");
return place.city.match(regEx) || place.state.match(regEx);
```
