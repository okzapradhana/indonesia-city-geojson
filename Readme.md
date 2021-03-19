## **GeoJSON of Indonesia's Cities**
---

### **About**
This repo contains geojson of Indonesia's cities. 

### **Data Source**
The data source is from this repo:
https://github.com/ArrayAccess/Indonesia-Postal-And-Area

But I only need the cities thus I'm not using all the data there.

### **GeoJSON**
Here is `GeoJSON`'s definition from Internet Engineering Task Force(IETF):
> *GeoJSON is a geospatial data   interchange format based on JavaScript
   Object Notation (JSON).  It defines several types of JSON objects and
   the manner in which they are combined to represent data about
   geographic features, their properties, and their spatial extents.
   GeoJSON uses a geographic coordinate reference system, World Geodetic
   System 1984, and units of decimal degrees.*

Basically `GeoJSON` format is like:
```
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

//source: geojson.org
```
`GeoJSON` has some of geometry types that you may see more on: https://tools.ietf.org/html/rfc7946#page-7
 
### **How**
I'm using Javascript with File System Library to read the directories and unify the `json` files there into one file.

Clone the data source repo first to the same directory with this repo. Then run `node fetcher.js` to generate the file


### **Output**
The output is `json` file (in `GeoJSON` format) that contains combined json from all cities in Indonesia

The file size is about 150 MB (Mega Bytes)

### **Resources**
If you want to know more about `GeoJSON`, I suggest you to visit some of this websites:

1. GeoJSON RFC: https://tools.ietf.org/html/rfc7946
2. Wiki GeoJSON: https://en.wikipedia.org/wiki/GeoJSON
3. Try and Preview GeoJSON: http://geojson.io/