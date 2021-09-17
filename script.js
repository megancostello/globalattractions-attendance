// TODO: load the dataset 

let attractions;

//test to make sure changes updating
fetch('/attractions.json')
.then(response => response.json())
.then(data => {
        attractions = data;
        console.log('a - ', attractions);
        filterData('all');

});

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    
    if (category != 'all') {
        console.log('category is ', category);
        let filteredAtt = attractions.filter(att => att.Category == category);
        console.log('filtered attractions ', filteredAtt);
        filteredAtt.sort();
        console.log('sorted attractions ', filteredAtt);
        renderBarChart(filteredAtt.slice(0,5));
    }
    else {
        attractions.sort();
        console.log('sorted attractions ', attractions);
        renderBarChart(attractions.slice(0,5));
    }
}

function handler(event) {
    filterData(event.target.value);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let elem = document.querySelector('#attraction-category');
console.log('elem is ', elem);
elem.addEventListener('change', handler);
console.log('complete');
