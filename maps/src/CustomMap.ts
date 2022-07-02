
interface Markable{
        lat:number;
        lng:number
}

export default class CustomMap{
    private googleMap:google.maps.Map;
    private mapElement: HTMLElement
    constructor(id:string){
        this.mapElement = document.getElementById(id)!
        this.googleMap = new google.maps.Map(this.mapElement,{zoom:2.25,center:{lat:0,lng:0}});
    }
    addMarker = (item:Markable,label:string):void=>{
        let position = new google.maps.LatLng(item);
        let marker = new google.maps.Marker({position,label});
        marker.setMap(this.googleMap);
    }
}