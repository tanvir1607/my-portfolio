function addRecommendation() {

    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value.trim() !== "") {
        console.log("New recommendation added");
        showPopup(true);
        let element = document.createElement("div");
        element.setAttribute("class", "card");

        element.innerHTML =
                            "<span>&#8220;</span>" +
                            recommendation.value +
                            "<span>&#8221;</span>";

        document.getElementById("all_recommendations").appendChild(element);
        recommendation.value = "";
    }
}


function showPopup(bool) {
    let popup = document.getElementById("popup");
    if (bool) {
        popup.style.visibility = "visible";
    }
    else {
        popup.style.visibility = "hidden";
    }
}