const fs = require('fs')
const Handlebars = require('handlebars')

function render(resume) {
  const css = fs.readFileSync(__dirname + '/style.css', 'utf-8')
  const template = fs.readFileSync(__dirname + '/resume.template', 'utf-8')
  return Handlebars.compile(template)({
    css,
    resume,
  })
}

Handlebars.registerHelper('nl2br', function (value) {
  return (value || '').replace(/\n/g, '</p><p>')
})

module.exports = { render }
