import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { createGraph } from './src/graph.js'

// See generators
// https://github.com/anvaka/ngraph.generators

function fakeGraph (nGraph, { namespace, namedGraph }) {
  const space = namespace ?? rdf.namespace('http://example.org/')

  const dataset = createGraph(nGraph, { namespace: space })

  if (namedGraph) {
    const datasetWithNamed = [...dataset].map(
      quad => rdf.quad(quad.subject, quad.predicate, quad.object, namedGraph))
    return rdf.dataset().addAll(datasetWithNamed)
  }
  return dataset

}

function fakePeopleNetwork ({ namespace, namedGraph }) {
  const nGraph = graphGenerator.wattsStrogatz(100, 20, 0.01)
  return fakeGraph(nGraph, { namespace, namedGraph })
}

function fakeLadder (steps, { namespace, namedGraph }) {
  const n = steps ?? 10
  const nGraph = graphGenerator.ladder(n)
  return fakeGraph(nGraph, { namespace, namedGraph })
}

export { fakeGraph, fakePeopleNetwork, fakeLadder }
