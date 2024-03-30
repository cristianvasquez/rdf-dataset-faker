import { fakePeopleNetwork } from './index.js'

const dataset = fakePeopleNetwork({})
console.log(dataset.toString())
console.log('Produced', dataset.size, 'quads')
