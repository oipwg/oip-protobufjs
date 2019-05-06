const { exec } = require('child_process')
var fs = require('fs')

const messagesDirectory = './src/messages/'
let protofilePaths = []

fs.readdir(messagesDirectory, function (err, files) {
  if (err) {
    console.error('could not get directory', err)
    process.exit(1)
  }

  function readDirs (path) {
    let files = fs.readdirSync(path)
    files.forEach(function (file, index) {
      if (fs.lstatSync(`${path}${file}`).isDirectory()) {
        let updatedPath = `${path}${file}/`
        readDirs(updatedPath)
      } else {
        protofilePaths.push(`${path}${file}`)
      }
    })
  }

  files.forEach(function (file, index) {
    // console.log(fs.lstatSync(`${messagesDirectory}${file}`).isDirectory())
    if (fs.lstatSync(`${messagesDirectory}${file}`).isDirectory()) {
      readDirs(`${messagesDirectory}${file}/`)
    } else {
      protofilePaths.push(`${messagesDirectory}${file}`)
    }
  })

  const compileJson = `pbjs -t json ${protofilePaths.join(' ')} -o ./src/compiled/json/compiled.json`
  const compileJsonModules = `pbjs -t json-module ${protofilePaths.join(' ')} -o ./src/compiled/jsonModules/compiled.json`
  const compileProto2 = `pbjs -t proto2 ${protofilePaths.join(' ')} -o ./src/compiled/proto2/compiled.proto`
  const compileProto3 = `pbjs -t proto3 ${protofilePaths.join(' ')} -o ./src/compiled/proto3/compiled.proto`
  const compileStaticJs = `pbjs -t static ${protofilePaths.join(' ')} -o ./src/compiled/static/compiled.js`
  const compileStaticModules = `pbjs -t static-module ${protofilePaths.join(' ')} -o ./src/compiled/staticModules/compiled.js`

  const compileScripts = [compileJson, compileJsonModules, compileProto2, compileProto3, compileStaticJs, compileStaticModules]

  for (let script of compileScripts) {
    exec(script, function (error, stdout, stderr) {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`${stdout}`)
      console.log(`${stderr}`)
    })
  }
})
