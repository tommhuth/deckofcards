import fs from "fs"

function getFile(file) {
    try {
        return JSON.parse(fs.readFileSync(file))
    } catch (e) {
        return {}
    }
}

export default function (file) {
    const files = {
        ...getFile("./public/css-manifest.json"),
        ...getFile("./public/gfx-manifest.json"),
        ...getFile("./public/js-manifest.json")
    }
    let baseFile = file.substring(file.lastIndexOf("/") + 1)
    let resolved = file.substring(0, file.lastIndexOf("/") + 1) + files[baseFile]

    return resolved
}
