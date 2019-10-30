sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("medhachaitanya.MAGCognitiveAPIs.controller.MainPage", {
		onInit: function () {

		},

		button_press_evaluate: function (Oevt) {
			var s1 = this.getView().byId("compare1").getValue();
			var s2 = this.getView().byId("compare2").getValue();
			console.log(s1 + s2);
			// $.ajax({
			// 	url: "https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?s1=" + s1 + "&s2=" + s2,
			// 	type: "get", //send it through get method
			// 	headers: { 'Authorization': '1q29968e0b4bb74ffc9ed09c898f31fa0b','Ocp-Apim-Subscription-Key': '29968e0b4bb74ffc9ed09c898f31fa0b', 'Access-Control-Allow-Headers':'*' },
			// 	// data: {
			// 	// 	ajaxid: 4,
			// 	// 	UserID: UserID,
			// 	// 	EmailAddress: EmailAddress
			// 	// },
			// 	success: function (response) {
			// 		//Do Something
			// 		console.log(response)
			// 	},
			// 	error: function (xhr) {
			// 		//Do Something to handle error
			// 		console.log(xhr);
			// 	}
			// });

			var myHeaders = new Headers();
			myHeaders.append("Ocp-Apim-Subscription-Key", "29968e0b4bb74ffc9ed09c898f31fa0b");
			myHeaders.append("Authorization", "29968e0b4bb74ffc9ed09c898f31fa0b");
			myHeaders.append('Access-Control-Allow-Origin', 'https://msr-apis.portal.azure-api.net');
			myHeaders.append('Access-Control-Allow-Credentials', 'x-requested-with');

			var requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
			};

			fetch('https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?s1=image processing&s2=machine learning', requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));

var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?s1="+s1+"&s2=" +s2,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","29968e0b4bb74ffc9ed09c898f31fa0b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
		},
		button_press_author: function (OEvt) {

		}

	});
});
