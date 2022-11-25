import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { createGraph } from './src/graph.js'

// See generators
// https://github.com/anvaka/ngraph.generators

const nGraph = graphGenerator.wattsStrogatz(100, 20, 0.01)
const ex = rdf.namespace('http://example.org/')

const dataset = createGraph(nGraph, { namespace: ex, named: ex['named'] })

console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
