var txt1,txt2,txt3,txt4,txt5,latlng;
function getLocationData()
{
        navigator.geolocation.getCurrentPosition(position=>
        {
                 //variables
                //جلب دائرة العرض
                txt1 = position.coords.latitude;
                 // جلب خط الطول
                txt2 = position.coords.longitude;
                //عنوان جوجل مابس مزود بخط الطول و دائرة العرض
                txt3 = 'http://www.google.com/maps/place/'+txt1+','+txt2; 
                // جلب ال timezone
                txt4=new Date().getTimezoneOffset()/-60; 
                //تعبئة الحقول بالبيانات
                document.getElementById("txt1").value=txt1;
                document.getElementById("txt2").value=txt2;
                document.getElementById("txt3").value=txt3;
                document.getElementById("txt4").value=txt4; 
                var map = L.map('map').setView([40.725, -73.985], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
      
        var geocodeService = L.esri.Geocoding.geocodeService();
          geocodeService.reverse().latlng([txt1,txt2]).run(function (error, result) {
            if (error) {
              return"error";
            }
            //جلب المدينة
            txt5=result.address.Region;
            document.getElementById("txt5").value=txt5; 
        });
 });
}
