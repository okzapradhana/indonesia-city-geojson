const fs = require('fs');
const BASE_PATH = './Indonesia-Postal-And-Area/data/geojson/62';
const OUT_PATH = './indonesia-cities.json';

function getDirectories(dirPath) {
  const paths =
    fs.readdirSync(dirPath)
      .filter(path => fs.lstatSync(`${dirPath}/${path}`).isDirectory())
      .map(path => [path, `${dirPath}/${path}`]);
  return paths;
}

function main() {
  let geofeatures = [];
  try {
    for (let [dirName, dirPath] of getDirectories(BASE_PATH)) {
      for (let [subDirName, subDirPath] of getDirectories(dirPath)) {
        const features = require(`${subDirPath}/${subDirName}.json`).features;
        geofeatures = geofeatures.concat(features);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }

  const geojson = { "type": "FeatureCollection" };
  geojson.features = geofeatures;
  fs.writeFileSync(OUT_PATH, JSON.stringify(geojson));
}

main();