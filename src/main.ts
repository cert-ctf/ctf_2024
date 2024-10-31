/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();
	
	// Mirror show Duke
	WA.room.area.onEnter('Mirror_Duke').subscribe(() => {		
		WA.room.showLayer("decoration/mirror_duke");		
	})
	
	WA.room.area.onLeave('Mirror_Duke').subscribe(() => {
		WA.room.hideLayer("decoration/mirror_duke");		
	}) 
	
	
	//Roofs------------------------------------------------------------------------
	
	// Moon Room
	WA.room.area.onEnter('moon_inside').subscribe(() => {
		WA.room.showLayer("above_inside/above_inside_1");		
		WA.room.showLayer("stuff_inside/stuff_inside_1");		
		WA.room.showLayer("stuff_inside/stuff_inside_2");		
		WA.room.showLayer("world/station_inside");		
				
		WA.room.hideLayer("above_outside/above_roof_1");	
		WA.room.hideLayer("above_outside/above_roof_2");			
		WA.room.hideLayer("stuff_outside/stuff_outside_1");		
		WA.room.hideLayer("world/station");	
	})
	
	WA.room.area.onEnter('moon_outside').subscribe(() => {
		WA.room.hideLayer("above_inside/above_inside_1");		
		WA.room.hideLayer("stuff_inside/stuff_inside_1");		
		WA.room.hideLayer("stuff_inside/stuff_inside_2");		
		WA.room.hideLayer("world/station_inside");	
		
		WA.room.showLayer("above_outside/above_roof_1");	
		WA.room.showLayer("above_outside/above_roof_2");			
		WA.room.showLayer("stuff_outside/stuff_outside_1");	
		WA.room.showLayer("world/station");	
	})
	

	// HiFi Room
	WA.room.area.onEnter('HiFi_Room').subscribe(() => {
		WA.room.hideLayer("HiFi_roof");		
	})
	
	WA.room.area.onLeave('HiFi_Room').subscribe(() => {
		WA.room.showLayer("HiFi_roof");
	}) 
	
	// Praxis_1 Room
	WA.room.area.onEnter('Praxis_1_Room').subscribe(() => {
		WA.room.hideLayer("Praxis_1_roof");		
	})
	
	WA.room.area.onLeave('Praxis_1_Room').subscribe(() => {
		WA.room.showLayer("Praxis_1_roof");		
	}) 
	
	// Praxis_2 Room
	WA.room.area.onEnter('Praxis_2_Room').subscribe(() => {
		WA.room.hideLayer("Praxis_2_roof");		
	})
	
	WA.room.area.onLeave('Praxis_2_Room').subscribe(() => {
		WA.room.showLayer("Praxis_2_roof");		
	}) 
	
	// Fax Room
	WA.room.area.onEnter('Fax_Room').subscribe(() => {
		WA.room.hideLayer("Fax_roof");		
	})
	
	WA.room.area.onLeave('Fax_Room').subscribe(() => {
		WA.room.showLayer("Fax_roof");		
	}) 
	
	// Bus Room
	WA.room.area.onEnter('Bus_Room').subscribe(() => {
		WA.room.hideLayer("Bus_Station_Roof");		
	})
	
	WA.room.area.onLeave('Bus_Room').subscribe(() => {
		WA.room.showLayer("Bus_Station_Roof");		
	}) 
	
		
	//POPUPS---------------------------------------------------------------------------
	// Popup Radar Station 1
	WA.room.area.onEnter('area_radar_inside_1').subscribe(() => {
		console.log("!")
		currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Was war das für ein Knall?!", [{
			label: "Next",
			className: "primary",
			callback: () => {
				// Close the popup when the "Close" button is pressed.
				closePopup();
				currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Die Tür hat sich auch automatisch geschlossen, was geht hier vor?", [{
					label: "Next",
					className: "primary",
					callback: () => {
						// Close the popup when the "Close" button is pressed.
						closePopup();
						currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Wir sollten prüfen was hier vor sich geht...", [{
							label: "Next",
							className: "primary",
							callback: () => {
								// Close the popup when the "Close" button is pressed.
								closePopup();
								currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Eventuell hat die Außenkamera eine Aufzeichnung erstellt...", [{
									label: "Close",
									className: "primary",
									callback: () => {
										// Close the popup when the "Close" button is pressed.
										closePopup();
									}
								}]);
							}
						}]);
					}
				}]);
			}
		}]);
	});
    WA.room.area.onLeave('area_radar_inside_1').subscribe(closePopup)

	// Popup Arztpraxis
	WA.room.area.onEnter('area_praxis').subscribe(() => {
		console.log("!")
		currentPopup = WA.ui.openPopup("popup_praxis", "Gut, dass du da bist, wir haben für dich das Fax stehenlassen.", [{
			label: "Next",
			className: "primary",
			callback: () => {
				// Close the popup when the "Close" button is pressed.
				closePopup();
				currentPopup = WA.ui.openPopup("popup_praxis", "Vielleicht findest du Hinweise auf den Übeltäter", [{
					label: "Next",
					className: "primary",
					callback: () => {
						// Close the popup when the "Close" button is pressed.
						closePopup();
						currentPopup = WA.ui.openPopup("popup_praxis", "Wir verwenden jetzt KIM und den TI-Messenger für sichere Kommunikation im Medizinwesen", [{
							label: "Close",
							className: "primary",
							callback: () => {
								// Close the popup when the "Close" button is pressed.
								closePopup();								
							}
						}]);
					}
				}]);
			}
		}]);
	});
	WA.room.area.onLeave('area_praxis').subscribe(closePopup)

	//Popup VirtualCare
	WA.room.area.onEnter('area_virtualcare').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_virtualcare_1","Praxis geschlossen: Urlaub",[]);			
    })
    WA.room.area.onLeave('area_virtualcare').subscribe(closePopup)

	
	//Popup People 
	WA.room.area.onEnter('people_info_01').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_people_info_01","Der neue Film beim Autokino gefällt mir absolut nicht!",[]);			
    })
    WA.room.area.onLeave('people_info_01').subscribe(closePopup)

	WA.room.area.onEnter('people_info_02').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_people_info_02","Es wurde mein Rezept von letzter Woche angezeigt",[]);			
    })
    WA.room.area.onLeave('people_info_02').subscribe(closePopup)

	WA.room.area.onEnter('people_info_03').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_people_info_03","Auf allen Kanälen laufen unsere Rezepte von der Altstadt Praxis",[]);			
    })
    WA.room.area.onLeave('people_info_03').subscribe(closePopup)

	WA.room.area.onEnter('people_info_04').subscribe(() => {
        currentPopup = WA.ui.openPopup("Popup_people_info_04","Es wurde ein Rezept von meinem Nachbarn gezeigt",[]);			
    })
    WA.room.area.onLeave('people_info_04').subscribe(closePopup)
	

	
	function closePopup(){
		if (currentPopup !== undefined) {
			currentPopup.close();
			currentPopup = undefined;
		}
	}
	


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));



export {};
