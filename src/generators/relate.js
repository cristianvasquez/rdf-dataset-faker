import { ns } from '../namespaces.js'

const items = [
  ns.foaf.knows, ns.schema.sponsor, ns.schema.colleague]

const weights = [90, 10, 10]

function weighted_random () {
  // @TODO
  return ns.foaf.knows
}

function relatePeople ({ pointer }, uriFrom, uriTo) {
  pointer.node(uriFrom).addOut(weighted_random(), uriTo)
}

export { relatePeople }
