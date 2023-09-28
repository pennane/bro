// @ts-check
import EventEmitter from 'events'

/** @param {number} ms */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** @param {any[]} arr */
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

class Bro {
  static bro_names = [
    'bro',
    'broseidon',
    'brosef',
    'brotherino',
    'brozilla',
    'brohemian',
    'bromigo',
    'brofessor',
    'broday',
    'brotastic',
    'brolo',
    'brobeans',
    'brotendo',
    'brosephus',
    'brocules',
    'broetry',
    'brofessional',
    'brorrito',
    'brosaic',
    'broactive',
    'brotoxic',
    'brodeine',
    'bronanza',
    'bropocalypse',
    'broski',
    'broceidon',
    'brodi',
    'broet',
    'brorista',
    'brolosophy',
    'brofari',
    'broprah',
    'brotographer',
    'bronoculars',
    'bropensity',
    'brotocol',
    'bropolis',
    'bro-nado',
    'brogue',
    'bromance',
    'brosé',
    'broify',
    'brologue',
    'brolly',
    'brotégé',
    'brolaf',
    'bronado',
    'broforce',
    'broflake',
    'brototype',
    'brohawk',
    'brococo',
    'brollywood',
    'broposal',
    'brocean',
    'brolosopher',
    'brotato',
    'brofist',
    'brolicious',
    'bromometer',
    'broccasion',
    'brognosis',
    'broasis',
    'brotel',
    'brofuel',
    'brozen',
    'broliferate',
    'broha',
    'brolic',
    'brocrastinate',
    'brofessionalism',
    'brotamin',
    'bronocular',
    'bromo',
    'brotato chip',
    'broski',
    'bro montana',
    'brodo baggins',
    'brobot',
    'brosaurus rex',
    'broba fett',
    'brole model',
    'broetry club',
    'brobi van kenobi',
    'brozone layer'
  ]

  static bro_greetings = [
    'sup bro',
    'yo bro',
    'hey bro',
    'wassup bro',
    'broo',
    'howdy bro',
    'hi bro',
    "what's good bro",
    'hello bro',
    'aloha bro',
    'salut bro',
    'hola bro',
    'ciao bro',
    'hej bro',
    "g'day bro",
    'bonjour bro',
    'hallo bro',
    'oi bro',
    "how's it going bro",
    "what's up bro",
    "what's cracking bro",
    'good to see you bro',
    'long time no see bro',
    "what's new bro",
    'how are you bro',
    'keep it real bro',
    'alright bro',
    "lookin' good bro",
    "what's the word bro",
    "what's cooking bro",
    'howdy bro'
  ]

  /** @param {string} [name] */
  constructor(name) {
    this.name = name
    this.emitter = new EventEmitter()
  }

  greet() {
    this.emitter.emit(
      'greet',
      sample(Bro.bro_greetings).replace('bro', sample(Bro.bro_names))
    )
  }
  /** @param {"greet"} event @param {{ (): void; (...args: any[]): void; }} callback */
  on(event, callback) {
    this.emitter.on(event, callback)
  }

  /** @param {Bro} bro */
  listen(bro) {
    bro.on('greet', async (greeting) => {
      await this.think(`${bro.getName()} said "${greeting}"`)
      await this.think('oh shit, gotta reply')
      this.greet()
    })
  }

  /**  @param {string} message */
  async think(message) {
    console.log(this.getName(), ': ', message)
    await wait(1000)
  }

  getName() {
    return this.name
  }
}

const bro = new Bro('bro')
const anotherBro = new Bro('another bro')

bro.listen(anotherBro)
anotherBro.listen(bro)
anotherBro.greet()
