window.onload = function() {
    // ARRAYS AND LISTS
    let detailsList = new Array (
        { item: "Name: Edwina"},
         { item: "Surname: Thaba"},
          { item: "Bio: I am a recent graduate from Boston city campus & business college. <br> I studied diploam is systems development. The languages I did are html,<br> css,java,javaScript,php,sql & c++ "},
           { item: "Projects: Food Menu, Equipment Rental System etc"},
            { item: "Contact: 072-372-1312"},
            { item: "Email: mantshathaba@gmail.com"}
            );


    let listUl = "<div>"   
    for (let i = 0; i < detailsList.length; i++) {
        console.log(detailsList[i].item);
        listUl += 
        "<table style='width:30%; marigns: 8px; border:1px solid grey; border-radius: 16px'><tr><td>" +
        detailsList[i].item + "</td></tr></table>";
    }        
    listUl += "</div>";
    document.getElementById('MyCv').innerHTML = listUl

   // document.getElementById('MyCV').innerHTML = detailsList;

};