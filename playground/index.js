import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { fakeGraph, fakeLadder } from '../index.js'

// See generators
// https://github.com/anvaka/ngraph.generators

const ex = rdf.namespace('http://example.org/')

const uris = {
  1:ex[1]
}

const uriResolver = (id) => {
  if (!uris[id]){
    uris[id] = rdf.blankNode()
  }
  return uris[id]
}


const dataset = fakeLadder(20, { uriResolver })

console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
