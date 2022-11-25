# rdf-dataset-faker

Generate fake RDF datasets 

## Libs

- [ngraph.generators](https://github.com/anvaka/ngraph.generators)
- [faker-js/faker](https://github.com/faker-js/faker)

## Example

```js
import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { createGraph } from './src/graph.js'

const nGraph = graphGenerator.wattsStrogatz(100, 20, 0.01)
const ex = rdf.namespace('http://example.org/')

const dataset = createGraph(nGraph, { namespace: ex, named: ex['named'] })

console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
```
```sh
<http://example.org/99> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://schema.org/Person> .
<http://example.org/99> <http://schema.org/image> <https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/465.jpg> .
<http://example.org/99> <http://schema.org/url> <https://kooky-pink.name> .
<http://example.org/99> <http://schema.org/telephone> "1-552-806-4644 x69133" .
<http://example.org/99> <http://schema.org/name> "Zakary Kozey" .
<http://example.org/99> <http://schema.org/jobTitle> "Central Configuration Officer" .
<http://example.org/99> <http://schema.org/email> <mailTo:Zakary88@hotmail.com> .
<http://example.org/99> <http://schema.org/address> _:b100 .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/0> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/1> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/2> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/3> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/4> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/5> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/6> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/7> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/8> .
<http://example.org/99> <http://xmlns.com/foaf/0.1/knows> <http://example.org/9> .
_:b100 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://schema.org/PostalAddress> .
_:b100 <http://schema.org/addressLocality> "Greeley" .
_:b100 <http://schema.org/streetAddress> "81889 Koepp Haven" .
_:b100 <http://schema.org/addressRegion> "NH" .
_:b100 <http://schema.org/postalCode> "47607" .

Produced 2300 quads
```
