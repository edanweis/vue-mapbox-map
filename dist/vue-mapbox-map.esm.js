import mapboxgl from"mapbox-gl";import MapboxGeocoder from"@mapbox/mapbox-gl-geocoder";var VueMapboxMap={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"mapboxMapDiv"})},staticRenderFns:[],name:"VueMapboxMap",data:function(){return{map:null}},props:{accessToken:{type:String,required:!0},mapStyle:{type:[String,Object],default:"mapbox://styles/mapbox/light-v9"},interactive:{type:Boolean,default:!0},geocoder:{type:Boolean,default:!1},lng:{type:Number,required:!0},lat:{type:Number,required:!0},zoom:{type:Number,default:13},pitch:{type:Number,default:90},bearing:{type:Number,default:0}},mounted:function(){var t=this;mapboxgl.accessToken=this.accessToken,this.map=new mapboxgl.Map({container:this.$refs.mapboxMapDiv,style:this.mapStyle,interactive:this.interactive,center:[this.lng,this.lat],zoom:this.zoom,bearing:this.bearing,pitch:this.pitch}),this.geocoder&&this.map.addControl(new MapboxGeocoder({accessToken:this.accessToken,zoom:18,flyTo:!0,proximity:{longitude:this.lng,latitude:this.lat}})),this.map.on("dragend",function(){t.$emit("dragend")}),this.map.on("zoomend",function(){t.$emit("zoomend")}),this.$emit("mapboxReady",this.map)},destroyed:function(){this.$emit("mapboxDestroyed")},watch:{mapStyle:{deep:!0,handler:function(t){t&&this.map?this.map.setStyle(t):console.error("NOTE -> Unable to update map style to "+t+".")}},lng:function(t){t&&this.map&&this.lat?this.map.jumpTo({center:[this.lng,this.lat]}):console.error("NOTE -> Unable to update centre to "+this.lng+", "+this.lat+".")},lat:function(t){t&&this.map&&this.lng?this.map.jumpTo({center:[this.lng,this.lat]}):console.error("NOTE -> Unable to update centre to "+this.lng+", "+this.lat+".")},zoom:function(t){t&&this.map?this.map.setZoom(t):console.error("NOTE -> Unable to update zoom to "+t+".")},pitch:function(t){t&&this.map?this.map.setPitch(t):console.error("NOTE -> Unable to update pitch to "+t+".")},bearing:function(t){t&&this.map?this.map.setBearing(t):console.error("NOTE -> Unable to update bearing to "+t+".")}}};export default VueMapboxMap;
