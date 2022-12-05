import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { fakeGraph, fakeLadder } from '../index.js'

// See generators
// https://github.com/anvaka/ngraph.generators

const ex = rdf.namespace('http://example.org/')

const uriResolver = (id) => {
  if (id === 1){
    return ex[1]
  } else {
    return rdf.blankNode()
  }
}

const dataset = fakeLadder(20, { uriResolver })

console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
