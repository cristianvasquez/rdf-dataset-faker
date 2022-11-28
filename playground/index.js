import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { fakeGraph } from '../index.js'

// See generators
// https://github.com/anvaka/ngraph.generators

const nGraph = graphGenerator.wattsStrogatz(100, 20, 0.01)
const ex = rdf.namespace('http://example.org/')

const dataset = fakeGraph(nGraph, { namespace: ex })

console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
