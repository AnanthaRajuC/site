const dayjs = require('dayjs')
const pkg = require('./package.json')

const capitalize = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('')

const pkgName = capitalize(pkg.name)
const pkgAuthor = pkg.author
const pkgDescription = pkg.description
const pkgRepo = pkg.repository

module.exports = {
  name: pkgName,
  description: pkgDescription,
  url: 'https://mflash.dev',
  favicon: 'https://raw.githubusercontent.com/Microflash/site/main/static/google-touch-icon.png',
  maintainer: pkgAuthor,
  copyright: `Copyright ${dayjs().year()} ${pkgAuthor}`,
  prefs: {
    editContext: `${pkgRepo.replace(/.git$/g, '')}/edit/main`,
    maxTocDepth: 3,
    outdationPeriod: 365 // in days
  },
  paths: {
    draft: '.gitlab/drafts',
    search: {
      dir: './static',
      name: 'search.json'
    },
    sprite: '/assets/images'
  },
  search: {
    shouldSort: true,
    includeMatches: true,
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.3,
    location: 0,
    distance: 600,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      'title',
      'topics'
    ]
  }
}
