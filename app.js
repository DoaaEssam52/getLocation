
/*get latitude,longitude,url of google maps including this latitude and longitude and timezone*/
function getLocationData()
{
        navigator.geolocation.getCurrentPosition(position=>
        {
                 //variables
                var txt1,txt2,txt3,txt4,txt5;
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
                
                $.get("https://api.ipdata.co?api-key=test", function(response) {
                txt5=response.city + ", " + response.region;
                console.log(txt5)
                }, "jsonp");
        });
}
