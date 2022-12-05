import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import { createGraph } from './src/graph.js'

// See generators
// https://github.com/anvaka/ngraph.generators

function createDefaultUriResolver (namespace) {
  const space = namespace ?? rdf.namespace('http://example.org/')
  return (id) => space[id]
}

function fakeGraph (nGraph, { namedGraph, uriResolver }) {
  if (!uriResolver){
    throw Error('requires a uriResolver, a function that generates URIs from numbers')
  }

  const dataset = createGraph(nGraph, { uriResolver })
  if (namedGraph) {
    const datasetWithNamed = [...dataset].map(
      quad => rdf.quad(quad.subject, quad.predicate, quad.object, namedGraph))
    return rdf.dataset().addAll(datasetWithNamed)
  }
  return dataset
}

function fakePeopleNetwork ({ namespace, namedGraph, uriResolver }) {
  const nGraph = graphGenerator.wattsStrogatz(100, 20, 0.01)
  return fakeGraph(nGraph, {
    uriResolver: uriResolver ? uriResolver : createDefaultUriResolver(namespace),
    namedGraph,
  })
}

function fakeLadder (steps, { namespace, namedGraph, uriResolver }) {
  const n = steps ?? 10
  const nGraph = graphGenerator.ladder(n)
  return fakeGraph(nGraph, {
    uriResolver: uriResolver ? uriResolver : createDefaultUriResolver(namespace),
    namedGraph,
  })
}

export { fakeGraph, fakePeopleNetwork, fakeLadder }
