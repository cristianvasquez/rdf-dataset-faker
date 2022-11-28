# rdf-dataset-faker

Generate fake RDF datasets 

## Libs

- [ngraph.generators](https://github.com/anvaka/ngraph.generators)
- [faker-js/faker](https://github.com/faker-js/faker)

## Example

```js
import {fakePeopleNetwork} from 'rdf-dataset-faker'

const dataset = fakePeopleNetwork({})
console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
```
```sh
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/7> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/8> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/9> .
_:b100 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://schema.org/PostalAddress> .
_:b100 <http://schema.org/addressLocality> "Morgan Hill" .
_:b100 <http://schema.org/streetAddress> "0695 Twila Squares" .
_:b100 <http://schema.org/addressRegion> "ME" .
_:b100 <http://schema.org/postalCode> "14483" .

Produced 2300 quads
```
