//object constructor
class brunchtracker {
    constructor(title, address, nhd, opentime, website, lat, lng, placeId) {
        this.title = title;
        this.address = address;
        this.nhd = nhd;
        this.opentime = opentime;
        this.website = website;
        this.lat = lat;
        this.lng = lng;
        this.pId = placeId;
    }
}

//change https to http
var brunchArr = [
  new brunchtracker("82nd Street Bar and Grill", "5028 SE 82nd", "SE", "9:00 AM", "http://www.yelp.com/biz/82nd-street-bar-and-grill-portland", 45.486097, -122.578478, 'ChIJA8DisDyglVQR6lZdBZjs2wQ'),
  new brunchtracker("Accanto", "2838 SE Belmont", "SE", "10:00 AM", "http://accantopdx.com", 45.516269, -122.636227, 'ChIJuew0jZaglVQRsDcgdKVrMd4'),
  new brunchtracker("Alderman's Tavern", "71 SW 2nd", "SW", "9:00 AM", "http://www.aldermanspdx.com", 45.522244, -122.672443, 'ChIJfV1zGQcKlVQR5mtyBr11tYk'),
  new brunchtracker("Alto Bajo", "310 SW Stark", "SW", "7:00 AM", "http://altobajopdx.com", 45.520247, -122.674767, 'ChIJlV-0gQYKlVQRdy1bfiZqCKY'),
  new brunchtracker("Andina", "1314 NW Glisan", "NW", "11:00 AM", "http://www.andinarestaurant.com", 45.526328, -122.684578, 'ChIJ1bXhuPgJlVQRD9JEUHsIBis'),
  new brunchtracker("Ankeny Tap & Table", "2724 SE Ankeny", "SE", "10:00 AM", "http://www.ankenypdx.com/#welcome", 45.521993, -122.637737, 'ChIJ533W-b6glVQR8x4Mn-RWP90'),
  new brunchtracker("Anna Banannas NW", "1214 NW 21st", "NW", "7:00 AM", "http://annabannanasnw.com/site", 45.531674, -122.694368, 'ChIJSZks3_oJlVQRJOLaGrDsVC0'),
  new brunchtracker("Arleta Library Bakery Cafe", "5513 SE 72nd", "SE", "8:30 AM", "http://arletalibrary.com", 45.482768, -122.589478, 'ChIJHairRBeglVQRPL86SNwYweE'),
  new brunchtracker("Arthur's Diner (Rialto)", "417 SW Alder", "SW", "9:00 AM", "http://rialtopoolroom.com/index.php/arthurs-diner", 45.519458, -122.676533, 'ChIJydhmyAUKlVQREUN6VEAqH3w'),
  new brunchtracker("Autentica", "5507 NE 30th", "NE", "10:00 AM", "http://www.autenticaportland.com", 45.562874, -122.635142, 'ChIJGz5WduemlVQRE17ysIDLmBQ'),
  new brunchtracker("Bad Habit Room", "5433 N Michigan", "N", "9:00 AM", "http://badhabitroom.com", 45.562337, -122.677016, 'ChIJTb0pSAynlVQRpAd3gcSovUQ'),
  new brunchtracker("Bare Bones Cafe", "2908 SE Belmont", "SE", "9:00 AM", "http://www.barebonescafe.net", 45.516322, -122.635814, 'ChIJCSe1k5aglVQR4ZODYv_sJxE'),
  new brunchtracker("Batter Griddle & Drinkery", "4425 NE Fremont", "NE", "8:00 AM", "http://www.batterpdx.com", 45.548422, -122.617843, 'ChIJn26KEdOmlVQRqxDEd1zGNRw'),
  new brunchtracker("Beast (Sundays, reservations only)", "5425 NE 30th", "NE", "10:00 AM", "http://www.beastpdx.com", 45.562402, -122.635071, 'ChIJ006kfOemlVQRi7M86oKahws'),
  new brunchtracker("Beeswing", "4318 NE Cully", "NE", "8:00 AM", "http://beeswingpdx.com", 45.554021, -122.601706, 'ChIJEctSj8qmlVQRgBdRZnDM9cg'),
  new brunchtracker("Beez Holgate Station", "4507 SE 27th", "SE", "10:00 AM", "http://beezholgatestation.com", 45.490144, -122.638766, 'ChIJT9j0YIQKlVQRzDKkmtfY6iU'),
  new brunchtracker("Bergerac (Sundays only)", "5520 SE Woodstock", "SE", "9:30 AM", "http://bergeracpdx.com", 45.478983, -122.606284, 'ChIJyedl3giglVQRPMURICWkxfg'),
  new brunchtracker("Bertie Lou's", "8051 SE 17th", "SE", "8:00 AM", "http://www.yelp.com/biz/bertie-lous-portland", 45.464918, -122.647193, 'ChIJv3IZFcUKlVQRYt4E61df-uw'),
  new brunchtracker("Bijou Cafe", "132 SW 3rd", "SW", "8:00 AM", "http://bijoucafepdx.com", 45.517417, -122.690221, 'ChIJb2s7EgMKlVQRwGOchKwvZPA'),
  new brunchtracker("Bird + Bear", "2801 SE Holgate", "SE", "9:00 AM", "http://www.birdbearpdx.com", 45.490552, -122.637388, 'ChIJwSeNfYQKlVQRHvk2PFyyG1M'),
  new brunchtracker("Bluehour", "250 NW 13th", "NW", "10:00 AM", "http://www.bluehouronline.com", 45.524872, -122.684039, 'ChIJMQ7CbQIKlVQRd6ezw-AIxC8'),
  new brunchtracker("Bomber Restaurant", "13515 SE McLaughlin", "SE", "6:00 AM", "http://www.thebomber.com", 45.425342, -122.634871, 'ChIJtflArPp0lVQRQfPVj_ToY6E'),
  new brunchtracker("Bottle + Kitchen", "50 SW Morrison", "SW", "7:00 AM", "http://www.bottlekitchen.com/", 45.517373, -122.673259, 'ChIJC1Rc51GhlVQRi--jcc2M39g'),
  new brunchtracker("Bread & Honey Cafe", "3526 N Vancouver", "N", "8:00 AM", "http://www.breadandhoneycafe.com", 45.548658, -122.667910, 'ChIJxbxaiUCnlVQR9FYc0ig-stE'),
  new brunchtracker("Bread and Ink Cafe", "3610 SE Hawthorne", "SE", "8:00 AM", "http://www.breadandinkcafe.com", 45.511934, -122.626527, 'ChIJpbw-9I2glVQRpQUQ4z1a04Q'),
  new brunchtracker("Bridge City Taproom", "620 SE 122nd", "SE", "9:00 AM", "http://www.yelp.com/biz/bridge-city-taproom-portland", 45.517967, -122.537267, 'ChIJp8QfJZChlVQRONsDy4CtI5A'),
  new brunchtracker("Bridges Cafe", "2316 NE MLK", "NE", "8:00 AM", "http://www.bridgescafeandcatering.net", 45.539832, -122.66116, 'ChIJ87ftZUinlVQRW1QmvjeymYQ'),
  new brunchtracker("Brix Tavern", "1338 NW Hoyt", "NW", "9:30 AM", "http://www.brixtavern.com/", 45.526980, -122.684905, 'ChIJYXNYxfgJlVQRVtbMaPyTNME'),
  new brunchtracker("Broder Nord", "2240 N Interstate, #160", "N", "8:00 AM", "http://www.broderpdx.com", 45.539248, -122.674424, 'ChIJ8-KumFqnlVQRyTdcK1RP-Vc'),
  new brunchtracker("Brunch Box", "620 SW 9th", "SW", "8:00 AM", "http://brunchboxpdx.com/", 45.520002, -122.680823, 'ChIJ5V6vJgQKlVQR6yHjUUBnbck'),
  new brunchtracker("Buckman Public House", "1310 SE Stark", "SE", "11:00 AM", "http://buckmanpublichouse.com", 45.518973, -122.652095, 'ChIJuWOGkKOglVQRVCbn5Zh2-WM'),
  new brunchtracker("Bunk Bar Water", "1028 SE Water", "SE", "11:00 AM", "http://www.bunksandwiches.com/bunkbar", 45.515316, -122.665633, 'ChIJ8XIZ2AsKlVQRal3nDHulBZk'),
  new brunchtracker("Bunk Bar Wonder", "128 NE Russell", "NE", "11:00 AM", "http://www.bunksandwiches.com/bunkbaratthewonder", 45.540673, -122.663477, 'ChIJaXPFw0inlVQR1yfrcRQ08rA'),
  new brunchtracker("C Bar", "2880 SE Gladstone", "SE", "10:00 AM", "http://cbarportland.com/", 45.493205, -122.635934, 'ChIJE1ORKoIKlVQRRH7WmIJTTDc'),
  new brunchtracker("Cadillac Cafe", "1801 NE Broadway", "NE", "7:00 AM", "http://cadillaccafepdx.com/", 45.535249, -122.647447, 'ChIJOZHEj8qglVQRZ1kRodWvq4Y'),
  new brunchtracker("Cafe Broder", "2508 SE Clinton", "SE", "9:00 AM", "http://broderpdx.com/", 45.50318, -122.64015, 'ChIJ95u3MoKglVQRLAr-IKz8YQk'),
  new brunchtracker("Cameo Cafe", "8111 NE Sandy", "NE", "6:30 AM", "http://www.cameocafe.com/", 45.55226, -122.579407, 'ChIJC1Rc51GhlVQRi--jcc2M39g'),
  new brunchtracker("Casa Vaca Taqueria", "7800 SW Capitol Hwy", "SW", "10:00 AM", "http://www.casavacapdx.com/", 45.467857, -122.713015, 'ChIJfcKQm3MLlVQRs3AgChiHmJU'),
  new brunchtracker("Cheese & Crack Shop", "22 SE 28th", "SE", "8:00 AM", "http://www.cheeseandcrack.com", 45.522443, -122.637143, 'ChIJp5V-Ar-glVQR4YOIy-o0qzU'),
  new brunchtracker("Cheryl's on 12th", "1135 SW Washington", "SW", "8:00 AM", "http://www.cherylson12th.com/restaurant", 45.521998, -122.683093, 'ChIJb2s7EgMKlVQRwGOchKwvZPA'),
  new brunchtracker("Chez Machin", "3553 SE Hawthorne", "SE", "9:00 AM", "http://www.chezmachin.com/", 45.512208, -122.627581, 'ChIJAd5BBpKglVQRQIfXk1UdXOk'),
  new brunchtracker("Cibo", "3539 SE Division", "SE", "10:30 AM", "http://cibopdx.com", 45.504891, -122.627768, 'ChIJ5cP5m4iglVQRmEW89JsbPKA'),
  new brunchtracker("Circa 33", "3348 SE Belmont", "SE", "10:00 AM", "http://circa33.com", 45.516313, -122.629941, 'ChIJFWl7f5SglVQRbH4kJTktfBk'),
  new brunchtracker("City State Diner", "128 NE 28th", "NE", "8:00 AM", "http://www.citystatediner.com", 45.52405, -122.637063, 'ChIJoUGSN7-glVQRUNbGky0NFPo'),
  new brunchtracker("Coquine", "6839 SE Belmont", "SE", "8:00 AM", "http://www.coquinepdx.com", 45.517096, -122.592392, 'ChIJj5vTbf6glVQRafj1UTq2hk4'),
  new brunchtracker("Costello's Travel Caffe", "2222 NE Broadway", "NE", "8:00 AM", "http://www.costellostravelcaffe.com", 45.534779, -122.64243, 'ChIJJQ7WuMuglVQR4WoiSNjL7r8'),
  new brunchtracker("Country Cat", "7937 SE Stark", "SE", "9:00 AM", "http://thecountrycat.net/#about", 45.519311, -122.581655, 'ChIJf7vKxAahlVQRmcAN_T5w3UQ'),
  new brunchtracker("Cup & Saucer Cafe", "3566 SE Hawthorne", "SE", "7:00 AM", "http://www.cupandsaucercafe.com/#!map/clav", 45.511915, -122.627226, 'ChIJcylr9o2glVQRBR9ex8drm0I'),
  new brunchtracker("Daily Cafe", "902 NW 13th", "NW", "9:00 AM", "http://dailyinthepearl.com/", 45.529527, -122.684097, 'CChIJl_xnlP4JlVQR1YWPwzP-bug'),
  new brunchtracker("Daily Feast", "837 SW 11th", "SW", "9:00 AM", "http://thedailyfeastpdx.com/menu-1/", 45.519117, -122.683970, 'ChIJIaCrSBsKlVQRdJ8rikNVubM'),
  new brunchtracker("Delta Cafe", "4607 SE Woodstock", "SE", "9:00 AM", "http://www.deltacafepdx.com/", 45.479384, -122.615186, 'ChIJqUwTs6AKlVQR3yka_MCVlDU'),
  new brunchtracker("Dot's", "2521 SE Clinton", "SE", "10:00 AM", "http://dotscafeportland.com/", 45.503465, -122.639862, 'ChIJOXpGzYOglVQR5PrsyWcnsVM'),
  new brunchtracker("Doug Fir Lounge", "830 E Burnside", "NE", "7:00 AM", "http://www.dougfirlounge.com/", 45.522641, -122.656824, 'ChIJJ3w0dqWglVQRHyqljAif6jI'),
  new brunchtracker("EastBurn", "1800 E Burnside", "NE", "10:00 AM", "http://eastburn.pagecloud.com/", 45.522706, -122.647316, 'ChIJ4fAWDLuglVQRZWSJdYBYIjs'),
  new brunchtracker("Eisenhower Bagel House", "4350 N Interstate", "N", "8:00 AM", "http://eisenhowerbagelhouse.com", 45.555353, -122.681910, 'ChIJpzTeWmmnlVQRoMVfknEpyt8'),
  new brunchtracker("Expatriate", "5425 NE 30th", "NE", "10:00 AM", "http://expatriatepdx.com", 45.562399, -122.634589, 'ChIJqbJZfOemlVQR4uM0Bd9FJOA'),
  new brunchtracker("Fat City Cafe", "7820 SW Capitol Hwy", "SE", "6:30 AM", "http://www.yelp.com/biz/fat-city-caf%C3%A9-portland-3", 45.467757, -122.713249, 'ChIJHbBimnMLlVQRtGKYxNRRqFY'),
  new brunchtracker("Feastworks", "1325 SE Tacoma", "SE", "8:00 AM", "http://www.feastworks.com/", 45.464498, -122.652365, 'ChIJ61cYu8dylVQRkAJ9VtM7wys'),
  new brunchtracker("Fern Kitchen", "2311 SE 50th", "SE", "8:00 AM", "http://fernkitchen.com", 45.506350, -122.611227, 'ChIJEap1-V-glVQRnVq3j5Q7_o0'),
  new brunchtracker("Ford Food & Drink", "2505 SE 11th", "SE", "9:00 AM", "http://www.fordfoodanddrink.com", 45.504755, -122.654928, 'ChIJoZlHNHcKlVQR6GEPSjYAitk'),
  new brunchtracker("Fuller's Coffee Shop", "136 NW 9th", "NW", "8:00 AM", "http://www.yelp.com/biz/fullers-coffee-shop-portland", 45.524301, -122.679874, 'ChIJV9ZhgAEKlVQRlz14PosRTwQ'),
  new brunchtracker("Gateway Breakfast House", "11411 NE Halsey", "NE", "7:00 AM", "http://www.gatewaybreakfasthouse.com", 45.533717, -122.544315, 'ChIJBfQKJXyhlVQRmVFbs5ksAUc'),
  new brunchtracker("Genie's Cafe", "1101 SE Division", "SE", "8:00 AM", "http://www.geniesdivision.com", 45.505, -122.654581, 'ChIJO7-oMHcKlVQRJmiYGUP5PzY'),
  new brunchtracker("Genie's Too", "4800 SE Hawthorne", "SE", "8:00 AM", "http://www.spaceroomlounge.com", 45.511851, -122.612884, 'ChIJJS4HjvOglVQRNcOvQSUIR7g'),
  new brunchtracker("Gigi's Cafe", "6320 SW Capitol Hwy", "SW", "8:00 AM", "http://www.gigiscafepdx.com", 45.478212, -122.694204, 'ChIJcZxaMgcLlVQREeicz0VVsWA'),
  new brunchtracker("Gino's", "8051 SE 13th", "SE", "10:00 AM", "http://ginossellwood.com", 45.464898, -122.653221, 'ChIJ5TJHBdsKlVQRbJ_kKzbgVgE'),
  new brunchtracker("Good Earth Cafe (Saturdays only)", "1139 SW 3rd", "SW", "8:00 AM", "http://www.goodearthcafepdx.com", 45.515316, -122.677127, 'ChIJp_Crmg8KlVQRz84lU3GElYE'),
  new brunchtracker("Gracie's Restaurant", "729 SW 15th", "SW", "7:00 AM", "http://www.hoteldeluxeportland.com/eat-drink/gracies/", 45.520919, -122.687833, 'ChIJ1_4w5hwKlVQRn83HvScauNQ'),
  new brunchtracker("Gravy", "3957 N Mississippi", "N", "7:30 AM", "http://gravyrestaurant.com", 45.551708, -122.675706, 'ChIJr8AyrWunlVQR_w411-qtqkw'),
  new brunchtracker("Guilder", "2393 NE Fremont", "NE", "8:00 AM", "http://www.guildercafe.com", 45.548248, -122.641178, 'ChIJ5VLGFC-nlVQRAAWf2XIbujM'),
  new brunchtracker("Ha VL", "2738 SE 82nd, #102", "SE", "8:00 AM", "http://www.yelp.com/biz/ha-vl-sandwiches-portland", 45.502691, -122.578286, 'ChIJ0YvmPUyglVQRQlRY5M4-h7c'),
  new brunchtracker("Hale Pele", "2733 NE Broadway", "NE", "10:00 AM", "http://halepele.com/", 45.535379, -122.637307, 'ChIJfdqyJsyglVQR-E1VNRS1jK4'),
  new brunchtracker("Harlow", "3632 SE Hawthorne", "SE", "8:00 AM", "http://www.harlowpdx.com/", 45.5119, -122.62609, 'ChIJ05kM9o2glVQRi4KO5kvwZjI'),
  new brunchtracker("Hawthorne Hophouse", "4111 SE Hawthorne", "SE", "10:00 AM", "http://oregonhophouse.com/", 45.512159, -122.619617, 'ChIJ97f1K42glVQR0GhYbU4RVvU'),
  new brunchtracker("Hazel Room", "3279 SE Hawthrone", "SE", "8:00 AM", "http://www.thehazelroom.com", 45.512275, -122.631044, 'ChIJfSctvpGglVQRmgETCDkJhAs'),
  new brunchtracker("Headwaters", "1001 SW Broadway", "SW", "8:00 AM", "http://www.headwaterspdx.com", 45.517139, -122.681119, 'ChIJ0xjPyRoKlVQRDurQawG8VEg'),
  new brunchtracker("Helser's on Alberta", "1538 NE Alberta", "NE", "7:00 AM", "http://helsersonalberta.com", 45.558989, -122.648886, 'ChIJvUFaDR-nlVQRJ0OUE9b_CBU'),
  new brunchtracker("Henry Higgins Boiled Bagels (NE)", "523 NE 19th", "NE", "6:30 AM", "http://www.hhboiledbagels.com", 45.526898, -122.646791, 'ChIJK5hlVreglVQRlUc2NmRgdMQ'),
  new brunchtracker("Henry Higgins Boiled Bagels (SE)", "6420 SE Foster", "SE", "6:30 AM", "http://www.hhboiledbagels.com", 45.489304, -122.596490, 'ChIJiR_-Si-hlVQR3qhQNdg9z8c'),
  new brunchtracker("HK Cafe", "4410 SE 82nd", "SE", "9:30 AM", "http://www.hkcafeportland.com/", 45.490505, -122.577961, 'ChIJ5xszKTqglVQROqj7m5PXQUw'),
  new brunchtracker("Hobnob Grill", "3350 SE Morrison", "SE", "9:00 AM", "http://www.hobnobgrille.com/", 45.517017, -122.629747, 'ChIJEZGahpSglVQR8ktZ2UxYr5Q'),
  new brunchtracker("Holman's", "15 SE 28th", "SE", "8:00 AM", "http://www.holmanspdx.com", 45.522573, -122.637506, 'ChIJo89E_b6glVQRZ-r6Erd1RK4'),
  new brunchtracker("Hour Glass Pub & Eatery", "7401 NE Glisan", "NE", "7:00 AM", "http://www.yelp.com/biz/hour-glass-pub-and-eatery-portland", 45.526587, -122.586551, 'ChIJOyPr6BqhlVQR2Z1eheVo86I'),
  new brunchtracker("HunnyMilk", "40 NE 28th", "NE", "9:00 AM", "http://www.hunnymilk.com", 45.523465, -122.637056, 'ChIJY2asPb-glVQR6Acys6f-060'),
  new brunchtracker("Iconic Lounge", "2226 NE Broadway", "NE", "9:00 AM", "http://www.iconiclounge.com/#refresh-relax", 45.534779, -122.642324, 'ChIJUarQu8uglVQRPC0Xq-X-cBo'),
  new brunchtracker("Imperial", "410 SW Broadway", "SW", "8:00 AM", "http://www.imperialpdx.com", 45.521064, -122.678349, 'ChIJb-oPEwQKlVQRne8t_q7G874'),
  new brunchtracker("Interurban", "4057 N Mississippi", "N", "10:00 AM", "http://www.interurbanpdx.com", 45.552956, -122.675744, 'ChIJBSVTC2unlVQRqtsxJLQjX5I'),
  new brunchtracker("Irving Street Kitchen", "701 NW 13th", "NW", "10:00 AM", "http://www.irvingstreetkitchen.com", 45.528062, -122.684501, 'ChIJAyoi1v4JlVQRXpKtPOoifJM'),
  new brunchtracker("Isabel Pearl", "330 NW 10th", "NW", "8:00 AM", "http://www.isabelpearlpdx.com", 45.525693, -122.680975, 'ChIJiQqb-gEKlVQR2JnPlLG_6o0'),
  new brunchtracker("J & M Cafe", "537 SE Ash", "SE", "8:00 AM", "http://jandmcafepdx.com", 45.521617, -122.659897, 'ChIJoerhDaaglVQRwRUWipyDdNA'),
  new brunchtracker("Jackrabbit", "830 SW 6th", "SW", "9:30 AM", "http://www.gojackrabbitgo.com/menus/breakfast", 45.517903, -122.678962, 'ChIJCQtwFQUKlVQR8NOCoNEYiRk'),
  new brunchtracker("Jacqueline", "2039 SE Clinton", "SE", "9:00 AM", "http://www.jacquelinepdx.com/brunch", 45.503510, -122.644861, 'ChIJw-7RgXgKlVQRphTjNw7QwvU'),
  new brunchtracker("Jam on Hawthorne", "2239 SE Hawthorne", "SE", "7:30 AM", "http://www.jamonhawthorne.com", 45.512245, -122.642719, 'ChIJi4fI1ZuglVQRKfnLrpsIJN8'),
  new brunchtracker("John's Cafe (Saturdays only)", "301 NW Broadway", "NW", "7:00 AM", "http://www.yelp.com/biz/johns-cafe-portland", 45.525325, -122.677846, 'ChIJefLDrQEKlVQRmrHr4Y-Xy9k'),
  new brunchtracker("JoLa Cafe", "5915 SW Corbett", "SW", "6:00 AM", "http://www.jolacafe.com/", 45.480975, -122.677031, 'ChIJGdkPaPkKlVQRx0kUdpp4UKc'),
  new brunchtracker("Junior's Cafe", "1742 SE 12th", "SE", "8:00 AM", "http://www.juniorscafepdx.com", 45.510207, -122.653519, 'ChIJlxowi3UKlVQRuoUyl71l9bg'),
  new brunchtracker("Just Bob", "2403 NE Alberta", "NE", "7:30 AM", "http://www.justbobpdx.com", 45.559153, -122.640859, 'ChIJ1bhLwN-mlVQREJ1_Mto3VyA'),
  new brunchtracker("Kelly's Olympian", "426 SW Washington", "SW", "10:00 AM", "http://kellysolympian.com/events", 45.519953, -122.676537, 'ChIJufujNAQKlVQRtqSUgHwK0U0'),
  new brunchtracker("Kenny & Zuke's Delicatessen", "1038 SW Stark", "SW", "8:00 AM", "http://www.kennyandzukes.com", 45.522067, -122.681875, 'ChIJCRGhoQMKlVQRE6fd0Yj8MpM'),
  new brunchtracker("Kings Omelets Restaurant", "10711 NE Halsey", "NE", "7:00 AM", "http://www.yelp.com/biz/kings-omelets-restaurant-portland-2", 45.533724, -122.552804, 'ChIJhXdS-3qhlVQRJ6FgCn-YJCU'),
  new brunchtracker("Kornblatt's", "628 NW 23rd", "NW", "7:00 AM", "http://www.kornblattsdelipdx.com", 45.527443, -122.698324, 'ChIJqcIdH_EJlVQR9ERunGWHNaU'),
  new brunchtracker("La Calaca Comelona", "2304 SE Belmont", "SE", "10:00 AM", "http://www.lacalacacomelona.com/", 45.51625, -122.642176, 'ChIJf0JijJeglVQRBJYZN2y4Rk8'),
  new brunchtracker("La Moule (Sundays only)", "2500 SE Clinton", "SE", "10:00 AM", "http://www.lamoulepdx.com", 45.503239, -122.640264, 'ChIJA7loLoKglVQRpGlMuw1vq9E'),
  new brunchtracker("La Panza Cafe", "2425 SE 26th", "SE", "9:00 AM", "http://www.lapanzacafe.com/", 45.505023, -122.63989, 'ChIJmQ7ZmIOglVQRCdhUggsp0UQ'),
  new brunchtracker("Lamp", "3023 SE Milwaukie", "SE", "10:00 AM", "http://www.thelamppdx.com/", 45.500716, -122.654527, 'ChIJXSnaVHoKlVQRIKCcqt0VLlo'),
  new brunchtracker("Lauretta Jean's", "3402 SE Division", "SE", "8:00 AM", "http://www.laurettajeans.com/", 45.504606, -122.629434, 'ChIJbRVUPYaglVQRrzr1-ANe7Co'),
  new brunchtracker("Le Bistro Montage", "301 SE Morrison", "SE", "10:00 AM", "http://www.montageportland.com/", 45.51776, -122.662654, 'ChIJyalL4gkKlVQRAN6sa0AzhsU'),
  new brunchtracker("Leaky Roof Gastro Pub", "1538 SW Jefferson", "SW", "9:00 AM", "http://www.theleakyroof.com/", 45.519964, -122.673864, 'ChIJS7x45gYKlVQRojNDqG9C17Y'),
  new brunchtracker("Little T American Baker", "2600 SE Division", "SE", "8:00 AM", "http://littletbaker.com/division", 45.504668, -122.639392, 'ChIJFWqwooOglVQRY2BkWFcTXu8'),
  new brunchtracker("Local 66 Bar and Grill", "6618 SE Powell", "SE", "10:00 AM", "http://www.local66bar.com", 45.497240, -122.594962, 'ChIJmXBPyEOglVQRsF6SkDXuDxw'),
  new brunchtracker("Lompoc Fifth Quadrant", "3901 N Williams", "N", "10:00 AM", "http://lompocbrewing.com/#/locations", 45.551008, -122.667037, 'ChIJj5TW6T-nlVQRfMwAUIm_Vw8'),
  new brunchtracker("Maplewood Coffee & Tea", "5206 SW Custer", "SW", "8:00 AM", "http://maplewoodcoffeeandtea.com", 45.469897, -122.730824, 'ChIJKV5u6oILlVQRkDvzKrXEgCM'),
  new brunchtracker("Mehri's Bakery and Cafe", "6923 SE 52nd", "SE", "8:00 AM", "http://mehris.com", 45.472746, -122.610034, 'ChIJ8c1bAKkKlVQRST5PRcM_FLI'),
  new brunchtracker("Midpoint Food & Drink", "3524 SE 52nd", "SE", "8:00 AM", "http://www.yelp.com/biz/midpoint-food-and-drink-portland", 45.497085, -122.608647, 'ChIJSeDEA2aglVQRSZea3Ilo4vM'),
  new brunchtracker("Milk glass Mrkt", "2150 N Killingsworth", "N", "9:00 AM", "http://www.milkglassmrkt.com", 45.562559, -122.689802, 'ChIJ1SPiUXSnlVQR-hFHhihcop0'),
  new brunchtracker("Milo's City Cafe", "1325 NE Broadway", "NE", "7:30 AM", "http://www.miloscitycafe.com", 45.535211, -122.651847, 'ChIJe0SfMLWglVQRyOGMDIvHbqI'),
  new brunchtracker("Miss Delta", "3950 N Mississippi", "N", "10:00 AM", "http://www.missdeltapdx.net", 45.551623, -122.675309, 'ChIJ52X4UmqnlVQRE7GnYdC6Fvs'),
  new brunchtracker("Mother's Bistro & Bar", "212 SW Stark", "SW", "8:00 AM", "http://www.mothersbistro.com", 45.519964, -122.673864, 'ChIJ5V0qcAYKlVQRcYiPk80LC4g'),
  new brunchtracker("Muscadine", "1465 NE Prescott, #F", "NE", "8:00 AM", "http://www.apizzascholls.com", 45.555655, -122.650411, 'ChIJxyRiQCKnlVQRvIpTr7-TfU0'),
  new brunchtracker("My Father's Place", "523 SE Grand", "SE", "6:00 AM", "http://myfathersplacepdx.com", 45.519033, -122.660868, 'ChIJVwSCGqeglVQR7NxbQKUascY'),
  new brunchtracker("Navarre", "10 NE 28th", "NE", "9:30 AM", "http://www.navarreportland.com", 45.523128, -122.63701, 'ChIJqxM-Gb-glVQRI38A12wUxHI'),
  new brunchtracker("NEPO 42", "5403 NE 42nd", "NE", "10:00 AM", "http://www.nepo42.com", 45.562142, -122.620786, 'ChIJadG2_MOmlVQRVf-TH0cINsA'),
  new brunchtracker("New Deal Cafe", "5250 NE Halsey", "NE", "8:00 AM", "http://www.ndpdx.com", 45.533562, -122.609020, 'ChIJbQWtTCehlVQR50xSOhkF-9c'),
  new brunchtracker("Night Light Lounge", "2100 SE Clinton", "SE", "10:00 AM", "http://www.nightlightlounge.net/", 45.503251, -122.644453, 'ChIJjfxsgngKlVQR82RQeNwhjmI'),
  new brunchtracker("Nite Hawk Cafe & Lounge", "6423 N Interstate", "N", "7:00 AM", "http://thenitehawk.net", 45.569458, -122.682371, 'ChIJwy59OaenlVQRGkQbg6XjYP8'),
  new brunchtracker("Observatory", "8115 SE Stark", "SE", "9:00 AM", "http://www.theobservatorypdx.com", 45.519256, -122.580286, 'ChIJu9pp4gahlVQRK2-syvMVfQ4'),
  new brunchtracker("Off the Waffle", "2601 SE Clinton", "SE", "8:00 AM", "http://offthewaffle.com/", 45.503733, -122.639479, 'ChIJ3fc-z4OglVQRBp6urOKAAFo'),
  new brunchtracker("Old Salt Marketplace", "5027 NE 42nd", "NE", "9:00 AM", "http://www.oldsaltpdx.com", 45.559378, -122.620682, 'ChIJAdksMcSmlVQRPbYEYmkWpeA'),
  new brunchtracker("Oliver's Cafe", "8931 SE Foster, #105", "SE", "8:00 AM", "http://oliverscafepdx.com", 45.480763, -122.571055, 'ChIJya7TLCGglVQRqM2Y9SdKLfc'),
  new brunchtracker("Olympic Provisions", "107 SE Washington", "SE", "9:00 AM", "http://www.olympiaprovisions.com/", 45.519022, -122.664279, 'ChIJDzuJgKeglVQRXyGLZ_NJERA'),
  new brunchtracker("OP Wurst Sausage Bar", "3384 SE Division", "SE", "10:00 AM", "http://www.opwurst.com", 45.504564, -122.629880, 'ChIJcw4rPoaglVQR3C39HOjU80k'),
  new brunchtracker("Opal", "614 SW Park", "SW", "6:30 AM", "http://opalbarpdx.com", 45.519941, -122.680246, 'ChIJ06PONwUKlVQRIlhXkAz9kac'),
  new brunchtracker("Original Dinerant", "300 SW 6th", "SW", "7:30 AM", "http://www.originaldinerant.com/", 45.521436, -122.676916, 'ChIJwdOAHgQKlVQR16Hw9vj-8MM'),
  new brunchtracker("Original Hotcake House (24 hours)", "1002 SE Powell", "SE", "0:01 AM", "http://www.hotcakehouse.com/", 45.50114, -122.65558, 'ChIJ7ctb9noKlVQRUDHDKivog2g'),
  new brunchtracker("Original Pancake House", "8601 SW 24th", "SW", "7:00 AM", "http://www.originalpancakehouse.com", 45.462645, -122.702293, 'ChIJb-4DtmwLlVQRC0FNHD-VVHs'),
  new brunchtracker("Overlook Restaurant", "1332 N Skidmore", "N", "6:00 AM", "http://www.yelp.com/biz/overlook-restaurant-portland", 45.554461, -122.680621, 'ChIJyaVnOGynlVQRE0_gTp5jtOE'),
  new brunchtracker("P's and Q's", "1301 NE Dekum", "NE", "9:00 AM", "http://www.psandqsmarket.com/", 45.571988, -122.651588, 'ChIJ8zehD_ymlVQRm9ZAJ55eBAI'),
  new brunchtracker("Pambiche", "2811 NE Glisan", "NE", "9:00 AM", "http://www.pambiche.com/", 45.526632, -122.636827, 'ChIJF01MZceglVQRCidFEomPY2k'),
  new brunchtracker("Papa Haydn (Sundays only)", "5829 SE Milwaukie", "SE", "10:00 AM", "http://www.papahaydn.com/papa-haydn-east", 45.480386, -122.649730, 'ChIJrTV9O5MKlVQRaxWAWLg269M'),
  new brunchtracker("Paradox Cafe", "3439 SE Belmont", "SE", "8:30 AM", "http://paradoxorganiccafe.com/", 45.516631, -122.628676, 'ChIJsUkMSJgKlVQR1RHj1QSed6E'),
  new brunchtracker("Patton Maryland", "5101 N Interstate", "N", "10:00 AM", "http://pattonmaryland.com", 45.555494, -122.675436, 'ChIJEQY333KnlVQRN2bA2ed4VhE'),
  new brunchtracker("Pearl Tavern", "3231 NW 11th", "NW", "10:00 AM", "http://www.pearltavern.com", 45.524952, -122.682333, 'ChIJw0wFGgIKlVQRKEyCL6W2xL4'),
  new brunchtracker("Pepper Box", "932 SE Morrison", "SE", "8:30 AM", "http://www.pepperboxpdx.com/", 45.517011, -122.655966, 'ChIJfR5TZUinlVQR0xIqShHJbSI'),
  new brunchtracker("Petisco", "1411 NE Broadway", "NE", "9:00 AM", "http://petiscopdx.com/", 45.535217, -122.651077, 'ChIJ7xfsR7WglVQR7T3S_ylZcpI'),
  new brunchtracker("Petite Provence (NE)", "1824 NE Alberta", "NE", "7:00 AM", "http://www.provencepdx.com/ne-alberta-portland", 45.558934, -122.646207, 'ChIJnx54jh-nlVQRYoxJgM-MwbY'),
  new brunchtracker("Petite Provence (SE)", "4834 SE Division", "SE", "7:00 AM", "http://www.provencepdx.com/se-division-portland", 45.505084, -122.612473, 'ChIJR9VCcoqglVQRqqFADyLpLP8'),
  new brunchtracker("Pho Corner", "6120 NE Sandy", "NE", "9:00 AM", "http://phocorner.com/", 45.543855, -122.599685, 'ChIJX-3s5TChlVQRXKZ7NmaplKc'),
  new brunchtracker("Pig 'N Pancake", "12210 NE Glisan", "NE", "6:30 AM", "http://www.pignpancake.com/portland.html", 45.525834, -122.538866, 'ChIJIW9O2YOhlVQR2jv0Uf3HaeQ'),
  new brunchtracker("Pine State Biscuits (NE Alberta)", "2204 NE Alberta", "NE", "7:00 AM", "http://www.pinestatebiscuits.com", 45.558945, -122.642746, 'ChIJjQXl-d-mlVQRd9Pd-TdkxBY'),
  new brunchtracker("Pine State Biscuits (NE Schuyler)", "125 NE Schuyler", "NE", "7:00 AM", "http://www.pinestatebiscuits.com/", 45.535900, -122.664020, 'ChIJ_zaOyE2nlVQRyxjf2Q4wBd8'),
  new brunchtracker("Pine State Biscuits (SE)", "1100 SE Division", "SE", "7:00 AM", 
  "http://www.pinestatebiscuits.com/", 45.504642, -122.654428, 'ChIJ_zaOyE2nlVQRyxjf2Q4wBd8'),
  new brunchtracker("Po'Shines Cafe De La Soul (Saturdays only)", "8139 N Denver", "N", "8:00 AM", "http://poshines.com", 45.582270, -122.687308, 'ChIJ73GA1LCnlVQRSV0fPI8oV7U'),
  new brunchtracker("Podnah's Pit", "1625 NE Killingsworth", "NE", "9:00 AM", "http://www.podnahspit.com", 45.562895, -122.648279, 'ChIJPcNnRyKnlVQRYa0xFWzfQcI'),
  new brunchtracker("Portland Sweet Jam (NE)", "5237 NE MLK", "NE", "8:00 AM", "http://www.portlandsweetjam.com/pages/location-mlk.html", 45.561207, -122.661907, 'ChIJSZwpXhqnlVQRxZTQ9PNiO1c'),
  new brunchtracker("Portland Sweet Jam (SW)", "8775 SW Canyon Ln", "SW", "8:00 AM", "http://www.portlandsweetjam.com/pages/location-beaverton.html", 45.499035, -122.767174, 'ChIJq_Z4Zv0LlVQRfkSaxE7L2ss'),
  new brunchtracker("Prescott Cafe", "6205 NE Prescott", "NE", "7:00 AM", "http://www.yelp.com/biz/prescott-cafe-portland", 45.555564, -122.599051, 'ChIJVZzypbWmlVQR55LKFD2FyL8'),
  new brunchtracker("Produce Row Cafe", "204 SE Oak", "SE", "10:00 AM", "http://www.producerowcafe.com/brunch/", 45.519952, -122.663557, 'ChIJ2d5YlaeglVQR1X4QBMB5WPg'),
  new brunchtracker("Proud Mary Coffee", "2012 NE Alberta", "NE", "8:00 AM", "http://proudmarycoffee.com", 45.558857, -122.644434, 'ChIJC4lfHCCnlVQRcplEgf2qbfA'),
  new brunchtracker("Punch Bowl Social", "340 SW Morrison", "SW", "10:00 AM", "http://www.punchbowlsocial.com/location/portland", 45.518219, -122.676329, 'ChIJbyVpmgUKlVQRrhpIO5w7hOc'),
  new brunchtracker("Pure Spice", "2446 SE 87th", "SE", "9:30 AM", "http://purespicerestaurant.com", 45.505113, -122.573884, 'ChIJx9a4LLOhlVQRxK7F39w-58k'),
  new brunchtracker("Q Restaurant and Bar", "828 SW 2nd", "SW", "9:30 AM", "http://q-portland.com", 45.516796, -122.675027, 'ChIJlTRPdw8KlVQRart98XbCf1s'),
  new brunchtracker("Radar", "3951 N Mississippi", "N", "10:00 AM", "http://radarpdx.com/", 45.551627, -122.675840, 'ChIJFf6TUmqnlVQRKrWSGEeS_Ts'),
  new brunchtracker("Rain or Shine Coffeehouse", "5941 SE Division", "SE", "7:00 AM", "http://www.rainorshinepdx.com/", 45.505491, -122.601835, 'ChIJzXbStF6glVQRAiQsYc84F7w'),
  new brunchtracker("Red Square Cafe", "4505 SE Belmont", "SE", "8:00 AM", "http://redsquarecafe.com/", 45.516729, -122.615956, 'ChIJnx8BCu6glVQR7YzxlFUea4Q'),
  new brunchtracker("Redwood", "7915 SE Stark", "SE", "9:00 AM", "http://www.redwoodpdx.com/", 45.519306, -122.582058, 'ChIJ8eJNxQahlVQRdBlO5VTe2Jw'),
  new brunchtracker("Rocking Frog Cafe", "2511 SE Belmont", "SE", "8:00 AM", "http://rockingfrogpdx.com/", 45.516628, -122.639782, 'ChIJh0hXsJeglVQR5Qea2yIPJCQ'),
  new brunchtracker("Roman Candle", "3377 SE Division", "SE", "9:00 AM", "http://www.romancandlebaking.com/", 45.505015, -122.629875, 'ChIJtRfoFoaglVQROBSbie-CCOg'),
  new brunchtracker("Roost", "1403 SE Belmont", "SE", "10:00 AM", "http://www.roostpdx.com/", 45.516673, -122.651438, 'ChIJI4JKJKKglVQRLRG3SnkuqyU'),
  new brunchtracker("Rose VL Deli (Saturdays only)", "6424 SE Powell", "SE", "9:00 AM", "http://www.yelp.com/biz/rose-vl-deli-portland-2", 45.497159, -122.596676, 'ChIJcfYuT0KglVQRg__zfmjYWbU'),
  new brunchtracker("Roxy (24 hours)", "1121 SW Stark", "SW", "0:01 AM", "http://www.theroxydiner.com", 45.522599, -122.682560, 'ChIJORIPqAMKlVQRcM5_FUMed1I'),
  new brunchtracker("Salty's on the Columbia", "3839 NE Marine Dr", "NE", "9:30 AM", "http://saltys.com/portland", 45.600874, -122.624615, 'ChIJh9y2IHamlVQRtYXoYQcRp_M'),
  new brunchtracker("Sanborns", "3200 SE Milwaukie", "SE", "8:00 AM", "http://www.sanbornsbreakfast.com/", 45.500164, -122.653984, 'ChIJ2_QGqHsKlVQRKXn2g-QE1Gs'),
  new brunchtracker("Sandy Hut", "1430 NE Sandy", "NE", "11:00 AM", "http://www.yelp.com/biz/the-sandy-hut-portland", 45.523766, -122.650834, 'ChIJ6RjQw7qglVQRC8UeSD6Wg6o'),
  new brunchtracker("Sckavone's", "4100 SE Division", "SE", "8:00 AM", "http://www.sckavones.com/", 45.504599, -122.620232, 'ChIJPZIV8ImglVQRR28uwYjH-pA'),
  new brunchtracker("Screen Door", "2337 E Burnside", "NE", "9:00 AM", "http://www.screendoorrestaurant.com/", 45.523105, -122.641648, 'ChIJu1MQrL6glVQRNuGYoTmvBoY'),
  new brunchtracker("Sellwood Public House", "8132 SE 13th", "SE", "10:00 AM", "http://www.sellwoodpublichouse.com/index.html", 45.463778, -122.652733, 'ChIJUVzEV9oKlVQRMpDGw5WMwbo'),
  new brunchtracker("Sextant Bar and Galley", "4035 NE Marine Dr", "NE", "10:00 AM", "http://www.yelp.com/biz/sextant-bar-and-galley-portland", 45.600458, -122.622005, 'ChIJ76g-itillVQR3NG7JX7A7qE'),
  new brunchtracker("Side Door", "425 SE Washington", "SE", "11:00 AM", "http://www.thesidedoorpdx.com", 45.518812, -122.661173, ' ChIJy-qlEaeglVQROPemexzg8z4'),
  new brunchtracker("Slappy Cakes", "4246 SE Belmont", "SE", "8:00 AM", "http://slappycakes.com/", 45.51635, -122.618531, 'ChIJc1LuuO2glVQRFeFM-TqD_PA'),
  new brunchtracker("Slide Inn", "2348 SE Ankeny", "SE", "9:30 AM", "http://www.slideinnpdx.com/", 45.521967, -122.641668, 'ChIJXah8HryglVQRd1NOGl9G54A'),
  new brunchtracker("Smokehouse Tavern", "1401 SE Morrison St., #117", "SE", "10:00 AM", "http://www.smokehouse21.com/", 45.517773, -122.651101, 'ChIJ-8cetKOglVQRcntd3wABdC8'),
  new brunchtracker("Southfork (Sundays only)", "4605 NE Fremont", "NE", "8:30 AM", "http://www.southforkpdx.com/", 45.548503, -122.615910, 'ChIJtUjY39KmlVQRnnjr1vUDjKU'),
  new brunchtracker("Spielman Bagels (NE)", "2200 NE Broadway", "NE", "7:00 AM", "http://www.spielmanbagels.com/", 45.534779, -122.642674, 'ChIJTUNDuMuglVQRTQrMmmXDDbk'),
  new brunchtracker("Spielman Bagels (SE)", "2128 SE Division", "SE", "7:00 AM", "http://www.spielmanbagels.com/", 45.504654, -122.643945, 'ChIJu00Q7YKglVQRT7Az8Ewt3M8'),
  new brunchtracker("Spitz", "2103 N Killingsworth", "N", "11:00 AM", "http://spitzpdx.com", 45.562958, -122.689135, 'ChIJv91g_3SnlVQRinn86ygWIIY'),
  new brunchtracker("St. Honore Bakery (NW)", "2335 NW Thurman", "NW", "6:30 AM", "http://www.sainthonorebakery.com", 45.535636, -122.699668, 'ChIJHfDB0uUJlVQRiPSOjZY3qZQ'),
  new brunchtracker("St. Honore Bakery (SE)", "3333 SE Division", "SE", "7:00 AM", "http://www.sainthonorebakery.com", 45.504943, -122.630794, 'ChIJsw68bYaglVQR18drjIMwens'),
  new brunchtracker("St. Honore Bakery (SW)", "501 SW Broadway", "SW", "6:30 AM", "http://www.sainthonorebakery.com", 45.520596, -122.679153, 'ChIJSx8YZgQKlVQRXiMuMexDMpw'),
  new brunchtracker("Stacked Sandwich Shop (Saturdays only)", "1615 SE 3rd", "SE", "10:00 AM", "http://stackedsandwichshop.com", 45.511350, -122.663165, 'ChIJnaQcUwsKlVQRd4m5d5C_ZmQ'),
  new brunchtracker("Stepping Stone Cafe", "2390 NW Quimby", "NW", "7:30 AM", "http://www.steppingstonecafe.com/", 45.533243, -122.700455, 'ChIJPcHCgeUJlVQRda_zTqGXuOU'),
  new brunchtracker("Suki's Bar & Grill", "2401 SW 4th", "SW", "9:00 AM", "http://www.sukisbar.com", 45.505670, -122.682290, 'ChIJlUjFRBUKlVQRyeZmLYN1G6Q'),
  new brunchtracker("Sunny's Diner", "9993 SE 82nd", "SE", "7:00 AM", "http://www.sunnysdinernw.com", 45.450947, -122.579389, 'ChIJe3tWymF1lVQR4MTMT6ry9Co'),
  new brunchtracker("Suzette", "3342 SE Belmont", "SE", "9:00 AM", "http://www.suzettepdx.com/", 45.516313, -122.630009, 'ChIJeffdiN6mlVQRqnfounJeDhY'),
  new brunchtracker("Sweedeedee", "5202 N Albina", "N", "8:00 AM", "http://www.sweedeedee.com", 45.560566, -122.674851, 'ChIJeffdiN6mlVQRqnfounJeDhY'),
  new brunchtracker("Tabor Bread", "5051 SE Hawthorne", "SE", "8:00 AM", "http://www.taborbread.com", 45.512257, -122.610575, 'ChIJazvA__OglVQRSNySeFVV5XA'),
  new brunchtracker("Tabor Tavern", "5325 E Burnside", "NE", "11:00 AM", "http://tabortavern.com", 45.522865, -122.608428, 'ChIJO89iH-SglVQRCOJ6kjzWnFc'),
  new brunchtracker("Taco Pedaler", "2225 NE Broadway", "NE", "9:00 AM", "http://www.tacopedalerpdx.com", 45.535194, -122.642437, 'ChIJjRyevcuglVQRfEdJruyD6Uw'),
  new brunchtracker("Tamale Boy", "668 N Russell", "N", "11:00 AM", "http://tamaleboy.com/russell", 45.540990, -122.673232, 'ChIJA4yCpfumlVQR4yD-dZ7LLLU'),
  new brunchtracker("Tannery Bar", "5425 E Burnside", "NE", "9:00 AM", "http://www.tannerybarpdx.com", 45.523064, -122.607632, 'ChIJK3NEGuSglVQRZbRUxJI-Kzg'),
  new brunchtracker("Tapalaya", "28 NE 28th", "NE", "9:00 AM", "http://www.tapalaya.com/", 45.523387, -122.637052, 'ChIJHTTLIr-glVQRlk1hUrDPjRo'),
  new brunchtracker("Tasty n Alder", "580 SW 12th", "SW", "9:00 AM", "http://www.tastynalder.com/", 45.521341, -122.683477, 'ChIJq6qqqmqqlVQRcApXp7G1RGg'),
  new brunchtracker("Tasty n Sons", "3808 N Williams, #C", "N", "9:00 AM", "http://www.tastynsons.com", 45.549918, -122.666518, 'ChIJF2v3lj-nlVQR3H5DI02jF5k'),
  new brunchtracker("Tiffin Asha (Sundays only)", "1670 NE Killingsworth", "NE", "11:00 AM", "http://tiffinasha.com", 45.562702, -122.648294, 'ChIJK9t7Kh-nlVQRKAiqES2-KAY'),
  new brunchtracker("Tik Tok (SE 82nd) (24 hours)", "3330 SE 82nd", "SE", "0:01 AM", "http://tiktokrestaurant.com", 45.498097, -122.578530, 'ChIJhZ-wrUmglVQRQqPBbcMSkgQ'),
  new brunchtracker("Tik Tok (SE Division) (24 hours)", "11215 SE Division", "SE", "0:01 AM", "http://tiktokrestaurant.com", 45.504393, -122.547763, 'ChIJDQLEPsehlVQRl5brNxnDGZg'),
  new brunchtracker("Tin Shed Garden Cafe", "1438 NE Alberta", "NE", "7:00 AM", "http://tinshedgardencafe.com", 45.558964, -122.650876, 'ChIJm3XIOh-nlVQRS_D47L1wsB4'),
  new brunchtracker("Toast", "5222 SE 52nd", "SE", "8:00 AM", "http://www.toastpdx.com/", 45.485147, -122.608612, 'ChIJM2_26AyglVQRWQ-7QfC11MY'),
  new brunchtracker("Tom's Restaurant", "3871 SE Division", "SE", "7:00 AM", "http://www.tomsrestaurant.net", 45.505019, -122.622889, 'ChIJH8MdromglVQR5iwNUflT-l0'), 
  new brunchtracker("Trinket", "2035 SE Cesar E Chavez", "SE", "8:00 AM", "http://trinketpdx.com/", 45.508241, -122.622933, 'ChIJkSY8B4yglVQRNWqMEdmtC-s'),
  new brunchtracker("Tusk", "32444 E Burnside", "NE", "10:00 AM", "http://www.tuskpdx.com", 45.522637, -122.640494, 'ChIJfcK8u76glVQRrGwwsGh_7z0'),
  new brunchtracker("Vagabond", "4828 N Lombard", "N", "10:00 AM", "http://www.vagabondpdx.com", 45.580285, -122.719014, 'ChIJSc_ZW-ynlVQRHc1jFzWQcrA'),
  new brunchtracker("Verdigris", "1315 NE Fremont", "NE", "9:00 AM", "http://verdigrisrestaurant.com", 45.548390, -122.652463, 'ChIJqaZDVjqnlVQRjwRdTcOth1g'),
  new brunchtracker("Vivienne Kitchen & Pantry", "4128 NE Sandy", "NE", "9:00 AM", "http://www.viviennepdx.com", 45.535510, -122.620706, 'ChIJ90nPW9eglVQR0bEg4vApGgE'),
  new brunchtracker("Waffle Window (NE)", "2624 NE Alberta", "NE", "8:00 AM", "http://wafflewindow.com/menu-item/the-alberta", 45.558869, -122.638484, 'ChIJoQK6Ut6mlVQRbOaxFkOzP2k'),
  new brunchtracker("Waffle Window (SE)", "3610 SE Hawthorne", "SE", "8:00 AM", "http://wafflewindow.com/se-hawthorne-blvd", 45.511934, -122.626527, 'ChIJpbw-9I2glVQR8HBWZ8Yr9K8'),
  new brunchtracker("Wares", "2713 NE Sandy", "NE", "11:00 AM", "http://www.warespdx.com", 45.529077, -122.638001, 'ChIJofMX3tKmlVQRTiVc_yeaOHY'),
  new brunchtracker("Water Avenue Coffee", "1028 SE Water", "SE", "7:00 AM", "http://wateravenuecoffee.com", 45.515323, -122.665519, 'ChIJ8XIZ2AsKlVQRiDRF4AULtrQ'),
  new brunchtracker("Wild Abandon", "2411 SE Belmont", "SE", "9:00 AM", "http://www.wildabandonrestaurant.com/", 45.516674, -122.641096, 'ChIJLT9vlZeglVQRvk5j3t8m09w'),
  new brunchtracker("Woodsman Tavern", "4537 SE Division", "SE", "9:00 AM", "http://woodsmantavern.com/", 45.505515, -122.615469, 'ChIJcZaNf4qglVQRePA_O2mfZQg'),
  new brunchtracker("Ya Hala", "8005 SE Stark", "SE", "9:00 AM", "http://yahalarestaurant.com/", 45.51931, -122.581254, 'ChIJCRER3AahlVQRSjE0phkAs2Y'),
  new brunchtracker("Zell's Cafe", "1300 SE Morrison", "SE", "8:00 AM", "http://www.zellscafe.com/", 45.517043, -122.652403, 'ChIJQYyi1KOglVQRS2A-s6kwbok'),
];