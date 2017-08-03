//Review page output
var reviewText = "";
var rptContent = document.getElementById("review-content");
function reviewOutput () {
    var thumbup = "<img src='img/thumbsup.jpg'>";
    var thumbdown = "<img src='img/thumbsdown.jpg'>";
    rptContent.innerHTML = "";

    //load or set local storage
    if (localStorage.getItem("votes") === null) {
        localStorage.setItem("votes",JSON.stringify(brunchArr));
    } else {
        brunchArr = JSON.parse(localStorage.getItem("votes"));
    }

    for (var i=0, iLen=brunchArr.length; i<iLen; i++) {
        if (brunchArr[i].upvotes > 0 || brunchArr[i].downvotes > 0) {
            var recs = "";
            if (brunchArr[i].upvotes > 0) {
                for (var v=0; v < brunchArr[i].upvotes; v++) {
                    recs += thumbup;
                } //for upvotes
            } //if upvotes
            if (brunchArr[i].downvotes > 0) {
                for (var w=0; w < brunchArr[i].downvotes; w++) {
                    recs += thumbdown;
                } //for downvotes
            } //if downvotes
            rptContent.innerHTML += "<br><b>" + brunchArr[i].title + "</b><br>";
            rptContent.innerHTML += recs;
            rptContent.innerHTML += brunchArr[i].restcomment + "<br>";
        } // if any votes
    } //for brunchArr
}

//Review page process
function reviewPage (review) {
    var e = document.getElementById("restdropdown");
    var restChoice = e.options[e.selectedIndex].text;
    var restText = document.getElementById("reviewtext").value;

    reviewOutput();

    //identify and update proper array member and local store
    for (var i=0, iLen=brunchArr.length; i<iLen; i++) {
        if (brunchArr[i].title === restChoice) {
            if (review.value === "recommend") {
                brunchArr[i].upvotes++;
                brunchArr[i].restcomment += ('<br>"' + restText + '"');
            } else if (review.value === "notrecommend") {
                brunchArr[i].downvotes++;
                brunchArr[i].restcomment += ('<br>"' + restText + '"');
            } //if/else if recommend
            localStorage.setItem("votes",JSON.stringify(brunchArr));
            display('review-content', 1);
        } //if title ==
    } //for

    reviewOutput();
    document.getElementById("votes").reset();
}
